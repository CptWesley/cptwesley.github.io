import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { comparePaths } from "~~/utility/pathHelpers";
import { isString } from "~~/utility/validation";

export interface IContent {
  title: string;
  description: string;
  body: ParsedContent;
}

export interface IPost extends IContent {
  category?: string;
  author?: string;
  series?: string;
  keywords?: string[];
}

export async function getContent(path: string | string[] | undefined): Promise<IContent | undefined> {
  path = isString(path);
  if (path === undefined) {
    return undefined;
  }
  const found = await queryContent(path).limit(1).find();
  const parsed = found.length > 0 ? found[0] : undefined;
  if (!parsed || !comparePaths(parsed._path, path)) {
    return undefined;
  }

  return {
    title: isString(parsed?.title, path),
    description: isString(parsed?.description, path),
    body: parsed,
  };
}

export async function getPost(id: string | string[] | undefined): Promise<IPost | undefined> {
  id = isString(id);
  if (id === undefined) {
    return undefined;
  }
  const found: IPost | undefined = await getContent(`post/${id}`);
  if (!found) {
    return undefined;
  }

  found.category = isString(found.body.category);
  found.author = isString(found.body.author);
  found.series = isString(found.body.series);

  return found;
}
