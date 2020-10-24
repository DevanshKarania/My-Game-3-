var player, background, playerIMG;
var backgroundIMG;
var enemy, enemy2, enemy3, enemy4, enemy5;
var eI, eI2, eI3, eI4, eI5;
var meteor, meteor2;
var bullet, bulletIMG;
var gamestate = "start";

function preload(){
backgroundIMG = loadImage("Images/background.jpg");
eI = loadImage("Images/e1.png");
eI2 = loadImage("Images/e2.png");
eI3 = loadImage("Images/e3.png");
eI4 = loadImage("Images/e4.png");
eI5 = loadImage("Images/e5.png"); 
meteor = loadImage("Images/asteroid3.png");
meteor2 = loadImage("Images/meteor.png");
playerIMG = loadImage("Images/spaceship.png");
bulletIMG = loadImage("Images/bullet.gif");
}

function setup() {
  createCanvas(displayWidth, displayHeight-110);
  display = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  display.addImage(backgroundIMG);
  display.scale=2;
 // display.y = displayHeight/2-200;
 player = createSprite(displayWidth/2, displayHeight/2+190);
 player.addImage(playerIMG);
 player.scale = 0.5;
 bullet = new Group();

}


function draw() {


 if(gamestate == "play"){
/*  display.velocityY = 3;
 if(display.y>500){
 display.y = displayHeight/2-200;
 }*/

 spawnEnemy();
 //spawnEnemy2();
 

 if(World.frameCount == 600){
   gamestate = "enemy";
 }



 if(keyDown("RIGHT_ARROW")){
   player.x = player.x+5;
 }

 if(keyDown("LEFT_ARROW")){
   player.x = player.x-5;
 }

 }


 if(gamestate == "enemy"){
   var enemy = createSprite(displayWidth/2,displayHeight/2-200);
   enemy.addImage(eI);
   enemy.scale = 0.5;

   player = createSprite(displayWidth/2, displayHeight/2+190);
   player.addImage(playerIMG);
   player.scale = 0.5;

   if(keyDown("RIGHT_ARROW")){
   player.velocityX = 2;

  }
  
  if(keyDown("LEFT_ARROW")){
    player.velocityY = -2;
  }
  if(keyDown ("UP_ARROW")){
    var temp = createBullet();
    temp.x = player.x;
    }
 }
 

 
 
  drawSprites();

  if(gamestate == "start"){
    textSize(32);
    fill("black");
    text("Press Space key to start.", displayWidth/2-200, displayHeight/2-50);
    if(keyDown("space")){
      gamestate = "play";
    }
   
     }
    }
function spawnEnemy(){
  if(World.frameCount%100 == 0){
  enemy = createSprite(random(displayWidth/2-500,displayWidth/2+500), 0);
  enemy.velocityY = 3;
  enemy.velocityX = 3;
  enemy.addImage(meteor);
  enemy.scale = 0.5;
 
  }
}
function spawnEnemy2(){
  if(World.frameCount%300 == 0){
    enemy = createSprite(random(displayWidth/2-500,displayWidth/2+500), 0);
    enemy.velocityY = 3;
    enemy.addImage(meteor2);
    enemy.scale = 0.5;
  }
    
}
function createBullet(){
var bullet = createSprite(displayWidth/2, displayHeight/2+190);
bullet.addImage(bulletIMG);
bullet.velocityY = -5;
return bullet();
}