/*
===============================================================================
; Title:  portfolio.js
; Author: Jeff Shepherd
; Date:   3/16/2020
; Modified By:
; Description: javascript file for the portfolio project
;==============================================================================
*/

"use strict";

let background = new Background();
background.draw();
let animationID = background.startTimers();

let diagramList = [{
  href: "nosql-data-diagrams/nosql-data-structure.png",
  src: "./images/nosql-data-structure200x200.png",
  alt: "JSON example"
}, {
  href: "nosql-data-diagrams/assignment1.4-ord.png",
  src: "./images/ORD200x200.png",
  alt: "UML Diagram"
}];

$(function () {
  let diagrams = new ImageGrid();
  diagrams.insertHTML(diagramList, $("#diagrams-target"));

  let currentScene = $("#landing");

  $(".toGallery").click(() => {
    currentScene.hide();
    $("#gallery").fadeIn(600);
    currentScene = $("#gallery");
  });

  $(".toLanding").click(() => {
    currentScene.hide();
    $("#landing").fadeIn(600);
    currentScene = $("#landing");
  });

  $("#about").click(() => {
    currentScene.hide();
    $("#about-me").css("display", "flex");
    currentScene = $("#about-me");
    $("#myModal").css("display", "none");
  });

  $("#diagrams").click(() => {
    currentScene.hide();
    $("#diagrams-target").css("display", "flex");
    currentScene = $("#diagrams-target");
    $("#myModal").css("display", "none");
  });

  $("#presentations").click(() => {
    currentScene.hide();
    $("#presentations-target").css("display", "flex");
    currentScene = $("#presentations-target");
    $("#myModal").css("display", "none");
  });

  $("#hamburger").click(() => {
    $("#myModal").css("display", "block");
  });

  $(".close").click(() => {
    $("#myModal").css("display", "none");
  });

  $(window).click(() => {
    console.log("window clicked on " + event.target.toString());
    if (event.target === document.getElementById("myModal")) {
      $("#myModal").fadeOut(1000);
    }
  });

});
