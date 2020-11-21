const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var maxDrops = 100;
var umbrella,thunder,img1,img2,img3,img4;
var drops = [];
var engine,world,rand;
var thunderCreatedFrame=0;
function preload(){
    img1 = loadImage("1.png");
    img2 = loadImage("2.png");
    img3 = loadImage("3.png");
    img4 = loadImage("4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,700);
   umbrella = new Umbrella(200,500);
   if(frameCount%150===0) {
    for(var i = 0;i<maxDrops;i++) {
        drops.push(new createDrop(random(0,400)),(random(0,400)));
    }
   }
    
}

function draw(){
    Engine.update(engine);
    background("black");
    var rand = Math.round(random(1,4));
    if(frameCount % 80 === 0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand) {
          case 1: thunder.addImage(img1);
                  break;
          case 2: thunder.addImage(img2);
                  break;
          case 3: thunder.addImage(img3);
                  break;
          case 4: thunder.addImage(img4);
                  break;
          default: break;
        }
        thunder.scale = random(0.3,0.6);
       }
       if(thunderCreatedFrame+10===frameCount&&thunder) {
           thunder.destroy();
       }
       umbrella.display();
    for (var i = 0; i < maxDrops.length; i++) {
     
        drops[i].showDrop();
        drops[i].updateY();
        
      }


    drawSprites();
}   
