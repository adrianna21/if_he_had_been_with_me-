let opacityRange = [255, 102];

function setup() {
    createCanvas(1200, 800);
    textSize(24);
    textAlign(CENTER);
    fill('white');
    noStroke();

    textStyle(NORMAL);
    fill(255, opacityRange[0]);
    text('loving with the soul', width/10, height/10, 1000, 800);

    textStyle(ITALIC);
    fill(255, opacityRange[1]);
    text('interactive text', width/10, height/7, 1000, 800);
} 
  
  
function draw() {
  background ('black');
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  
  fill('#FFD851');
  ellipse(x, height/2, y, y);
  
  fill('#7BDBEB');
  ellipse(ix, height/2, iy, iy);
  
    textStyle(NORMAL);
    fill(255, opacityRange[0]);
    text('If He Had Been with Me', width/10, height/10, 1000, 800);

    textStyle(ITALIC);
    fill(255, opacityRange[1]);
    text('By Laura Nowlin', width/10, height/7, 1000, 800);
  
  textStyle(NORMAL);
  fill('black');
    text('The book follows a story between Autumn and Finny, two childhood friends who have grown apart over the years. The book starts in a tragic moment in their lives, and from there we are taken back to see how the characters got into this situation. Throughout the book Autumn navigates her grief and wonders what would’ve happened if she had chosen to approach Finny instead of drifting apart. This heartfelt novel delves into the ideas of fate, friendships, unrequited love, grief and alternate paths. Overall the novel portrays the complexities that love holds and the profound impact it can have on people’s lives. ', width/10, 200, 1000, 800);
  
  
  textStyle(NORMAL);
  fill('black');
    text('I chose this novel because I thought their love stories were so complex and heart-wrenching. It was so obvious to everyone that their love was more than philia, it was a long lasting heart aching love that they refused to recognize. I think it is very interesting to think about “soulmates that werent meant to be” because it defeats the whole purpose of the idea of “soulmates.” Whether you believe in soulmates or not, it was easy to see that the stars were aligned for those two to be together. But when these “so meant to be together” individuals face challenges that separates them, what does it say about destiny and fate? They are just human relationships, which makes them all so unpredictable and complicated. At the end of the day thai novel invited readers to fully immerse in contemplating the intricacy of love and the complexity of human connections.', width/10, 450, 1000, 800);
  
  
}

function mouseClicked() {
    window.location.href = 'index.html';
  }