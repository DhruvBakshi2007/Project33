const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var boxes1=[]
var boxes2=[]
var boxes3=[]
var boxes4=[]
function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(800, 600, 1600, 20);

  hero = new Hero(300,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });

  monster = new Monster(1500,550,300);
for(var i=0;i<8;i++){
  box1 = new Box(700, 100, 70, 70);
boxes1.push(box1)

}
for(var i=0;i<7;i++){
  box2 = new Box(900, 100, 70, 70);
boxes2.push(box2)

}
for(var i=0;i<10;i++){
  box3 = new Box(1100, 100, 70, 70);
boxes3.push(box3)

}
for(var i=0;i<8;i++){
  box4 = new Box(1300, 100, 70, 70);
boxes4.push(box4)

}


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  for(var i=0;i<boxes1.length;i++){
 boxes1[i].display()
  
  }
  for(var i=0;i<boxes2.length;i++){
    boxes2[i].display()
     
     }
     for(var i=0;i<boxes3.length;i++){
      boxes3[i].display()
       
       }
       for(var i=0;i<boxes4.length;i++){
        boxes4[i].display()
         
         }
  

 

  


  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{ x: mouseX,y: mouseY})



}
