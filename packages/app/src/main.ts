import { MyHello, MyCount } from "@monolit/lib";
import { MyApp } from "./myapp";

customElements.define("our-app", MyApp);

customElements.define("our-hello", class extends MyHello {});
customElements.define("our-counter", class extends MyCount {});
