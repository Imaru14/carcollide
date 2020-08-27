var car,wall;
var speed,weight;

function setup() {
speed=random(55,90);
weight=random(400,1500);
  createCanvas(1600,400);
  car=createSprite(100, 80, 70, 40);
  wall= createSprite(1100, 200, 60, 400);
  
 
}

function draw() {
  background("black"); 
  car.velocityX = speed;
  wall.shapeColor=color(80,80,80);
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
      car.velocityX=0;
      var deformation=0.5 * weight * speed * speed/22509;
      if (deformation>180)
      {
        car.shapeColor=color(255,0,0);
      }
       if (deformation<180 && deformation>100)
       {
         car.shapeColor=color(230,230,0);
       }
       if(deformation<100)
       {
         car.shapeColor=color(0,255,0);
       }

  







  }

  drawSprites();
}