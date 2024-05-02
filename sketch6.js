let aura;
let soul;

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
  fill('black');
  textAlign(CENTER);
  text('Our Souls', 200, 750);
}

function mouseClicked() {
  window.location.href = 'scene6_1.html';
}