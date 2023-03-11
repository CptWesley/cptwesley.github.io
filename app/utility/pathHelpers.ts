export function trimLeadingSlashes(a: undefined): undefined;
export function trimLeadingSlashes(a: string): string;
export function trimLeadingSlashes<T extends string | undefined>(a: T): string | undefined;
export function trimLeadingSlashes(a: string | undefined): string | undefined {
  a = a?.trimStart();
  if (!a) {
    return a;
  }

  while (a.length > 0 && (a.charAt(0) === "/" || a.charAt(0) === "\\")) {
    a = a.slice(1);
  }

  return a;
}

export function trimTrailingSlashes(a: undefined): undefined;
export function trimTrailingSlashes(a: string): string;
export function trimTrailingSlashes<T extends string | undefined>(a: T): string | undefined;
export function trimTrailingSlashes(a: string | undefined): string | undefined {
  a = a?.trimEnd();
  if (!a) {
    return a;
  }

  while (a.length > 0 && (a.charAt(a.length - 1) === "/" || a.charAt(a.length - 1) === "\\")) {
    a = a.slice(0, a.length - 1);
  }

  return a;
}

export function trimSlashes(a: undefined): undefined;
export function trimSlashes(a: string): string;
export function trimSlashes<T extends string | undefined>(a: T): string | undefined;
export function trimSlashes(a: string | undefined): string | undefined {
  return trimTrailingSlashes(trimLeadingSlashes(a));
}

export function comparePaths(a: string | undefined, b: string | undefined): boolean {
  a = a?.trim();
  b = b?.trim();

  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  const strippedA = trimSlashes(a);
  const strippedB = trimSlashes(b);
  return strippedA === strippedB;
}
