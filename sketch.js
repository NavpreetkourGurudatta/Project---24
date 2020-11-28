
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine
var paper
var dustbin1,dustbin2,dustbin3
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
  
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(120,340);
	dustbin1 = new Dustbin(870,380,200,19);
	dustbin2 = new Dustbin(780,350,19,120);
	dustbin3 = new Dustbin(980,350,19,120);
	ground = new Ground(600,height,1200,20);
	}


function draw() {
	background('black');
paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
ground.display();
	Engine.run(engine);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}


