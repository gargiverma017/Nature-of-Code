let squareSize;
let lineSize;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  squareSize=random(5,350)
  lineSize=random(5,20)
  rectMode(CENTER)
  strokeWeight(lineSize)
  stroke(255,10)
  fill(200,162,255,10)
  square(300,200,squareSize)
  
}
