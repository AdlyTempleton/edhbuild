
import * as d from "./data.js";
import { MessageHandler } from "./msg.js";
import { BINDINGS } from "./key.js";

class Mode {
  constructor(a) {
    this.app = a;
  }

  enter() {
    this.app.msg.send(`Entering ${this.constructor.name}`);
  }

  exit() {}

  handleInput(eventType, e) {}

  render(display) {}
}


export class StartupMode extends Mode {
  render(display) {
  }

  handleInput(eventType, e) {
    if (eventType == "keyup" && e.keyCode == BINDINGS.START_GAME.id) {
      this.app.switchModes("menu");
      return true;
    }
  }
}
