const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;	

var engine, world;
var trash,trashcan1, trashcan2, trashcan3;
var ground1;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	trash = new Paper(30,570,25);
	ground1 = new Ground(200, 600, 2000,10);
	trashcan1  = new Dustbin(550, 535, 12, 100);
	trashcan2 = new Dustbin(629, 578, 148, 10);
	trashcan3 = new Dustbin(700, 535, 12, 100);

}


function draw() {
  background(0);
  Engine.update(engine);

  trash.display();
  ground1.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();
  
  keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body, {x: trash.body.position.x,y: trash.body.position.y}, {x:0.1, y: 1.3});
		Matter.Body.setVelocity( trash.body, {x: 10, y: -10});
	}
        
}


