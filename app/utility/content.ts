import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { trimSlashes } from "~~/utility/pathHelpers";
import { isString } from "~~/utility/validation";

export interface IContentSearchOptions {
  exact?: boolean;
  limit?: number;
}

export interface IContent {
  title: string;
  description: string;
  body: ParsedContent;
  path: string;
}

export interface IPost extends IContent {
  category?: string;
  author?: string;
  series?: string;
  keywords?: string[];
}

export async function getContent(path: string | string[] | undefined, options: IContentSearchOptions | undefined = undefined): Promise<IContent[]> {
  path = isString(path);
  if (path === undefined) {
    return [];
  }
  const sanitizedPath = trimSlashes(path);

  let query = queryContent(sanitizedPath);
  if (options) {
    if (options.exact) {
      query = query.where({ _path: `/${sanitizedPath}` }).limit(1);
    } else if (options.limit) {
      query = query.limit(options.limit);
    }
  }

  const found = await query.find();

  return found.map((parsed) => {
    const realPath = trimSlashes(parsed._path) ?? "";

    return {
      title: isString(parsed?.title, realPath),
      description: isString(parsed?.description, realPath),
      body: parsed,
      path: realPath,
    };
  });
}

export async function getContentExact(path: string | string[] | undefined, options: IContentSearchOptions | undefined = undefined): Promise<IContent | undefined> {
  const adjustedOptions: IContentSearchOptions = {
    exact: true,
    limit: options?.limit,
  };

  const results = await getContent(path, adjustedOptions);
  if (results.length <= 0) {
    return undefined;
  }

  return results[0];
}

export async function getPost(id: string | string[] | undefined): Promise<IPost | undefined> {
  id = isString(id);
  if (id === undefined) {
    return undefined;
  }
  const found: IPost | undefined = await getContentExact(`post/${id}`);
  if (!found) {
    return undefined;
  }

  found.category = isString(found.body.category);
  found.author = isString(found.body.author);
  found.series = isString(found.body.series);

  return found;
}
