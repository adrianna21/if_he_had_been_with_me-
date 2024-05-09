
let souls = [];
let index = 0
let question = "do you think we are together in every universe?";

function preload() {
  souls.push(loadImage('sunmoon.gif'));
  souls.push(loadImage('fruit.gif'));
  souls.push(loadImage('element.gif'));

}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // Display background GIF
  background ('black');
  
  image(souls[index], width/5, height/2 - 400, 800, 800);

  textStyle(ITALIC);
  fill(102,'white');
  text('click to see the alternate universes', width/2-900, height/2 - 380, 1000, 800);
  text('hover over question for answer', width/2-900, height/2 - 350, 1000, 800);
  text('press any key to move forward', width/2-900, height/2 - 320, 1000, 800);


  textSize(24);
  fill('white');
  textAlign(CENTER);
  text(question,  width/4, 700, 600, 600);
}

function mouseClicked() {
  index = (index + 1) % souls.length;
}

function keyPressed() {
  window.location.href = 'scene6_5.html';
}

function mouseMoved() {
  let textX = width/4;
  let textY = 500;
  let textWidth = 600;
  let textHeight = 300;
  if (mouseX > textX && mouseX < textX + textWidth && mouseY > textY && mouseY < textY + textHeight) {
    fill('yellow');
    question = "i hope so :)";
  } else {
    fill('white');
    question = "do you think we are together in every universe?";
  }
}
