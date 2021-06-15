const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var box1 , box2 , box3;
var ground1 ;
var ball;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(300,400,60,60);
  box3 = new Box(400,500,70,70);

  ground1 = new Ground(300,595,600,10);

  var ball_options = {
    restitution:1.8
  }

  ball = Bodies.circle(200,100,25,ball_options);
  World.add(world,ball);
}

function draw() {
  background("blue"); 
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();

  ground1.display();

  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,20,40);
}