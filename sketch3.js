let aura;
  // make text a string 
let string = '"Ive loved him my whole life, and somewhere along the way, that love didnt change but grew. It grew to fill the parts of me that I did not have when I was a child. It grew with every new longing of my body and desire until there was not a piece of me that did not love him. And when I look at him, there is no other feeling in me."'
  // characters being pulled 1 by 1 from string
let currentCharacter = 0;
  // set page margin 
let pageMargin = 150;

function preload() {
  aura = loadImage ('auras3.gif');
  
}

function setup() {
  createCanvas(1200, 800);
  textSize(48);
  textAlign(CENTER, CENTER);

}

function draw() {
  
  image(aura, 0, 0, width, height);

  // set new variable, it shows characters 0 to the current one
  let currentString = string.substring(0, currentCharacter);
  
  // draw the current string on the page, with some margins
  push();
  textSize(48);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin*2, height - pageMargin*2 );
  pop();
  
  currentCharacter += 1;
}

function mouseClicked() {
  window.location.href = 'scene4.html';
}

/**
CITE: https://editor.p5js.org/pippinbarr/sketches/bjxEfpiwS
*/