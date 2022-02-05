import { edgeList } from "./edge";
import { languageList } from "./language";
import { skillList } from "./skill";
import { pipe } from "fp-ts/function";
import { array as A } from "fp-ts";
import type { CharacterData, Resource } from "$types/data";
import { backgroundProperties } from "./backgroundProperties";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export default (): Writable<CharacterData> =>
  writable({
    fixedBackgroundFields: pipe(
      [...backgroundProperties],
      A.mapWithIndex((order, label) => ({
        label,
        order,
        text: "",
      }))
    ),
    customBackgroundFields: [
      {
        label: "",
        order: 1,
        text: "",
      },
    ],
    milestone: [],
    drives: [],
    mires: [],
    notes: [],
    edge: pipe(
      [...edgeList],
      A.map((label) => ({
        label,
        max: 1,
        value: 0,
      }))
    ),
    languages: pipe(
      [...languageList],
      A.map((label) => ({
        label,
        max: 1,
        value: 0,
      }))
    ),
    skills: pipe(
      [...skillList],
      A.map((skill) => {
        return {
          ...skill,
          max: 3,
          value: 0,
        };
      })
    ),
    aspects: [],
    tracks: [],
    resources: [] as Resource[],
  });
