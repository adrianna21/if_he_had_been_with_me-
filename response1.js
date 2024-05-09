var poetry = ["eros", "agape", "philautia", "pragma", "mania", "ludus", "storge", "philia"];
var colors = ['#A7CDEE', '#FBBB7B', '#EDBAC5', '#D4BCCC'];

var index = 0

function setup() {
    createCanvas(1200, 800);
    textSize(24);
    textAlign(CENTER);
    background ('black');
    fill('white');
    text('Love is such a complicated feeling, it exists in various forms with each having their own distinct essence. The closer individuals become, their boundaries tend to blur, and distinguishing the nature of their feelings becomes challenging. There is not just one type of love: ', width/10, height/3, 1000, 800);
  
  //instructions
  textStyle(ITALIC);
  fill(102,'white');
  text('press any key to move forward :)', -300, 80, 1000, 800);
  text('click anywhere to reveal', -350, 50, 1000, 800);
  
} 
  
  
function draw() {
  
      // unless it will draw over the mouse click
  
}


function mouseClicked() {
    fill(colors[index % colors.length]); // Set text color from colors array
    textSize(50);
    textStyle(NORMAL);
    text(poetry[index % poetry.length], mouseX, mouseY);

    // will increment both arrays 
    index++;
}

function keyPressed() {
      window.location.href = 'scene2.html';
}