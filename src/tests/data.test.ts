/**
 * @jest-environment jsdom
 */

import data from "$data";

describe("Test data factory", () => {
  test("Build data structure", () => {
    const $data = data();
    console.log($data);

    expect($data).toBeInstanceOf({});
  });
});
