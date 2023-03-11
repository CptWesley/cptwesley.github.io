import { z } from "zod";

const stringSchema = z.string();
const integerSchema = z.number().int();
const dateSchema = z.string().datetime({ offset: true });

export function isString(obj: any | unknown): string | undefined;
export function isString(obj: any | unknown, alt: string): string;
export function isString(obj: any | unknown, alt: string | undefined): string | undefined;
export function isString(obj: any | unknown, alt: string | undefined = undefined): string | undefined {
  if (obj === null || obj === undefined) {
    return alt;
  }
  const result = stringSchema.safeParse(obj);
  if (!result.success) {
    return alt;
  }

  return result.data;
}

export function isInt(obj: any | unknown): number | undefined;
export function isInt(obj: any | unknown, alt: number): number;
export function isInt(obj: any | unknown, alt: number | undefined): number | undefined;
export function isInt(obj: any | unknown, alt: number | undefined = undefined): number | undefined {
  if (obj === null || obj === undefined) {
    return alt;
  }
  const result = integerSchema.safeParse(obj);
  if (!result.success) {
    return alt;
  }

  return result.data;
}

const launchTimeS = 1678569534;
const launchTimeMs = launchTimeS * 1000;
const launchTimeNs = launchTimeMs * 1000;

export function isDate(obj: any | unknown): Date | undefined;
export function isDate(obj: any | unknown, alt: Date): Date;
export function isDate(obj: any | unknown, alt: Date | undefined): Date | undefined;
export function isDate(obj: any | unknown, alt: Date | undefined = undefined): Date | undefined {
  if (obj === null || obj === undefined) {
    return alt;
  }

  let date: Date | undefined;

  const asString = isString(obj);
  if (asString) {
    const stringResult = dateSchema.safeParse(asString);
    if (stringResult.success) {
      date = new Date(stringResult.data);
    }
  } else if (obj instanceof Date && dateSchema.safeParse(obj.toISOString()).success) {
    date = obj;
  } else {
    const asInt = isInt(obj);
    if (asInt) {
      if (asInt > launchTimeNs && asInt / 1000 <= launchTimeNs) {
        date = new Date(asInt / 1000);
      } else if (asInt > launchTimeMs) {
        date = new Date(asInt);
      } else if (asInt < launchTimeMs && asInt * 1000 >= launchTimeMs) {
        date = new Date(1000 * asInt);
      }
    }
  }

  if (!date) {
    return alt;
  }

  return date;
}
