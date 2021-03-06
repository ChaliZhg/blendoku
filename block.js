function Block(x, y) {
  this.x = x;
  this.y = y;
  this.width = 36;
  this.corner = 6;
  this.col = color(255);
  this.isLabeled = false;

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  }
  this.display = function() {
    noStroke();
    // stroke(255);
    fill(this.col);
    rect(this.x, this.y, this.width, this.width, this.corner);
    if (this.isLabeled) {
      fill(255);
      ellipse(this.x+this.width/2, this.y+this.width/2, this.width/4, this.width/4);
    }
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.width + other.width) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.clicked = function() {
    if ((mouseX<this.x+this.width)&&(mouseY<this.y+this.width)&&(mouseX>this.x)&&(mouseY>this.y)) {
      this.isLabeled = true;
      return true
      }
    return false
  }

  this.switch = function(other) {
    var tempCol = this.col;
    this.col = other.col;
    other.col = tempCol;
  }

  this.setLabel = function(lab=false) {
    this.isLabeled = lab;
  }
}