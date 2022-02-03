import { indexedDBStorage, persist } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";
import baseCharacterData from "$data/character";

export const characterData = persist(
  writable(baseCharacterData()),
  indexedDBStorage(),
  "characterData"
);
