import { MessageHandler } from "./msg.js";
import * as u from "./util.js";
import ROT from "rot-js";
import * as modes from "./mode.js";
import * as d from "./data.js";
import { mapFactory } from "./map.js";
import { EntityFactory } from "./entities.js";
import { TIMER } from "./timing.js";

import { STAT_NAMES } from "./stats.js";
import { expForLevel } from "./util.js";
import { Dungeon } from "./dungeon.js";

export let App = {
  SAVE_LOCATION: "EDHBuild",

  init: function() {
    this.setupDisplays();
    this.setupModes();
    d.DATA.init(this);
    this.switchModes("startup");
  },

  switchModes: function(newModeName) {
    if (this.curMode) {
      this.curMode.exit(this);
    }
    this.curMode = this.modes[newModeName];

    if (this.curMode) {
      this.curMode.enter(this);
    }
  },

  setupModes: function() {
    //TODO modes
    this.modes = {};
  },

  bindEvent: function(eventType) {
    window.addEventListener(eventType, evt => {
      this.eventHandler(eventType, evt);
    });
  },

  eventHandler: function(eventType, e) {
    if (this.curMode) {
      //Pass on input event
      if (this.curMode.handleInput(eventType, e)) {
        //Re-render if return true
        this.render();
      }
    }
  },

  render: function() {
    //TODO render
  },

  toJSON: function() {
    //TODO persist
  },

  fromJSON: function(json) {
    //TODO persist
  }
};
