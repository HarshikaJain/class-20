var fixed,moving;
var box1,box2;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="purple";
  moving=createSprite(100,100,80,30);
  moving.shapeColor="purple";

  box1=createSprite(100,100,50,50);
  box1.shapeColor="blue";
  box1.velocityX=2;
  box2=createSprite(700,100,50,50);
  box2.shapeColor="chocolate";
  box2.velocityX=-2;
}

function draw() {
  background(0);  
  moving.x=mouseX;
  moving.y=mouseY;
  console.log(moving.x-fixed.x);
  console.log(fixed.width/2+moving.width/2);
  if(moving.x-fixed.x<fixed.width/2+moving.width/2 &&
   fixed.x-moving.x<fixed.width/2+moving.width/2&&
   moving.y-fixed.y<fixed.height/2+moving.height/2 &&
   fixed.y-moving.y<fixed.height/2+moving.height/2){
    fixed.shapeColor="lime";
    moving.shapeColor="lime";
  }
  else{
    fixed.shapeColor="purple";
    moving.shapeColor="purple";
  }

  if(box1.x-box2.x<box2.width/2+box1.width/2 &&
    box2.x-box1.x<box2.width/2+box1.width/2&&
    box1.y-box2.y<box2.height/2+box1.height/2 &&
    box2.y-box1.y<box2.height/2+box1.height/2){
    box1.velocityX=-1*box1.velocityX
    box2.velocityX=-1*box2.velocityX
   }
  
  drawSprites();
}