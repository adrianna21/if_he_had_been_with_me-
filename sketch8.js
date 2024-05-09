let aura;

function preload() {
  aura = loadImage ('auras8.gif');
}

function setup() {
  createCanvas(1200, 800);
  textSize(48);
  textAlign(CENTER);
}

function draw() {

  image(aura, 0, 0, width, height);
  
  fill('white');
  textSize(32);
  textAlign(CENTER, CENTER);
  text("“Like most of my stories, it will end tragically.” ", width / 2, height / 2);
}

function mouseClicked() {
  window.location.href = 'response8.html';
}
