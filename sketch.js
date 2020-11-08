const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground1,dustbin;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
    Engine.run(engine);
  
	ball=new Paper(200,450,70);
	ground1=new Ground();
	
    dustbin=new Dustbin(1300,468,180,210);

}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground1.display();
  dustbin.display();
  ball.display();
}

function keyPressed () {
if(keyCode===UP_ARROW) {
Matter.Body.applyForce(ball.body,ball.body.position,{x:1230,y:-1230});
}
}

