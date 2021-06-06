var tower , towerImg
var door , doorImg , doorsGroup
var climber , climberImg , climbersGroup
var ghost , ghostImg
var invisibleblockGroup
var gamestate="play"
var spookysound

function preload(){
  
towerImg=loadImage("tower.png");
doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost-standing.png");
spookysound=loadSound("spooky.wav")

}

function setup(){
  
createCanvas(600, 600);
spookysound.loop();
tower=createSprite(300, 300);
tower.addImage("tower", towerImg);
tower.velocityY=1;
doorsGroup=new Group();
climbersGroup=new Group();
ghost=createSprite(200 , 200 , 50 , 50);
ghost.addImage(ghostImg);
ghost.scale=0.3;
invisibleblockGroup=new Group();
  
}
function draw(){
  background(0);
  
  if(gamestate==="play") {
    
    
 if(tower.y>400) {
   
    tower.y=300;
    
  }
    
    
  if(keyDown("left")) {
    
    ghost.x=ghost.x-3;
  }
  if(keyDown("right")) {
    
    ghost.x=ghost.x+3;
  }
  if(keyDown("space")) {
    
    ghost.velocityY=-5;
  }
  
  ghost.velocityY=ghost.velocityY+0.8;
  
    
spawndoors()
    
    if(climbersGroup.isTouching(ghost)) {
      
      ghost.velocityY=0;
    }
    
    if(invisibleblockGroup.isTouching(ghost) || ghost.y>600){
      
      ghost.destroy();
      gamestate="end";
    }

         
drawSprites();
    
  }
  
 if(gamestate==="end"){
   
   stroke("yellow");
   fill("yellow");
   
   textSize(30);
   text("GAME OVER" , 230 , 250);
   
   
   
 }
  

 
  
  
  
}

function spawndoors(){

  if(frameCount%240===0){
    
    door=createSprite(200 , -50);
    door.addImage(doorImg);
    
    climber=createSprite(200 , 10);
    climber.addImage(climberImg);
    
    var invisibleblock=createSprite(200 , 15);
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    
    
    door.x=Math.round(random(120, 400));
    door.velocityY=1;
    
    climber.velocityY=1;
    climber.x=door.x;
    
    invisibleblock.x=door.x;
    invisibleblock.velocityY=1;
    
    ghost.depth=door.depth;
    ghost.depth+=1;
    
    door.lifetime=800;
    climber.lifetime=800;
    
    invisibleblock.visible=false;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleblockGroup.add(invisibleblock);
    
    
    
  }
  

}
