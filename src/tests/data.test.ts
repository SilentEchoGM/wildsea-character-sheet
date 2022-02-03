/**
 * @jest-environment jsdom
 */

import data from "$data/character";
import type { CharacterData } from "$types/data";

describe("Test data factory", () => {
  test("Build data structure", () => {
    const $data = data();
    console.log(JSON.stringify($data));

    expect($data).toBe<CharacterData>($data);
  });
});
