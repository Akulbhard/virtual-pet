//Create variables here
var dog,happydog,foodS,foodstock,database;
var Img,Img1;

function preload()
{
  //load images here
  img = loadImage("images/dogImg.png");
  img1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250, 250, 100,100);
	dog.addImage("Img",img);
  dog.scale = 0.25;
  database = firebase.database();
  var foodstock = database.ref("food");
  foodstock.on("value",readStock,error);
  
}


function draw() { 
  background(49,139,87);
  textSize(20); 
  fill("white");
  text("Note: press UP_ARROW to feed Drago milk",60,100);
  

  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    dog.addImage("Img",img1);

  }

}


function readStock(data){
  foodS = data.val();

}



function writeStock(x){
  database.ref("food").update({
  food:x
  })
}


