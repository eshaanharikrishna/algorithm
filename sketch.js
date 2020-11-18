var movingrect,fixedrect

function setup() {
 
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
fixedrect=createSprite(200,100,50,50)
movingrect.shapeColor="blue"
fixedrect.shapeColor="yellow"

}

function draw() {
  background(0);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2&&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="green"
    fixedrect.shapeColor="red" 
  }
else{
  movingrect.shapeColor="blue"
fixedrect.shapeColor="yellow"
}


  drawSprites();
}