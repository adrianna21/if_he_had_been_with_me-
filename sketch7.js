
let aura;
let opacityRange = [255, 230, 204, 153, 102, 51];

function preload() {
  aura = loadImage ('auras7.gif');
}

function setup() {
  createCanvas(1200, 800);
  textSize(48);
  textAlign(CENTER);
  fill('white');
} 

function draw() {
  image(aura, 0, 0, width, height);
  

  fill(255, opacityRange[0]);
  text('“Love isn’t always ', width/2, 200);

  fill(255, opacityRange[1]);
  text('only about being together,', width/2, 300);
  
  fill(255, opacityRange[2]);
  text('sometimes ', width/2, 400);
  
  fill(255, opacityRange[3]);
  text('its about knowing ', width/2, 500);
  
  fill(255, opacityRange[4]);
  text('when to', width/2, 600);
  
  fill(255, opacityRange[5]);
  text('let go"', width/2, 700);

}

function mouseClicked() {
  window.location.href = 'scene8.html';
}