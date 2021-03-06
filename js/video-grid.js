/*
===============================================================================
; Title:  video-grid.js
; Author: Jeff Shepherd
; Date:   4/29/2020
; Modified By:
; Description: video grid
;==============================================================================
*/

function VideoGrid() {
  "use strict";

  /*
  * Params: itemList is an array of objects
  *         targetElement is a jQuery object
  * Response: appends html to the jQuery element
  * Description: takes a list of objects, wraps them in html,
  * and then inserts the html at the end of the target element.
  */
  this.insertHTML = function (itemList, targetElement) {

    itemList.forEach(buildHTML);

    function buildHTML(item) {
      let output = `
          <video controls reload="none" style="width: ${item.width};">
            <source src=${item.src} type="video/mp4" alt=${item.alt}>
          </video>`;
        targetElement.append(output);
    }

  };

}
