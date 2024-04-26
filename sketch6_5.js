let aura;
let soul;

function preload() {
  aura = loadImage('https://cdn.discordapp.com/attachments/757716444329803858/1232270339766222869/auras4.gif?ex=662c246f&is=662ad2ef&hm=3cc2efb707242dbf90535b1dda79b22873651e5ef2bb0dae62c4e8bbb08add53&');
  soul = loadImage('souls2.gif');
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  // Display background GIF
  image(aura, 0, 0, width, height);
  
  // Display foreground GIF
  image(soul, 0, 10, 800, 800);
  
  textSize(48);
  fill('black');
  textAlign(CENTER);
  text('divergent.', 950, 750);
}

function mouseClicked() {
  window.location.href = 'scene7.html';
}