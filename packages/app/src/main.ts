import { MyHello, MyCount } from "@monolit/lib";
import { MyApp } from "./app";

customElements.define("my-app", MyApp);
customElements.define("my-hello", MyHello);
customElements.define("my-counter", MyCount);
