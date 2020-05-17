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

const background = new Background();
background.draw();
const animationID = background.startTimers();

const data = new Data();
const diagramList = data.getDiagramList();
const presentationList = data.getPresentationList();

$(function () {
  let diagrams = new ImageGrid();
  let videos = new VideoGrid();
  diagrams.insertHTML(diagramList, $("#diagram-gallery"));
  videos.insertHTML(presentationList, $("#presentation-gallery"));

  let currentScene = $("#landing");

  $(".toGallery").click(() => {
    currentScene.hide();
    $("#gallery").fadeIn(600);
    currentScene = $("#gallery");
  });

  $(".toLanding, #home").click(() => {
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
