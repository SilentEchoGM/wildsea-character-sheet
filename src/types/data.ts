import type { edgeList } from "$data/edge";
import type { languageList } from "$data/language";
import type { skillList } from "$data/skill";

export type Edge = typeof edgeList[number];
export type Language = typeof languageList[number];
export type Skill = typeof skillList[number];

export type Background = {
  name: string;
  player: string;
  origin: string;
  bloodline: string;
  post: string;
  "other notes": string[];
};

export type Milestone = {
  type: "major" | "minor";
  text: string;
};
