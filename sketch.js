
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(220, 550, 30)
	ball2 = new Ball(280, 550, 30)
	ball3 = new Ball(340, 550, 30)
	ball4 = new Ball(400, 550, 30)
	ball5 = new Ball(460, 550, 30)

	roof = new Roof(380, 200, 600, 30)
	
	rope1 = new Rope(ball1.body, {x:220, y:215})
	rope2 = new Rope(ball2.body, {x:280, y:215})
	rope3 = new Rope(ball3.body, {x:340, y:215})
	rope4 = new Rope(ball4.body, {x:400, y:215})
	rope5 = new Rope(ball5.body, {x:460, y:215})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}

