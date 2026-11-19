import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class OurApp extends LitElement {
    @property()
    who = "world";

    protected override render(): unknown {
        return html`
            <our-hello whom=${this.who}></our-hello>
            <slot></slot>
        `;
    }
}
