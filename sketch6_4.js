let aura;
let soul;

function preload() {
  aura = loadImage ('auras6.gif');
  soul = loadImage('element.gif');
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  // Display foreground GIF
  image(soul, width/4, height/35, 800, 800);
  
  textSize(48);
  fill('black');
  textAlign(CENTER);
  text('are forver',  width/4, 700, 600, 600);
}

function mouseClicked() {
  window.location.href = 'scene6_5.html';
}