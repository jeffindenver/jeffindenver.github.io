/*
===============================================================================
; Title:  image-grid.js
; Author: Jeff Shepherd
; Date:   4/29/2020
; Modified By:
; Description: javascript file for diagrams
;==============================================================================
*/

function ImageGrid() {
  "use strict";

  /*
   * Params: itemList is an array of objects
   *         targetElement is a jQuery object
   * Response: appends html to the jQuery element
   * Description: takes a list of objects and incorporates them into html,
   * and then inserts the html at the end of the target element.
   */
  this.insertHTML = function (itemList, targetElement) {

    itemList.forEach(buildHTML);

    function buildHTML(item) {
      let output = `
      <div>
          <a target="_blank" rel="noopener" href=${item.href}>
            <img src=${item.src} alt=${item.alt}>
          </a>
      </div>`;
      targetElement.append(output);
    }
  };

}
