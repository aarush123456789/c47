var leoz,ground
var PLAY=1;
var END=0;
var gameState =PLAY;
var leozAnimation
var Ground

function preload(){
leozAnimation = loadAnimation ("Run.png","Run2.png","Run3.png")
Ground = loadImage("ground.png")
bk = loadImage("th.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  bk1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bk1.addImage(bk)
  bk1.x = bk1.width/2
  bk1.scale=5.5
  
  leoz = createSprite (windowWidth-1200,windowHeight-60,80,80)
leoz.addAnimation("leoz",leozAnimation)
leoz.scale=1.8
  ground = createSprite(windowWidth/2,windowHeight-10,windowWidth,20);
  ground.addImage(Ground)
  ground.x = ground.width/2
}


function draw() {

  background(1)  
  drawSprites();

  if (gameState === PLAY)
  {
    ground.velocityX= -4

    if(ground.x < 0){
      ground.x = ground.width/2

    }

if(keyDown("space")){
 leoz.velocityY = -13
}

leoz.velocityY = leoz.velocityY + 0.8

leoz.collide(ground);
  }

  
}