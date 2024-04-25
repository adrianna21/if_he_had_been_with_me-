let aura;
let opacity = 100; // Initial opacity

function preload() {
  aura = loadImage('https://cdn.discordapp.com/attachments/757716444329803858/1232396083121098752/auras8.gif?ex=662bf0cb&is=662a9f4b&hm=36c7d9361ddc610785f4035111ea0acfbf6cf074f907afdbc6c785339ecc9a0c&');
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
  tint(255, opacity);
  image(aura, 0, 0, width, height);

  // Draw the text with the flickering opacity
  fill(0, 0, 255, opacity); // Set fill color with the current opacity
  textSize(32);
  textAlign(CENTER, CENTER);
  text("wordst", width / 2, height / 2);
}