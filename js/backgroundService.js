/*******************************************************************************
* Title:  background-service.js
* Author: Jeff Shepherd
* Date:   2/20/2021
* Modified By:
* Description: Service with a create function that returns a background object
* based on the argument.
*******************************************************************************/

function BackgroundService() {
  "use strict";

  let aBackground;

  this.create = function (backgroundName) {
    switch(backgroundName) {
      case "tron":
        aBackground = new TronBackground();
        break;
      case "minty":
        aBackground = new MintyBackground();
        break;
      default:
        aBackground = new MintyBackground();
    }
    return aBackground;
  }

}
