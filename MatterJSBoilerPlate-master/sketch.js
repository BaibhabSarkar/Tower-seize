
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 // stand2 = new Stand(700,200,200,10);
 
 // Row 1
  box1 = new Block(390,275);
  box2 = new Block(330,275);
  box7 = new Block(300,275);
  box3 = new Block(360,275);
  box4 = new Block(420,275);
  box5 = new Block(450,275);
  box6 = new Block(480,275);
  
  //second row
  box8 = new Block(330,235);
  box9 = new Block(360,235);
  box10 = new Block(390,235);
  box11 = new Block(420,235);
  box12 = new Block(450,235);

  //third row
  box13 = new Block(360,195);
  box14 = new Block(390,195);
  box15 = new Block(420,195);

  //fouth row
  box16 = new Block(390,155);
  

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
	Engine.run(engine);
  
}


function draw() {
	background(242,83,9); 
 
	textSize(20);
	fill("lightyellow");
	text("Drag the Polygon with mouse and Release it, hit the blocks",100,30);
  
	ground.display();
  stand1.display();
 // stand2.display();


  strokeWeight(2);
  stroke(255);

    // Level 1
  fill(28,3,51);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  // level 2
  fill(244,69,247);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  //Level 3
  fill(13,142,11);
  box13.display();
  box14.display();
  box15.display();

  //level 4
  fill(250,255,0);
  box16.display();

	fill("gold");
	imageMode(CENTER)
	image(polygon_img ,ball.position.x,ball.position.y,40,40);
  
	slingShot.display();
  }
  function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingShot.fly();
  }