var a, b;

var car,wall;



function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200,100, 50, 50);
  a.shapeColor = "green";
  b.shapeColor = "green";
  
  car = createSprite(200,200,40,40);
  wall = createSprite(700,200,20,100);
  car.shapeColor = "blue";
  wall.shapecolour = "pink";

  car.velocityX = 4;

}

function draw() {
  background(255,255,255);
  
  a.x = World.mouseX;
  a.y = World.mouseY;
  console.log(a.x-b.x);
  if (isTouching(a,wall)){
    car.shapeColor = "yellow";
    wall.shapeColor = "yellow";
  }
  bounceOff(car,wall);

drawSprites();
}

