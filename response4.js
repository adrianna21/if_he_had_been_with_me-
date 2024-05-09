var capture;

function setup() {
  createCanvas(1200, 800);
  capture = createCapture(VIDEO);
  capture.size(400, 300);
  capture.hide();
}

function draw() {
  background('black');

  //text
  textSize(24);
  fill('white');  text('have you experienced love at first sight yet?', width/3, height-70, 1000, 800);
  
  
  //camera
  tint('#40C0F0'); 
  image(capture, width / 6.5, height / 2);
  tint('#D6C642'); 
  image(capture, width / 2, height / 2);
  tint('#67A699'); 
  image(capture, width / 2, height / 9.5);
  tint('#B6DB8C'); 
  image(capture, width / 6.5, height / 9.5);
}
function mouseClicked() {
    window.location.href = 'scene6.html';
  }