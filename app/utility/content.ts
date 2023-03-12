import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { trimSlashes } from "~~/utility/pathHelpers";
import { isDate, isString } from "~~/utility/validation";

export interface IContent {
  title: string;
  description: string;
  body: ParsedContent;
  path: string;
}

export interface IPost extends IContent {
  date?: Date;
  category?: string;
  author?: string;
  series?: string;
  keywords?: string[];
}

export interface IAuthor extends IContent {
  avatar?: string;
  color?: string;
  letters?: string;
}

export interface IContentSearchOptions {
  exact?: boolean;
  limit?: number;
  author?: string;
  series?: string;
}

export function getContent(path: string | string[] | undefined, options: IContentSearchOptions | undefined = undefined): Promise<IContent[]> {
  path = isString(path);
  if (path === undefined) {
    return Promise.resolve([]);
  }
  const sanitizedPath = trimSlashes(path);

  let query = queryContent(sanitizedPath);
  if (options) {
    if (options.exact) {
      query = query.where({ _path: `/${sanitizedPath}` }).limit(1);
    } else if (options.limit) {
      query = query.limit(options.limit);
    }

    if (options.author) {
      query = query.where({ author: options.author });
    }

    if (options.series) {
      query = query.where({ series: options.series });
    }
  }

  return query.find().then((found) => {
    return found.map((parsed) => {
      const realPath = `/${trimSlashes(parsed._path) ?? sanitizedPath}`;

      return {
        title: isString(parsed?.title, realPath),
        description: isString(parsed?.description, realPath),
        body: parsed,
        path: realPath,
      };
    });
  });
}

export function getContentExact(path: string | string[] | undefined, options: IContentSearchOptions | undefined = undefined): Promise<IContent | undefined> {
  const adjustedOptions: IContentSearchOptions = {
    exact: true,
    limit: options?.limit,
  };

  return getContent(path, adjustedOptions).then((results) => {
    if (results.length <= 0) {
      return undefined;
    }

    return results[0];
  });
}

function upgradeToPost(content: IContent): IPost;
function upgradeToPost(content: undefined): undefined;
function upgradeToPost<T extends IContent | undefined>(content: T): IContent | undefined;
function upgradeToPost(content: IContent | undefined): IPost | undefined {
  if (!content) {
    return undefined;
  }
  const post: IPost = content;
  post.category = isString(post.body.category);
  post.author = isString(post.body.author);
  post.series = isString(post.body.series);
  post.date = isDate(post.body.date);
  return post;
}

export function getPost(id: string | string[] | undefined): Promise<IPost | undefined> {
  id = isString(id);
  if (id === undefined) {
    return Promise.resolve(undefined);
  }
  id = id.trim();
  return getContentExact(`post/${id}`).then(upgradeToPost);
}

function sortPost(a: IPost, b: IPost): number {
  const ai = a.date?.getTime() ?? 0;
  const bi = b.date?.getTime() ?? 0;
  return ai - bi;
}

export function getPosts(options: IContentSearchOptions | undefined = undefined): Promise<IPost[]> {
  return getContent("post/", options).then((contents) => contents.map((content) => upgradeToPost(content)).sort(sortPost));
}

function upgradeToAuthor(content: IContent): IAuthor;
function upgradeToAuthor(content: undefined): undefined;
function upgradeToAuthor<T extends IContent | undefined>(content: T): IContent | undefined;
function upgradeToAuthor(content: IContent | undefined): IAuthor | undefined {
  if (!content) {
    return undefined;
  }
  const author: IAuthor = content;
  author.avatar = isString(author.body.avatar);
  author.color = isString(author.body.color);
  author.letters = isString(author.body.letters);
  return author;
}

export function getAuthor(id: string | string[] | undefined): Promise<IAuthor | undefined> {
  id = isString(id);
  if (id === undefined) {
    return Promise.resolve(undefined);
  }
  id = id.trim();

  return getContentExact(`author/${id}`).then(upgradeToAuthor);
}
