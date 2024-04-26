let aura;
let soulmates;

function preload() {
  aura = loadImage('https://cdn.discordapp.com/attachments/757284125097853029/1230929078748713022/auras6.gif?ex=66351b09&is=6622a609&hm=8f39ebd46199d2b9f188c60cab7755b677d97fff8a1e7f221c59aa388c20aa3f&');
  soulmates = loadImage('sunmoon.gif');
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  // Display foreground GIF
  image(soulmates, width/6, height/6, 800, 800);
  
  textSize(48);
  fill('black');
  textAlign(CENTER);
  text('are connected',  width/4, 700, 600, 600);
}

function mouseClicked() {
  window.location.href = 'scene62.html';
}