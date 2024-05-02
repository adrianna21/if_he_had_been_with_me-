let aura;
let opacity = 100; // Initial opacity

function preload() {
  aura = loadImage ('auras8.gif');
}

function setup() {
  createCanvas(1200, 800);
  textSize(48);
  textAlign(CENTER);
}

function draw() {
  background(220);

  // Flicker effect
  if (random() > 0.5) {
    opacity = 100; // High opacity
  } else {
    opacity = 50; // Low opacity
  }

  // Draw the image with the flickering opacity
  tint(0, opacity);
  image(aura, 0, 0, width, height);

  // Draw the text with the flickering opacity
  fill(0, 0, 255, opacity); // Set fill color with the current opacity
  textSize(32);
  textAlign(CENTER, CENTER);
  text("“Like most of my stories, it will end tragically.” ", width / 2, height / 2);
}

function mouseClicked() {
  window.location.href = 'index.html';
}