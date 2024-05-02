let aura;
let eye;

function preload() {
  aura = loadImage ('auras4.gif');
  eye = loadImage('https://cdn.discordapp.com/attachments/757716444329803858/1232281185837912165/IMG_0457.png?ex=662b85c9&is=662a3449&hm=b9ef5e2efcb902fd45b511a6cb0582da23169973b3d18cf1482754d33c034d2a&');
}

function setup() {
  createCanvas(1200, 800);
  textSize(48);
  textAlign(CENTER);
  fill('black');
} 


function draw() {
  image(aura, 0, 0, width, height);
  
  image(eye, -100, -300, 1400, 1400)
  
  
  let x = constrain(mouseX, width/2 - 125, width/2 + 125);
  let y = constrain(mouseY, height/2 - 50, height/2 + 50);
  
  fill('black');
  ellipse(x, y, 190, 190); 
  
  text('“I had loved you since the first moment I saw you,', 0, 50, 400, 400);
  text('and I would love you forever.”', 850, 750,);
  
  
}

function mouseClicked() {
  window.location.href = 'scene6.html';
}