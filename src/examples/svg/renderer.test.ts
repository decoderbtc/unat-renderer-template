import { expect, describe, it } from "vitest";
import { render } from "./renderer";

describe("svg render()", () => {
  it("should render the correct animal for blocks ending with 0", () => {
    // query the first child of the wrapper div which is the svg element
    let svgElement = render("100").children[0];

    // assert that the svg element contains the correct title element using @testing-library/jest-dom
    expect(svgElement).toHaveAccessibleName("rooster");
  });

  it("should render the correct animal for blocks ending with 1", () => {
    expect(render("101").children[0]).toHaveAccessibleName("rat");
  });

  it("should render the correct animal for blocks ending with 2", () => {
    expect(render("102").children[0]).toHaveAccessibleName("ox");
  });

  it("should render the correct animal for blocks ending with 3", () => {
    expect(render("103").children[0]).toHaveAccessibleName("tiger");
  });

  it("should render the correct animal for blocks ending with 4", () => {
    expect(render("104").children[0]).toHaveAccessibleName("rabbit");
  });

  it("should render the correct animal for blocks ending with 5", () => {
    expect(render("105").children[0]).toHaveAccessibleName("dragon");
  });

  it("should render the correct animal for blocks ending with 6", () => {
    expect(render("106").children[0]).toHaveAccessibleName("snake");
  });

  it("should render the correct animal for blocks ending with 7", () => {
    expect(render("107").children[0]).toHaveAccessibleName("horse");
  });

  it("should render the correct animal for blocks ending with 8", () => {
    expect(render("108").children[0]).toHaveAccessibleName("goat");
  });

  it("should render the correct animal for blocks ending with 9", () => {
    expect(render("109").children[0]).toHaveAccessibleName("monkey");
  });

  it("should render the correct animal for blocks ending with 69", () => {
    expect(render("169").children[0]).toHaveAccessibleName("dog");
  });

  it("should render the correct animal for blocks ending with 420", () => {
    expect(render("1420").children[0]).toHaveAccessibleName("pig");
  });
});
