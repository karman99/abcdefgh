const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var bgi,bg,sn,sni
var snow=[]
var maxSnow=100
var rand
function preload(){
  bgi=loadImage("snow2.jpg")
  sni=loadImage("snowman.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
   world=engine.world;
  sn=createSprite(200,540)
  sn.addImage(sni)
  sn.scale=0.6
  

}
function draw() {
   background(bgi)
   Engine.update(engine)
   if(keyDown("LEFT_ARROW")){
    sn.x=sn.x-1
    
  } 
  if(keyDown("RIGHT_ARROW")){
    sn.x=sn.x+1
   
  } 
  rand=Math.round(random(1,4))
  if(frameCount %5==0)
{
  snow.push(new bob(random(0,800),30,30))
  
} 
for(var j=0;j<snow.length;j++){
  snow[j].display()
}
 drawSprites();

}