
let video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}


function colors(r,g,b) {
  let c = [r,g,b];
  const emojis = ["\uD83C\uDF11","\uD83D\uDE21","\uD83C\uDF4A","\uD83D\uDE42","\uD83C\uDF40","\uD83D\uDCA7","\uD83D\uDCAD"];
  const colors = [[0,0,0],[255,0,0],[255,125,0],[255,255,0],[0,255,0],[0,0,255],[255,255,255]];
  var difference = 1000;
  var index = 0;
  for (i = 0; i < colors.length; i++) {
    var diff = Math.abs(c[0] - colors[i][0]) + Math.abs(c[1] - colors[i][1]) + Math.abs(c[2] - colors[i][2]);
    if (diff < difference) {
      var difference = diff;
      var index = i;
    }
  }
  return emojis[index];
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
      let emojitext = colors(r,g,b);
      textSize(20);
      if ((r >= b) && (r>=g)) {
        text(emojitext,x,y);
      } else if ((g > b) && (g > b)) {
        text(emojitext,x,y);
      } else {
        text(emojitext,x,y);
      }
    }
  }
}
