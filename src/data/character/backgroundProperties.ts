import type { BackgroundField } from "$types/data";
import type { eq } from "fp-ts";

export const backgroundProperties = [
  "name",
  "player",
  "origin",
  "bloodline",
  "post",
] as const;

export const eqBackgroundField: eq.Eq<BackgroundField> = {
  equals: ({ label: labelA, text: textA }, { label: labelB, text: textB }) =>
    labelA === labelB && textA === textB,
};
