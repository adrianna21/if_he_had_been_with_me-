let points;
let spacing = 30;
let minMouseDist = 5000;
let txt = " “I love  him the most when we fight and I am scared that he will leave me.”” ";


function preload() {
  aura = loadImage('https://cdn.discordapp.com/attachments/757716444329803858/1235420363802804244/auras2.gif?ex=66344e5f&is=6632fcdf&hm=650ba16fde1d7ffa93b98a296b688a73005ebba5ccc6c8b6bc9a042f8bb2a897&');
}

function setup(){
  createCanvas(1200, 800);
  

  textSize(48);
  textAlign(CENTER);
  
  points = [];
  
  // Splitting the text into three lines
  let txtLines = txt.split(" ");
  let thirdLength = Math.ceil(txtLines.length / 3);
  let firstLine = txtLines.slice(0, thirdLength).join(" ");
  let secondLine = txtLines.slice(thirdLength, 2 * thirdLength).join(" ");
  let thirdLine = txtLines.slice(2 * thirdLength).join(" ");
  
  // Calculating text width for each line
  let textWidth1 = textWidth(firstLine);
  let textWidth2 = textWidth(secondLine);
  let textWidth3 = textWidth(thirdLine);
  
  // Positioning the text at the center of the canvas
  let xPos1 = width / 2;
  let xPos2 = width / 2;
  let xPos3 = width / 2;
  let yPos1 = height / 2 - 50; // Adjust vertically to center the text
  let yPos2 = height / 2; // Adjust vertically to center the text
  let yPos3 = height / 2 + 50; // Adjust vertically to center the text
  
  // Creating vectors for each character of the first line
  let s1 = "";
  for(let i = 0; i < firstLine.length; i++){
    let charPosn = textWidth(s1);
    let p = createVector(xPos1 + charPosn - textWidth1 / 2, yPos1);
    points.push([p, createVector(0, 0)]);
    s1 += firstLine.charAt(i);
  }
  
  // Creating vectors for each character of the second line
  let s2 = "";
  for(let i = 0; i < secondLine.length; i++){
    let charPosn = textWidth(s2);
    let p = createVector(xPos2 + charPosn - textWidth2 / 2, yPos2);
    points.push([p, createVector(0, 0)]);
    s2 += secondLine.charAt(i);
  }

  // Creating vectors for each character of the third line
  let s3 = "";
  for(let i = 0; i < thirdLine.length; i++){
    let charPosn = textWidth(s3);
    let p = createVector(xPos3 + charPosn - textWidth3 / 2, yPos3);
    points.push([p, createVector(0, 0)]);
    s3 += thirdLine.charAt(i);
  }
}

function draw(){
  // Display background GIF
  image(aura, 0, 0, width, height);
    
  fill(255);

  for(let i = 0; i < points.length; i++){
    let p = points[i][0];
    let p2 = createVector(0, 0);
    
    let mouseDist = dist(p.x, p.y, mouseX, mouseY);
    
    if(mouseDist < minMouseDist){
      p2 = createVector(p.x - mouseX, p.y - mouseY);   
      
      let distDifference = minMouseDist - mouseDist;
      p2.setMag(sqrt(distDifference));
    }

    points[i][1] = p2;
    
    text(txt.charAt(i), p.x + p2.x, p.y + p2.y);
  }

  function mouseClicked() {
    window.location.href = 'scene4.html';
  }

}

// reference https://editor.p5js.org/creativecoding/sketches/ncNWaEkTw