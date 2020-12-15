const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rain
var umbrella

function preload()
{
    
}

function setup()
{
    createCanvas(400, 900);
    engine = Engine.create();
	world = engine.world;
   
    rain = new Drops(100,100,20);
    umbrella = new Umbrella(200, 450, 100);

    Engine.run(engine);
}

function draw()
{
    background(0);

    rain.display();
    umbrella.display();
}   

