const Engine = Matter.Engine; const Render = Matter.Render; const World = Matter.World; const Bodies = Matter.Bodies; const Constraint = Matter.Constraint; const Body = Matter.Body;

var court;
var cancha;
var jug1;
var jug2;
var pelota;
var engine, world
var suelo

function preload(){
  court = loadImage("imagenes/court.png")
}

function setup(){
  createCanvas(3500, 3500)
  engine = Engine.create(); world = engine.world;
  cancha = createSprite(1750,1750,3500,3500)
  cancha.addImage(court)
  cancha.scale=4

  jug2 = createSprite(3000,1500,300,1000)
  jug1 = createSprite(500,1500,300,1000)
  

  var options = {restitution: 1}
  pelota = Bodies.circle(500,1750,50,options)
  World.add(world,pelota)
  var options2 = {isStatic: true}
  suelo = Bodies.rectangle(1750,2050,3500,50,options2)
  World.add(world,suelo)
  
  rectMode(CENTER); ellipseMode(RADIUS); imageMode(CENTER);
}

function draw(){
  background("green");
  Engine.update(engine);
  if(jug2.x > 1800 && jug2.x < 3500){
    jug2.x = pelota.position.x
  }
  if(keyDown("D")){
    jug1.x = jug1.x + 20
  }
  if(keyDown("A")){
    jug1.x = jug1.x -20
  }
  drawSprites();
  ellipse(pelota.position.x,pelota.position.y,50,50)
  noFill()
  rect(suelo.position.x,suelo.position.y,3500,50)
  if(collide(pelota,jug1)==true){
  jug1.shapeColor = "red"
  }
  if(collide2(pelota,jug2)==true){
    jug2.shapeColor = "red"
    }
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=10)
            {
              Matter.Body.applyForce(fruit,{x:0,y:0},{x:0.01,y:0});
             
   
         }
}
}
function collide2(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=10)
            {
              Matter.Body.applyForce(fruit,{x:0,y:0},{x:-0.01,y:0});
             
   
         }
}
}