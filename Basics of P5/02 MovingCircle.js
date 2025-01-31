let circleX=0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(circleX,200,65)
  circleX=circleX+3
}

function mousePressed(){
  circleX=0
}
