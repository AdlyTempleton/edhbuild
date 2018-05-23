import Game from "./util.js";
import { tryMusic } from "./skills.js";
import * as d from "./data.js";
import { MessageHandler } from "./msg.js";
import { Symbol } from "./symbol.js";
import { TILES } from "./tile.js";
import { EntityFactory } from "./entities.js";
import { BINDINGS } from "./key.js";
import { TIMER } from "./timing.js";
import { expForLevel } from "./util.js";
import { getAllSpells } from "./spells.js";
import { PICKPOCKET_SPELL_DUMMY } from "./spells.js";
import ROT from "rot-js";

import { STAT_NAMES } from "./stats.js";

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
