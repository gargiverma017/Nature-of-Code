let r,g,b,x,y

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
 
  r=random(255)
  g=0
  b=random(255)
  x=random(width);
  y=random(height)
  fill(r,g,b,100)
  noStroke()
  circle(x,y,20)
}

function mousePressed(){
  background(0)
}
