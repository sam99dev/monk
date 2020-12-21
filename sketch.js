var play = 1;
var end = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score = 0;
var bananaGroup, stoneGtoup;
var bg,bgimg;
var obstacleGroup,fruitGroup;
var gamemode = play;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  stoneGroup = new Group();
  bgimg = loadImage("jungle.jpg")
 
}



function setup() {
  createCanvas (600,400);
  
  bg = createSprite(300,200);
  bg.addImage(bgimg);
  bg.velocity.x = -5
  
  obstacleGroup = new Group()
  fruitGroup = new Group()
  
  ground = createSprite(300,375,650,10);
  ground.visible = false;
  
   monkey = createSprite (100,312);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.18
 // monkey.debug = true
  
  

}


function draw() {
background ("white");
  
  if (bg.x < 100){
bg.x = bg.width/2} 
  
  if (gamemode === play){
    
    monkey.collide (ground);
  if (keyWentDown("space") && monkey.y >=280){
    monkey.velocityY = -20
  }
    
monkey.velocityY =   monkey.velocityY +1
    if(monkey.isTouching(fruitGroup)){
   banana.destroy();
   score = score +1}
      
       if(monkey.isTouching(obstacleGroup)){
  gamemode = end
 }
  
  bananas();
  obstacles();
  }
  
  
  
  if (gamemode === end){
    monkey.destroy()
   banana.destroy()
   bg.destroy();
   obstacle.destroy();
   obstacle.lifetime = -5
   banana.lifetime = -5
  }
  
  drawSprites();
}
function obstacles(){
    if (frameCount % 200 === 0){
    obstacle = createSprite (700,330);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2
    obstacle.velocity.x = -7
    obstacle.lifetime = 600
      obstacle.setCollider("circle", 0,10,250)
     // obstacle.debug = true;
       obstacleGroup.add(obstacle)
  }
  
}
function bananas(){
   if (frameCount % 100 === 0){
    banana = createSprite (600,115);
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocity.x = -12
  banana.lifetime = 600
   //  banana.debug = true;
  fruitGroup.add(banana)
     
}
}





