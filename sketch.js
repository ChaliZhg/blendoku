var blocks = [];
var chosen = [];
var result;

function setup() {
  // createCanvas(600, 400);
  createCanvas(displayWidth, displayHeight);

  for (var i = 0; i < 10; i++) {
    blocks[i]=[];
    for (var j = 0; j < 10; j++){
      blocks[i][j] = new Block(displayWidth/10*i+0, displayHeight/10*j+0);
      blocks[i][j].changeColor();
    }
  }
}

function draw() {
  background(155);
  if (chosen.length==2) {
    blocks[chosen[0][0]][chosen[0][1]].switch(blocks[chosen[1][0]][chosen[1][1]]);
    blocks[chosen[0][0]][chosen[0][1]].setLabel(false);
    blocks[chosen[1][0]][chosen[1][1]].setLabel(false);
    chosen = [];
  }
  for (var i = 0; i < blocks.length; i++) {
    for (var j = 0; j < blocks[i].length; j++){
      blocks[i][j].display();
    }
  }
}

function touchStarted() {
  print('mouseReleased!');
  for (var i = 0; i < blocks.length; i++) {
    for (var j = 0; j < blocks[i].length; j++){
      result = blocks[i][j].clicked()
      print(result);
      if (result) {
        chosen.push([i,j]);
      }
    }
  }
}