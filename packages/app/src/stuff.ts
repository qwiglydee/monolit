import { MyHello, MyCount } from "@monolit/lib";

export class OurHello extends MyHello {
    greet(whom: string) {
        this.whom = whom;
    }
}

export class OurCounter extends MyCount {
    reset() {
        this.counter = 42;
    }
}
