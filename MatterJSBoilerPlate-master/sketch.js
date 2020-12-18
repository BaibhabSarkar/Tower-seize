
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
var score=0
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
  stand2 = new Stand(700,200,200,10);
 
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

  //fifth
  
  box17 = new Block(640,175);
  box18= new Block(670,175);
  box19 = new Block(700,175);
  box20 = new Block(730,175);
  box21 = new Block(760,175);
  // six
  box22 = new Block(670,135);
  box23= new Block(700,135);
  box24 = new Block(730,135);

  //seven
  box25 = new Block(700,95);
  

  //ball holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});
	Engine.run(engine);
  
}


function draw() {
  background(242,83,9); 
   
  text("Score :"+score,750,40);
 
	textSize(20);
	fill("lightyellow");
  text("Drag the Polygon with mouse and Release it, hit the blocks",100,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  
	ground.display();
  stand1.display();
  stand2.display();


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

  //level 5
  fill("purple");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  //level 6
  fill("indigo");
  box22.display();
  box23.display();
  box24.display();

  //level 7
  fill(255,0,152);
  box25.display();

  // Score
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  
	fill("gold");
	imageMode(CENTER)
	image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
  slingShot.display();
  
  }
  function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingShot.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
    score.display();
  }