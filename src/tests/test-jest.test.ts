/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import Index from "../routes/index.svelte";
import { render } from "@testing-library/svelte";

describe("Test if Jest is working", () => {
  test("Import the index route", () => {
    render(Index);

    expect(document.body).toBeInstanceOf(HTMLBodyElement);
  });
});
