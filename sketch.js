const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rain
var thunder, thunderImage, thunderGroup
var umbrella
var dropsArray = [];

function preload()
{
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup()
{
    createCanvas(400, 900);
    engine = Engine.create();
    world = engine.world;

    thunderGroup = new Group();
   
    rain = new Drops(100,100,20);
    umbrella = new Umbrella(200, 650, 100);

    Engine.run(engine);
}

function draw()
{
    background(0);

    if(frameCount%15 === 0)
    {
        rainDrops();
    }

    for(var i=0; i<dropsArray.length; i++)
    {
        dropsArray[i].display();
    }

   

    umbrella.display();

    spawnThunder();

    drawSprites();
}   

function rainDrops()
{
    for(var i=0; i<20; i++)
    {
        dropsArray.push(new Drops(random(0, 400), random(-200, 0), 10));
    }

    
}

function spawnThunder()
{
    var randomNumb = Math.round(random(10, 40));
    var randomNumb2 = randomNumb + 1;

    if(frameCount%randomNumb === 0)
    {
        thunder = createSprite(random(100, 300), random(20, 80));


        var rand = Math.round(random(1,4));
        switch(rand) {
        case 1: thunder.addImage(thunder1);
                break;
        case 2: thunder.addImage(thunder2);
                break;
        case 3: thunder.addImage(thunder3);
                break;
        case 4: thunder.addImage(thunder4);
                break;
        default: break;
        }

        thunderGroup.add(thunder);
    }
    if(frameCount%randomNumb2 === 0)
    {
        thunderGroup.destroyEach();
    }
}

