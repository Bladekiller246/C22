const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var obj_options = {
    isStatic: true
  }
  object = Bodies.rectangle(200,390,400,25, obj_options);
  World.add(world, object);

  var ball_options = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,20,20,ball_options)
  World.add(world, ball)
  console.log(object.position.x);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  ellipseMode(RADIUS)
  rect(object.position.x,object.position.y,400,25)
  drawSprites();

  ellipse(ball.position.x, ball.position.y,20,20)
}










