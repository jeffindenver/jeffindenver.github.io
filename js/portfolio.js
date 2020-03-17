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

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let backCanvas = document.getElementById("backCanvas");
let foreCanvas = document.getElementById("foreCanvas");

let backContext = backCanvas.getContext("2d");
let foreContext = foreCanvas.getContext("2d");

let square1, square2, square3, square4;
let squares = [];

function draw() {
  backCanvas.setAttribute("width", screenWidth);
  backCanvas.setAttribute("height", screenHeight);

  foreCanvas.setAttribute("width", screenWidth);
  foreCanvas.setAttribute("height", screenHeight);

  let gradient = backContext.createLinearGradient(0, 0, 0, screenHeight);

  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(1, "#eac672")

  backContext.fillStyle = gradient;
  backContext.fillRect(0, 0, screenWidth, screenHeight);

  square1 = new Component(20, 20, "gold", Math.floor(screenWidth * 0.15), 150);
  square2 = new Component(10, 10, "gold", Math.floor(screenWidth * 0.25), 100);
  square3 = new Component(80, 80, "gold", Math.floor(screenWidth * 0.55), 50);
  square4 = new Component(15, 15, "gold", Math.floor(screenWidth * 0.90), 250);

  const numOfSquares = 700;
  let color = "#f7f0cf";

  for (let i = 0; i < numOfSquares; i++) {
    let dimension = getRandomNumber([4, 10]);
    let startX = getRandomNumber([0, screenWidth]);
    let startY = getRandomNumber([0, screenHeight]);
    squares.push(
      new Component(dimension, dimension, color, startX, startY));
  }
}

function Component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.angle = 0;
  this.x = x;
  this.y = y;

  this.setX = function (value) {
    if (value > screenWidth) {
      value = 0;
    }
    if (value < 0) {
      value = screenWidth;
    }
    this.x = value;
  };

  this.setY = function (value) {
    if (value > screenHeight) {
      value = 0;
    }
    if (value < 0) {
      value = screenHeight;
    }
    this.y = value;
  }

  this.update = function () {
    foreContext.save();
    foreContext.translate(this.x, this.y);
    foreContext.rotate(this.angle);
    foreContext.fillStyle = color;
    foreContext.fillRect(this.width / -2, this.height / -2, this.width, this.height);
    foreContext.restore();
  }
}

function updateForeground() {
  foreContext.clearRect(0, 0, screenWidth, screenHeight);

  squares.forEach(item => {
    item.angle += 5 * Math.PI / 180;
  });

  square1.angle += 3 * Math.PI / 180;
  square2.angle += 6 * Math.PI / 180;
  square3.angle += 3 * Math.PI / 180;
  square4.angle += 6 * Math.PI / 180;

  squares.forEach(item => {
    item.setY(item.y -= 1);
  });

  square1.setY(square1.y += 1);
  square2.setY(square2.y += 2);
  square3.setY(square3.y += 1);
  square4.setY(square4.y += 2);

  squares.forEach(item => {
    item.update();
  });

  square1.update();
  square2.update();
  square3.update();
  square4.update();
}

function startTimers() {
  let delay = 20;

  function startAnimation(color) {
    console.log(`${color} animation begun.`);
    let animationID = setInterval(() => {
      updateForeground();
    }, delay);
    return animationID;
  }
  return startAnimation("Gold");
}

function getRandomNumber(range) {
  let max = range[1];
  let min = range[0];
  let diff = max - min;
  return Math.floor((Math.random() * (diff + 1)) + min);
}

draw();
let eventID = startTimers();

$(function () {
  $("#toGallery").click(() => {
    $("#landing").fadeOut(1000);
    $("#gallery").css({
      "display": "flex"
    });
  });

  $("#toLanding").click(() => {
    $("#landing").fadeIn(1000);
    $("#gallery").fadeOut(1000);
  })

});
