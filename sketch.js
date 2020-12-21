var fixedRect, movingRect;

function setup() { 
  createCanvas(1200, 800); 
  fixedRect = createSprite(600, 400, 50, 80); 
  fixedRect.shapeColor = "green";
   fixedRect.debug = true; 
   
   movingRect = createSprite(400, 200, 80, 30);
    movingRect.shapeColor = "green"; 
    movingRect.debug = true; } 
    
    function draw() { 
      background(0, 0, 0);
       movingRect.x = World.mouseX;
        movingRect.y = World.mouseY;
        
        if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
          && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
          && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2
          && movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2) { 
          movingRect.shapeColor = "red"; 
          fixedRect.shapeColor = "red"; } 
          else {
             movingRect.shapeColor = "green";
              fixedRect.shapeColor = "green";
             } 



             drawSprites(); 
            }




































/*var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,400,50,80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(400, 200, 80, 50);
  movingrect.shapeColor = "green";
  movingrect.debug=true;


}

function draw() {
  background(0,0,0);
  movingrect.y=mouseY;
  movingrect.x=mouseX;

  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2){
    movingrect.shapecolor="white";
    fixedrect.shapecolor="white";
  }
  else{
    movingrect.shapecolor="blue";
    fixedrect.shapecolor="blue";
  }


  drawSprites();


}
*/