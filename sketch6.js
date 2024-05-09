let aura;
let soul;
let textOpacity = 0;

function preload() {
  aura = loadImage ('auras6.gif');
  soul = loadImage('souls1.gif');
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  // Display foreground GIF
  image(soul, 400, 10, 800, 800);
  
  textSize(48);
  fill(255, 255, 255, textOpacity); // RGBA with alpha (opacity)
  textAlign(CENTER);
  text('“Our souls are connected, ', width/2 - 500, height/2 - 100, 500, 600);
}

function mouseClicked() {
  window.location.href = 'scene6_1.html';
}

function mouseMoved() {
  // Check if mouse is over the text
  if (
    mouseX > width / 2 - 500 &&
    mouseX < width / 2 + 500 &&
    mouseY > height / 2 - 100 &&
    mouseY < height / 2 + 500
  ) {
    // If mouse is over the text, set opacity to 100%
    textOpacity = 255;
  } else {
    // If mouse is not over the text, set opacity to 0%
    textOpacity = 0;

    // hover effect credits to CHatGPT
  }
}