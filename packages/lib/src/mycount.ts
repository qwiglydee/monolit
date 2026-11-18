import {
    html,
    css,
    LitElement,
    type CSSResult,
    type TemplateResult,
    type PropertyDeclarations,
} from "lit";

/**
 * Classic button with a counter.
 */
export class MyCount extends LitElement {
    /** the counter of clicks */
    declare counter: number;

    /** @internal */
    static override properties: PropertyDeclarations = {
        counter: { type: Number, state: true },
    };

    constructor() {
        super();
        this.counter = 0;
    }

    /** @internal */
    _increment() {
        this.counter += 1;
    }

    override render(): TemplateResult {
        return html`
            <p>Count: ${this.counter}</p>
            <button part="button" @click=${this._increment}>increment</button>
        `;
    }

    /** @internal */
    static override styles: CSSResult = css`
        :host {
            display: block;
        }
    `;
}
