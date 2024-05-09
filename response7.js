
var input;
var input2;
var button;
var colors = ['#AE5AE6', '#EE658C', '#75C4BC', '#BDA286'];
index = 0

function setup() {
  createCanvas(1200, 800);
  input = createInput();
  input.position(650, height/2.7);
  input2 = createInput();
  input2.position(850, height/2.7);
  button = createButton("calculate");
  button.position(800, height/2.3);
  button.mousePressed(drawName);

  
  background ('black');
} 
  
function draw(){
  
  
    //text
  textSize(24);
  textAlign(CENTER);
  fill('white');
  text('insert your names', width/13, height/4, 1000, 800);
  
  //instructions
  textStyle(ITALIC);
  fill(102,'white');
  text('press space to move forward :)', -300, 80, 1000, 800);
  text('click to calculate your love', -330, 50, 1000, 800);
  
}


function drawName() {
  background('black');
  textSize(300);
  var randomNum = floor(random(101)); // Generate a random number between 0 and 100
  fill(colors[index % colors.length]);
  text(randomNum + '%', width/2, height/1.2); // Display the random number at the center of the canvas
  
  index++;
}

function keyPressed() {
    if (keyCode === 32) { 
    window.location.href = 'scene8.html';
  }
}