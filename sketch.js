
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};

	

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	ball = Bodies.circle(150,100,10,ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2,height-30,1000,10);
	leftSide = new Ground(width /2,height- 55, 10,40);
	rightSide = new Ground(width * (3/4),height- 55, 10,40);
	Engine.run(engine);
	
	
}


function draw() {
  //rectMode(CENTER);

  background(0);
 
  push();
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,10);
  pop();
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball, ball.position, {x:10, y:-10});
	}
}


