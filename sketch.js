const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var snow,snowImg;
var bg;
var engine,world;
var boy,boyImg;
var Edges;


function preload (){

  snowImg=loadImage("snow5.webp")
 snowBgImg=loadImage("snow3.jpg")
 boyImg=loadImage("boy.png")

}


function setup() {
  createCanvas(1200,800);

  engine=Engine.create();
  world=engine.world;

  bg = createSprite(400, 200, 1200, 800);
	bg.addImage(snowBgImg);  
	
  snow = new Snow ("snowImg",400,400,50,50)
  

 boy = createSprite(390,300,40,40)
 boy.addImage(boyImg)
 boy.scale=0.7;
  
}

function draw() {
 background (255)
 Engine.update(engine)
  snow.display();

  boy.display();
  mousePressed ();
  text(mouseX+','+mouseY,10,45)
  
  drawSprites();
}

function mousePressed (){
  if (keyDown("RIGHT_ARROW")) {
    boy.x = boy.x +5;
 }

    if (keyDown("LEFT_ARROW")) {
      boy.x = boy.x -5;
      }

}
