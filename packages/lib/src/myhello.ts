import {
    LitElement,
    css,
    html,
    type CSSResult,
    type PropertyDeclarations,
    type PropertyValues,
    type TemplateResult,
} from "lit";

/**
 * Element for greeting.
 * Renders a header with a greating.
 */
export class MyHello extends LitElement {
    /** (not reflected) whom to greet */
    declare whom: string;

    /** compiled greeting */
    declare greeting?: string;

    // @internal
    static override properties: PropertyDeclarations = {
        whom: { type: String, reflect: false },
        geeting: { type: String, state: true },
    };

    constructor() {
        super();
        this.whom = "World";
    }

    // @internal
    override update(changed: PropertyValues): void {
        if (changed.has("whom")) this.greeting = `Hello, ${this.whom}!`;
        super.update(changed);
    }

    override render(): TemplateResult {
        return html`<h1>${this.greeting}</h1>`;
    }

    /** @cssprop --my-hello-size font size of the greeting */

    // @internal
    static override styles: CSSResult = css`
        :host {
            display: block;
        }

        h1 {
            font-size: var(--my-hello-size);
        }
    `;
}
