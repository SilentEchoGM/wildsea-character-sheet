import { edgeList } from "./edge";
import { languageList } from "./language";
import { skillList } from "./skill";
import { pipe } from "fp-ts/function";
import { array as A } from "fp-ts";
import type { CharacterData, Resource } from "$types/data";
import { backgroundProperties } from "./backgroundProperties";

export default (): CharacterData => ({
  background: pipe(
    [...backgroundProperties],
    A.mapWithIndex((order, label) => ({
      label,
      order,
      text: "",
    }))
  ),
  backgroundNotes: [],
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
