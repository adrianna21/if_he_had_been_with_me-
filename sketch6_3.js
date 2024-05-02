let aura;
let fruit;

function preload() {
  aura = loadImage ('auras6.gif');
  soulmates = loadImage('sunmoon.gif');
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  // Display foreground GIF
  image(fruit, width/6, height/6, 800, 800);
  
  textSize(48);
  fill('black');
  textAlign(CENTER);
  text('our paths',  width/4, 700, 600, 600);
}

function mouseClicked() {
  window.location.href = 'scene6_4.html';
}