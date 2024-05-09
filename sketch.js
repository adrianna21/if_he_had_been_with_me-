let aura;
let textstyle;

function preload() {
  aura = loadImage ('auras1.gif');
}

function setup() {
  createCanvas(1200, 800);
  textstyle = { // Corrected assignment
    textSize: 48,
    fill: 'white',
    textAlign: CENTER
    
  };
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  textSize(textstyle.textSize);
  fill(textstyle.fill);
  textAlign(textstyle.textAlign);
  textStyle(NORMAL);
  textSize(48); 
  text('YOU', 200, 50);
  text('can', 300, 170);
  text('more', 150, 350);
  text('than', 500, 300);
  text('way about a', 600, 600);
  text('person', 900, 700);
  
  textSize(48); 
  textStyle(ITALIC);
  text('feel', 400, 170);
  
  textSize(80); 
  textStyle(BOLD);
  text('ONE', 600, 450);
 
}

function mouseClicked() {
  window.location.href = 'response1.html';
}


