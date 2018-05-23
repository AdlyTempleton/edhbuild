/**
 * [DATA The datastore file. Stores and handles persistence of universal game state]
 * @type {Object}
 */
 //TODO persist
import { MessageHandler } from "./msg.js";
import { mapFactory } from "./map.js";
import { Entity } from "./entity.js";
import { EntityFactory } from "./entities.js";
import { App } from "./app.js";
import { Dungeon } from "./dungeon.js";
import { getSpellMap } from "./spells.js";
export let DATA = {
  /**
   * Resets/initializes stored values
   * @return {[type]} [description]
   */
  clear: function() {
    this.state = {};
    };
  },

  /**
   * Init function
   * Currently a simple delegate to this.clear
   */
  init: function() {
    this.clear();
  },


  /**
   * Stringifies this object and saves to local storage
   */
  handleSave: function() {
    if (!localStorageAvailable()) {
      return;
    }

    window.localStorage.setItem(Game.SAVE_LOCATION, JSON.stringify(this));
  }
};

/**
 *  Reads JSON string from local storage and reloads state
 *  Workhorse of persistence
 */
export function handleLoad() {
  let saved = JSON.parse(window.localStorage.getItem(Game.SAVE_LOCATION));

  DATA.clear();

  DATA.state = saved.state;

  //TODO persist
}

/**
 * Helper method to test local storage
 * @return {boolean} [true iff local storage is available]
 */
function localStorageAvailable() {
  // NOTE: see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  try {
    var x = "__storage_test__";
    window.localStorage.setItem(x, x);
    window.localStorage.removeItem(x);
    return true;
  } catch (e) {
    MessageHandler.send(
      "Sorry, no local data storage is available for this browser so game save/load is not possible"
    );
    return false;
  }
}
