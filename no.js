console.log("connected")

var c;
function setup() {
	
}

function draw(){


	c = createCanvas(windowWidth, windowHeight);
	c.position(0,0)
    background(0);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}