import { expect, describe, it } from "vitest";
import { render } from "./renderer";

describe("render()", () => {
  it("should render correctly for a given block height", () => {
    // use snapshots to avoid having to manually assert on html strings
    expect(render("12345")).toMatchInlineSnapshot(`"<h1>12345</h1>"`);
  });
});
