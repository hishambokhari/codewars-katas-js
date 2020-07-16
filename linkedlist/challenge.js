function setup(){
  noCanvas();
}

function Tree(){
  this.root = null;
}

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}