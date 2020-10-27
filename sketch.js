var helicopterIMG, helicopterSprite, packageSprite,packageIMG
var packageBody,ground
var box1, box2, box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor="white"

	engine = Engine.create();
	world = engine.world;

	wall1 = Bodies.rectangle(400, 670, 150, 20 ,{isStatic:true} );
	World.add(world, wall1);
	
	wall2 = Bodies.rectangle(320, 630, 20, 100 ,{isStatic:true} );
	World.add(world, wall2);

	wall3 = Bodies.rectangle(470, 630, 20, 100 ,{isStatic:true} );
	World.add(world, wall3);



	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red")
  rect (wall1.position.x, wall1.position.y, 150, 20)
  rect (wall2.position.x, wall2.position.y, 20, 100)
  rect (wall3.position.x, wall3.position.y, 20, 100)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	console.log("down key 1")
	 Matter.Body.setStatic(packageBody, false) 
	 console.log("down key 2")
	
	  
  }
}



