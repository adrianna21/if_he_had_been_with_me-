function setup() {
    createCanvas(1200, 800);
    textSize(24);
    textAlign(CENTER);
} 
  
  
function draw() {
    background ('#ED658C');
  
    fill('white');
    text('response goes here', width/10, height/10, 1000, 800);
  
}

function mouseClicked() {
    window.location.href = 'scene8.html';
  }