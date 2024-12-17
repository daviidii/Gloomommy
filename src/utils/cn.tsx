import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (
  ...inputs: (string | object | (string | object)[])[]
): string => {
  return twMerge(clsx(...inputs));
};
