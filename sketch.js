
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,150,width,50);

	ball1 = new Ball(200,400,60);
	ball2 = new Ball(300,400,60);
	ball3 = new Ball(400,400,60);
	ball4 = new Ball(500,400,60); 
	ball5 = new Ball(400,400,60);

	chain1 = new Chain(roof.body,ball1,{X:200,y:150});
	chain2 = new Chain(roof.body,ball2,{x:300,y:150});
	chain3 = new Chian(roof.body,ball3,{x:400,y:150});
    chain4 = new Chain(roof.body,ball4,{x:500,y:150});
	chain5 = new Chain(roof.body,ball5,{x:600,y:150});
	
	Engine.run(engine);

}


function draw() {
  	rectMode(CENTER);
  	background(255);

	roof.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

  	drawSprites();

}



