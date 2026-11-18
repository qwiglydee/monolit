import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class MyApp extends LitElement {
    @property()
    who = "w";

    protected override render(): unknown {
        return html`
            <my-hello whom=${this.who}></my-hello>
            <my-counter></my-counter>
        `;
    }
}
