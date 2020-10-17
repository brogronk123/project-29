const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon;
var platform,platform2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  SlingShot = new SlingShot(this.polygon,{x:100,y:200});

  platform = new Ground(420,400,300,20);

  platform2 = new Ground(420,140,300,10);

  
  //level one
  block1 = new Block(330,300,30,40);
  block2 = new Block(360,300,30,40);
  block3 = new Block(390,300,30,40);
  block4 = new Block(420,300,30,40);
  block5 = new Block(450,300,30,40);
  block6 = new Block(480,300,30,40);
  block7 = new Block(510,300,30,40);
  //level two
  block8 = new Block(360,235,30,40);
  block9 = new Block(390,235,30,40);
  block10 = new Block(420,235,30,40);
  block11 = new Block(450,235,30,40);
  block12 = new Block(480,235,30,40);
  //level three
  block13 = new Block(390,195,30,40);
  block14 = new Block(420,195,30,40);
  block15 = new Block(450,195,30,40);
  //level four
  block16 = new Block(420,155,30,40);

  //level one
  block17 = new Block(330,40,30,40);
  block18 = new Block(360,40,30,40);
  block19 = new Block(390,40,30,40);
  block20 = new Block(420,40,30,40);
  block21 = new Block(450,40,30,40);
  //level two
  block22 = new Block(360,20,30,40);
  block23 = new Block(390,20,30,40);
  block24 = new Block(420,20,30,40);
  //level three
  block25 = new Block(390,10,30,40);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  platform.display();
  platform2.display();
  fill("#87CEEA");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("#FFC0CB");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("#3FE0D0");
  block13.display();
  block14.display();
  block15.display();
  fill("#808080");
  fill("#87CEEA");
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("#3FE0D0");
  block22.display();
  block23.display();
  block24.display();
  fill("#FFC0CB");
  block25.display();

  drawSprites();
}