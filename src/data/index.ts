import { edgeList } from "./edge";
import { languageList } from "./language";
import { skillList } from "./skill";
import { pipe } from "fp-ts/function";
import { array as A } from "fp-ts";

export default () => ({
  background: {
    name: "",
    player: "",
    origin: "",
    bloodline: "",
    post: "",
    "other notes": [],
  },
  milestone: [],
  drives: [],
  mires: [],
  notes: [],
  edge: pipe(
    [...edgeList],
    A.map((name) => {
      return {
        name,
        max: 1,
        value: 0,
      };
    })
  ),
  language: pipe(
    [...languageList],
    A.map((name) => {
      return {
        name,
        max: 1,
        value: 0,
      };
    })
  ),
  skill: pipe(
    [...skillList],
    A.map((name) => {
      return {
        name,
        max: 3,
        value: 0,
      };
    })
  ),
});
