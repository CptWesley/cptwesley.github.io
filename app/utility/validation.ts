import { z } from "zod";

const stringSchema = z.string();

export function isString(obj: any | unknown): string | undefined;
export function isString(obj: any | unknown, alt: string): string;
export function isString(obj: any | unknown, alt: string | undefined = undefined): string | undefined {
  if (obj === null || obj === undefined) {
    return alt;
  }
  const result = stringSchema.safeParse(obj);
  if (!result.success) {
    console.error(`Failed to parse value to string: ${obj}`);
    return alt;
  }

  return result.data;
}
