const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var toproof;
var rope1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  toproof= new Roof(380,60,300,30);

  pendulum1 = new Pendulum(380,300,30);
  pendulum2 = new Pendulum(pendulum1.x+60,300,30);
  pendulum3 = new Pendulum(pendulum2.x+60,300,30);
  pendulum4 = new Pendulum(pendulum1.x-60,300,30);
  pendulum5 = new Pendulum(pendulum4.x-60,300,30);
  
  rope1 = new Rope(pendulum1.body,toproof.body,0,0);
  rope2 = new Rope(pendulum2.body,toproof.body,60,0);
  rope3 = new Rope(pendulum3.body,toproof.body,120,0);
  rope4 = new Rope(pendulum4.body,toproof.body,-60,0);
  rope5 = new Rope(pendulum5.body,toproof.body,-120,0);

}

function draw() {
  background(3,254,159);  

  Engine.update(engine);

  toproof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(pendulum5.body, {x: mouseX, y: mouseY});
}