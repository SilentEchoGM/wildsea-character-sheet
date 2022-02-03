import type { backgroundProperties } from "$data/character/backgroundProperties";
import type { edgeList } from "$data/character/edge";
import type { languageList } from "$data/character/language";
import type { resourceTypeList } from "$data/character/resource";
import type { skillList } from "$data/character/skill";

export type Edge = typeof edgeList[number];
export type Language = typeof languageList[number];
export type Skill = typeof skillList[number];
export type ResourceType = typeof resourceTypeList[number];
export type BackgroundProperty = typeof backgroundProperties[number];

export type Resource = {
  label: string;
  type: ResourceType;
  text: string;
};

export type Background = {
  label: BackgroundProperty;
  order: number;
  text: string;
};

export type Milestone = {
  type: "major" | "minor";
  text: string;
  label: string;
};

export type Track = {
  label: string;
  max: number;
  value: number;
};

export type CharacterData = {
  background: Background[];
  backgroundNotes: string[];
  milestone: Milestone[];
  drives: string[];
  mires: string[];
  notes: string[];
  edge: ({ label: Edge } & Track)[];
  skills: (Skill & Track)[];
  languages: ({ label: Language } & Track)[];
  aspects: Track[];
  tracks: Track[];
  resources: Resource[];
};
