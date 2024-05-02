function setup() {
    createCanvas(1200, 800);
    textSize(24);
    textAlign(CENTER);
} 
  
  
function draw() {
    background ('#C02433');
  
    fill('white');
    text('response goes here', width/10, height/10, 1000, 800);
  
}

function mouseClicked() {
    window.location.href = 'scene3.html';
  }