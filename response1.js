function setup() {
    createCanvas(1200, 800);
    textSize(24);
    textAlign(CENTER);
} 
  
  
function draw() {
    background ('#A7CDEE');
  
    fill('white');
    text('Love is such a complicated feeling, it exists in various forms with each having their own distinct essence. The closer individuals become, their boundaries tend to blur, and distinguishing the nature of their feelings becomes challenging. There is not just one type of love: Eros, Agape, Philautia, Pragma, Mania, Ludus, Storge, Philia', width/10, height/10, 1000, 800);
  
}

function mouseClicked() {
    window.location.href = 'scene2.html';
  }