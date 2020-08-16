var bananaImg,bananaGroup,stoneImg,stoneGroup
var ground, backGround
var score
var monkey_running
var monkey

function preload() {
  
  bananaImg = loadImage("banana.png");
  stoneImg = loadImage("stone.png");
  backGround = loadImage("jungle.png");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07","Monkey_08.png");
  
  
}

function setup() {
  Ground = createSprite(200,10,400,20);
  Ground.x = Ground.width/2;
  Ground.velocityX = -2;
  Ground.visible = false;
  
  monkey = createSprite(20,30,10,10);
  
  bananaGroup = newGroup();
  stoneGroup = newGroup();
  
  score = 0;
  
}

function draw() {
  backGround = "white";
  
  if(keyDown(Space))
  {
    monkey.velocityY = -4
  }
  
  if(fruitGroup.isTouching(monkey))
  {
    fruitGroup.destroyEach
  }
  
  if(stonesGroup.isTouching(monkey))
  {
    monkey.scale = 0.2;
  }
  
  
  drawSprites();
  
}

function fruits() {
  if(frameRate%80 === 0){
    var banana = createSprite(400,320,40,10);
    banana.Math.round(random(80,120));
    bananaGroup.add(banana);
  }
}

function stones() 
{
   if(frameRate%200 === 0)
   var stone = createSprite(400,15,20,20);
  stone.Math.round(random(80,120);
  stonesGroup.add(stone):
}