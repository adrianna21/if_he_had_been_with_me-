function setup() {
    createCanvas(1200, 800);
    textSize(24);
    textAlign(CENTER);
} 
  
  
function draw() {
    background ('black');
  
    fill('white');
    text('“If He Had Been with Me”', width/10, height/10, 1000, 800);
    text('By Laura Nowlin', width/10, height/7, 1000, 800);
  
}

function mouseClicked() {
    window.location.href = 'index.html';
  }