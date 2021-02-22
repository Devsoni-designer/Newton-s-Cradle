
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() 
{

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(370,110,140,15);

	bob = new Bob(250,380);



	Engine.run(engine);
  
}


function draw() 
{

	Engine.update(engine);

	rectMode(CENTER);
	background(255,255,0);
	
	bob.display();
	roof.display();
	
	
  
    drawSprites();
 
}



