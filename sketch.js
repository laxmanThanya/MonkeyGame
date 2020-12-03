
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;
var survivalTime=0;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
  
  monkey=createSprite(75,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(75,350,1000,10);
  
foodGroup=createGroup();
obstacleGroup=createGroup();  
  
}


function draw() {
  background(600);
   bananaFood();

  stoneObstacle();
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  if(keyDown("space") ){
    monkey.velocityY=-9;
    
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :"+survivalTime,100,50);
  
drawSprites();
  
}

function bananaFood(){
  if(frameCount % 150 === 0){
  banana=createSprite(200,Math.round(random(200,250)),20,20);
  banana.addImage("Image",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;  
 
    banana.lifetime=60;
    foodGroup.add(banana);
  }
  
  
}

function stoneObstacle(){
  if(frameCount % 200 === 0) {
  obstacle=createSprite(500,330,20,20);
  obstacle.addImage("Image",obstaceImage);
  obstacle.scale=0.1;
    obstacle.velocityX=-3;
obstacleGroup.add(obstacle);
}
}




