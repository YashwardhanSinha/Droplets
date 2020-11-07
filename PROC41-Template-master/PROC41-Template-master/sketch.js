const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops =[];
var man;

function preload(){
    
}

function setup() {
createCanvas(800,800);

engine = Engine.create()
world = engine.world;

man = new Man(400,750,200,200);

for(var i= 0; i<800; i=i+5) {
 var droplets = new Drop (i,random(-400,300,), random(4,5))
 drops.push(droplets);
 World.add(world, drops);
}

}

function draw(){
background(0,100);

Engine.update(engine);

for(var i=0; i<drops.length; i++) {
 drops[i].display()
}

man.display()

    
}   

