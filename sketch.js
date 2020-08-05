var bullet, speed,weight;

var wall,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
	weight=random(30,52)

thickness=random(22,83);

	bullet=createSprite(50, 200, 50,10);   
	bullet.velocityX = speed;
	bullet.shapeColor=color(255);


  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)


  
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage>10)
	{
		wall.shapeColor=color("green");
	}

	if(damage<10)
	{
		wall.shapeColor=color("red");
	}
  }  
  drawSprites();
}
function hasCollided(bullet2,wall2){
	 bulletRight=bullet2.x+bullet2.width;
	 wallLeft=wall2.x;
	 if(bulletRight>=wallLeft){
		 return true;
	 }
	 else{
		 return false;
	 }
}