import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";

import { MyHello } from "../src/myhello.js";

describe("MyHello", () => {
    beforeAll(() => {
        customElements.define("my-hello", MyHello);
    });

    it("renders", async () => {
        const rendered = render(html`<my-hello></my-hello>`); // extended locator
        const heading = rendered.getByRole("heading"); // across shadow

        await expect.element(heading).toHaveTextContent("Hello, World!");
    });

    it("customizes", async () => {
        const rendered = render(html`<my-hello whom="beautiful world"></my-hello>`);
        const heading = rendered.getByRole("heading");

        await expect.element(heading).toHaveTextContent("Hello, beautiful world!");
    });

    it("updates", async () => {
        const rendered = render(html`<my-hello data-testid="main" whom="beautiful world"></my-hello>`);
        const elem = rendered.getByTestId("main").element(); // immediately the DOM Element
        const heading = rendered.getByRole("heading");

        await expect.element(heading).toHaveTextContent("Hello, beautiful world!");

        elem.whom = "cruel world";

        await expect.element(heading).toHaveTextContent("Hello, cruel world!");
    });
});
