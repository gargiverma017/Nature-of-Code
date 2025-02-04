function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(4)
  stroke(255)
  noFill()
  if(mouseX>200){
    fill(255)
  }
  circle(200,200,60)
}
