//basic black background and white dotted pen

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
  
  fill(255)
  noStroke()
  circle(mouseX,mouseY,15)
   
}

function mousePressed(){
  background(0)
}
