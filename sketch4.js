let aura;
let eye;

function preload() {
  aura = loadImage ('auras4.gif');
  eye = loadImage ('eye1.png');
}

function setup() {
  createCanvas(1200, 800);
  textSize(48);
  textAlign(CENTER);
  fill('white');
} 


function draw() {
  image(aura, 0, 0, width, height);
  
  image(eye, -100, -300, 1400, 1400)
  
  
  let x = constrain(mouseX, width/2 - 125, width/2 + 125);
  let y = constrain(mouseY, height/2 - 50, height/2 + 50);
  
  fill('black');
  ellipse(x, y, 190, 190); 
  
  fill ('white');
  text('“I had loved you since the first moment I saw you,', 0, 50, 400, 400);
  text('and I would love you forever.”', 850, 750,);
  
  
}

function mouseClicked() {
  window.location.href = 'response4.html';
}