let aura;
let textstyle;

function preload() {
  aura = loadImage('https://cdn.discordapp.com/attachments/757716444329803858/1232033780408123462/auras1.gif?ex=662bf0df&is=662a9f5f&hm=bea02bba004ab126e25d36c4f35425f290a423483c4ac9ee1d06cbe37883091d&');
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


