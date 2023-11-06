var corpo
var chon
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var chonoptions={
		isStatic:true
	}
chon=Bodies.rectangle(400,650,800,20,chonoptions)
World.add(world,chon)
corpo=Bodies.circle(400,100,50)	
World.add(world,corpo)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(corpo.position.x,corpo.position.y,50)
  rect(chon.position.x,chon.position.y,800,20) 
}



