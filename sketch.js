const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var a,block8,block9,block10,block11,block12,block13,block14,block15,block16,stand2,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var circles=[];
var ground,stand1,polygon,slingshot;
var score =0;
var bg = "black" //Created a global variable

function setup() {
  
  createCanvas(800,800);
  stroke(255)
  engine=Engine.create();
  world=engine.world;
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
  ground=new Ground(width/2,height,800,20);
  
  //score
  score = 0


  
  stand1=new Ground(298,757,240,10);
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);

  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);

  block16=new Box(390,155,30,40);
polygon=new Polygon(20,600,40);
//second
  block17=new Box(300,730,30,40);
  block18=new Box(270,730,30,40);
  block19=new Box(240,730,30,40);
  block20=new Box(330,730,30,40);
  block21=new Box(360,730,30,40);

   block22=new Box(270,690,30,40);
   block23=new Box(300,690,30,40);
   block24=new Box(330,690,30,40);

  slingshot=new SlingShot(polygon.polygon,{x:100,y:200});
   block25=new Box(300,650,30,40);
  stand2=new Ground(390,262,240, 10);
  getbackgroundImage(); //call the getbackgroundImage()
}
//Engine.run(engine);
function draw() {
  //camera.zoom=camera.zoom+1
  Engine.update(engine);
 
  console.log(bg) 
  background(bg); //update the bg variable in background()
   
  //console.log(score)
  fill("yellow");
  text("SCORE : "+score,650,40);
 
  stand1.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
 
  block25.display();
//Score
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
 
  block25.score();
  polygon.display();
  slingshot.display();
  a=a-1;
  stand2.display(); 
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
  ground.display();
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 //drawSprites();
}

function keyPressed ()
{
  // if(keyCode === RIGHT_ARROW)
  // {
    
  //   if(keyIsDown(RIGHT_ARROW))
  //   {
  //     camera.position.x=camera.position.x+10;
  //   }
  // }

  //Attach
  if(keyCode === 32)
  {
    slingshot.attach(polygon.polygon)
    
  }
} 
function mouseDragged(){
	Matter.Body.setPosition(polygon.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	slingshot.fly();
}
async function getbackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJS=await response.json();
  var daytime=responseJS.datetime;
  var hour=daytime.slice(11,13);
  if(hour>=06&&hour<=19){
    bg = "blue"
  }
  else{
    bg = "red"
  }
 return bg;
}