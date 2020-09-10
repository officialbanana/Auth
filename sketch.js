var car,wall;
var speed,weight;

function setup() {
  speed=random(55,90);
  weight=random(55,90);
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall =createSprite(1500,200,60,200);
  wall.visible = true;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}