let aura;
let soul;

function preload() {
  aura = loadImage ('auras6.gif');
  soul = loadImage('souls2.gif');
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  // Display foreground GIF
  image(soul, 0, 10, 800, 800);
  
  textSize(48);
  fill('black');
  textAlign(CENTER);
  text('divergent.', 950, 750);
}

function mouseClicked() {
  window.location.href = 'scene7.html';
}