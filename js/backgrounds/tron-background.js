/*
===============================================================================
; Title:  tron-background.js
; Author: Jeff Shepherd
; Date:   2/20/2021
; Modified By:
; Description: draws the background and starts animations
;==============================================================================
*/

function TronBackground() {
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

    gradient.addColorStop(0, "#353535");//19161e
    gradient.addColorStop(1, "#19161e");//353535

    backContext.fillStyle = gradient;
    backContext.fillRect(0, 0, screenWidth, screenHeight);

  };

  this.startTimers = function () {
  // not yet implemented. return 1 because the calling function expects
  // an animationID
    return 1;
  }

}
