let opacityRange = [255, 102];

function setup() {
    createCanvas(1200, 800);
    textSize(24);
    textAlign(CENTER);
    fill('white');
} 
  
  
function draw() {
    background ('black');
  
    fill(255, opacityRange[0]);
    text('loving with the soul', width/10, height/10, 1000, 800);

    fill(255, opacityRange[1]);
    text('interactive text', width/10, height/7, 1000, 800);
  
}

function mouseClicked() {
    window.location.href = 'scene1.html';
  }