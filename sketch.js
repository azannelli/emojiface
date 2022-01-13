let video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(255);

  let gridSize = 50;

  video.loadPixels();
  for (let y=0; y<video.height; y+= gridSize) {
    for (let x=0; x<video.width; x+= gridSize) {
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];

      fill(r,g,b);
      noStroke();
      rect(x,y,gridSize,gridSize);
    }
  }
}
