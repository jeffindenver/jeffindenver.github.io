/*
===============================================================================
; Title:  style-background.js
; Author: Jeff Shepherd
; Date:   3/01/2021
; Modified By:
; Description: draws the background and starts animations
;==============================================================================
*/

// @TODO refactor to have generic background that takes the theme as an arg
function StyleBackground() {
  "use strict";

  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  let container = document.getElementsByClassName("container")[0];
  let backCanvas = document.createElement("canvas");
  let foreCanvas = document.createElement("canvas");
  container.append(backCanvas);
  container.append(foreCanvas);

  let backContext = backCanvas.getContext("2d");
  let foreContext = foreCanvas.getContext("2d");

  this.draw = function () {
    backCanvas.setAttribute("width", screenWidth);
    backCanvas.setAttribute("height", screenHeight);

    foreCanvas.setAttribute("width", screenWidth);
    foreCanvas.setAttribute("height", screenHeight);

    let gradient = backContext.createLinearGradient(0, 0, 0, screenHeight);

    gradient.addColorStop(0, "#191226");//19161e
    gradient.addColorStop(1, "#2e2533");//353535

    backContext.fillStyle = gradient;
    backContext.fillRect(0, 0, screenWidth, screenHeight);

    let colors = ["#6a099b", "#9b6a09", "#099b6a"]; // triad based on first color

    foreContext.fillStyle = colors[0];
    foreContext.fillRect(0, 0, 400, screenHeight);


    foreContext.fillStyle = colors[1];
    foreContext.fillRect(400, 0, 800, screenHeight);

    foreContext.fillStyle = colors[2];
    foreContext.fillRect(800, 0, 1200, screenHeight);
  };


  this.startTimers = function () {
  // not yet implemented. return 1 because the calling function expects
  // an animationID
    return 1;
  }

}


