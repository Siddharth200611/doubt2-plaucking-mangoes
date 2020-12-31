const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Stone;
var Ground;
var Tree,treeImg;
var mango1, mango2, mango5, mango4;
var slingshot;
function preload()
{
	treeImg=loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Stone=new stone (500,600,20)
Ground=new ground (500,650,1000,30)
Tree=new tree(640,540,40,200)
mango1=new Mango(550,400,40)
mango2=new Mango(770,350,40)
mango3=new Mango(700,300,40)
mango4=new Mango(660,400,40)
slingshot=new Sling(Stone.body,{x:500,y:50})

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  //image(treeImg,480,410,100,300)
 
 Stone.display();
 Ground.display();
 Tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 slingshot.display();
 drawSprites();
}


function mouseDragged(){

	Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
	
		slingshot.fly();
	
	}
	































