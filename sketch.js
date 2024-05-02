let aura;
let textstyle;

function preload() {
  aura = loadImage ('auras1.gif');
}

function setup() {
  createCanvas(1200, 800);
  textstyle = { // Corrected assignment
    textSize: 48,
    fill: 'black',
    textAlign: CENTER
    
  };
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  textSize(textstyle.textSize);
  fill(textstyle.fill);
  textAlign(textstyle.textAlign);
  text('YOU', 200, 50);
  text('can', 300, 170);
  text('more', 150, 350);
  text('than', 500, 300);
  text('way about a', 600, 600);
  text('person', 900, 700);
 
}

function mouseClicked() {
  window.location.href = 'scene2.html';
}


