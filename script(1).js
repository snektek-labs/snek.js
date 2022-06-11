var sprites = [];
var sprite_asset = [];
var sprites_x = [];
var sprites_y = [];
var sprites_classes = [];
class snek {
  start() {
    for (var i=0; i < sprites.length; i++ ) {
      sprites_classes.push(new sprite(sprites[i], sprite_asset[i]))
    }
  }
} 
class sprite{
  constructor(name, asset) {
    this.name = name;
    this.asset = asset;
  }
}
function help(){
	console.log("NO!")
  console.log(sprites_classes[0])
}
const canvas = document.getElementById("canvas");
const cntxt = canvas.getContext("2d");
