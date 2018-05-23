import "babel-polyfill";
import ROT from "rot-js";
import { App } from "./app.js";

window.onload = function() {
  // Check if rot.js can work on this browser
  if (!ROT.isSupported()) {
    alert("The rot.js library isn't supported by your browser.");
    return;
  }

  Game.init();

  // Add the containers to our HTML page
  //TODO Render

  Game.render();

  Game.bindEvent("keydown");
  Game.bindEvent("keyup");
  Game.bindEvent("keypress");
  Game.bindEvent("mousedown");
  Game.bindEvent("mouseup");
  Game.bindEvent("click");
  Game.bindEvent("mousemove");
};
