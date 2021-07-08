const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob,bob2,bob3,bob4,bob5;
var con,con2,con3,con4,con5;

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world
	var roof_options={
		isStatic:true			
	}
     var bob_options={
		 isStatic:false,
		 restitution: 1,
		 friction:0,
		 density:0.8
	 }
	
	
	 
	roof = Bodies.rectangle(400,100,230,20,roof_options);
	World.add(world,roof)
	bob = Bodies.circle(400,200,10,bob_options);
	bob2 = Bodies.circle(380,200,10,bob_options);
	bob3 = Bodies.circle(360,200,10,bob_options);
	bob4 = Bodies.circle(340,200,10,bob_options);
	bob5 = Bodies.circle(320,200,10,bob_options);
	World.add(world,bob)
	World.add(world,bob2)
	World.add(world,bob3)
	World.add(world,bob4)
	World.add(world,bob5)
	con = new Rope(bob,roof,0,0);
	con2 = new Rope(bob2,roof,-20,0);
	con3 = new Rope(bob3,roof,-40,0);
	con4 = new Rope(bob4,roof,-60,0);
	con5 = new Rope(bob5,roof,-80,0);
	World.add(world,con);
	World.add(world,con2);
	World.add(world,con3);
	World.add(world,con4);
	World.add(world,con5);
	Engine.run(engine);
  
}

function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");
 
 con.display();
 con2.display();
 con3.display();
 con4.display();
 con5.display();
 
  rect(roof.position.x,roof.position.y,230,20);
  ellipse(bob.position.x,bob.position.y,10);
 ellipse(bob2.position.x,bob2.position.y,10);
 ellipse(bob3.position.x,bob3.position.y,10);
 ellipse(bob4.position.x,bob4.position.y,10);
 ellipse(bob5.position.x,bob5.position.y,10);

 

 
}
function keyPressed()
 {
   if(keyCode===RIGHT_ARROW)
	 {
	   Matter.Body.applyForce(bob5,bob5.position,{x:-40,y:0});
	 }
 }