// Import p5.collide2d
p5packages.loadCollide2d();
/*
Ai-Lin Nguyen
Pd D
1/6/26
Final_Project
*/

let grass,flower,chicken,goose,coolDoge,rainbow, dandelion, panda, bamboo, bear, lightning; //animal prizes/decor
let x=300
let y=300
var hit=false
var q=0
var collide=true
var i;
var z;

let hatched=false;
let a;

let restartButton; //reroll egg (reload page)

let r,b,g;
let speed=5


function preload(){
grass = loadImage ('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767704783/o5r7n5sxkeo6vzeb6tbe.png');
flower = loadImage ('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767705956/efata3ctq0dkhjksvlwa.png');
chicken = loadImage ('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767708934/jqhbq0gbfjvx3oqsojng.png');
goose = loadImage ('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767711710/uzub4rv5gpn0mwln58sz.png');
coolDoge = loadImage ('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767714276/chl9wmwcqbqv6wom2ste.png');
rainbow=loadImage('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767717303/fibwuumrnbjejmluas96.gif');
dandelion=loadImage('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767801337/frykmoz7f195zhclz4so.png');
panda=loadImage('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767822541/amuclozblvetswffslsf.gif');
bamboo=loadImage('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767823825/svytsjikpswgnu2tiee2.png');
bear=loadImage('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767895723/fvongm4040kkp31izjml.gif');
lightning=loadImage('https://res.cloudinary.com/dhnukgvfa/image/upload/v1767896172/hn3in1utl4zclnx0oqyh.gif');


}


function setup() {
createCanvas(600, 600);
background(255, 255, 255);
image(grass, 1,1,600,600); //grass background
i=int(random(100,500)); //randomized first food position
z=int(random(100,500));

//stop;

restartButton=createButton('Reroll');
restartButton.position(950,135); 
restartButton.size(80,40);
restartButton.style('font-size', '16.7px');
restartButton.style('background-color','#ff7f91');
restartButton.style('font-family', 'Comic Sans MS');
restartButton.mousePressed(()=>location.reload()); //reloads page to reroll egg hatching
}

function draw(){

image(grass, 1,1,600,600);                  //grass background
image(flower, 540,20,50,50);                //flower                 //SCENERY
image(flower, 130,532,50,50);               //flower #2

//________________________________________________________________________________________________
 
textSize(27);
textStyle(BOLD);
strokeWeight(2);
stroke(200,157,124);
fill(239,235,211);
ellipse(x,y,50,70);                 //egg

if(keyIsDown(RIGHT_ARROW)){
   x+=speed;
} if(keyIsDown(LEFT_ARROW)){
   x-=speed;
}if(keyIsDown(UP_ARROW)){
   y-=speed;
}if(keyIsDown(DOWN_ARROW)){
   y+=speed;
}

if(x<25){
    x=x+speed;
}if (x>575){
    x=x-speed
}if(y<30){                               //HIT NO WALLS
    y=y+speed;
}if(y>570){
    y=y-speed;
}

strokeWeight(4);
    fill(255,245,67);
    stroke(150,100,70);
    text("Eat more food!", 35,40);
    textSize(20);
    strokeWeight(2);
    fill(239,235,211);
      text("(Use the arrow keys to eat seeds and hatch the egg)" ,30,68);
          textStyle(BOLDITALIC);                                           
          fill(255);  
          strokeWeight(3);                                                           //directions
      text("Get 5 points to hatch! Try to get the SECRET 0.67%!",30,93);
          strokeWeight(2);                                                           


//________________________________________________________________________________________________
fill(255,245,67);
circle(i, z, 25); //FOOOOOD

 hit=collideCircleCircle(i,z,100,x,y,40); //egg collects food

    if(hit && collide) {
        q++
        collide=false
        i=int(random(200,500));
        z=int(random(200,500));
    }else if (hit == false)
    {collide=true
    }
    
textSize(40);
strokeWeight(4);
text(q,50,140);
//________________________________________________________________________________________________
//ANIMAL HATCHER PLAYER

if (q>=5 && hatched == false){                             //AMOUNT OF COINS TO HATCH
    a=int(random(1,153)); //generate 1-153
    hatched=true;
}
if (hatched){
    imageMode (CENTER);
/*50%*/   
 if (a<=75){

 background(173,216,230);
image(chicken,x,y,100,100);         //chicken (COMMON)
fill(255);
textSize(25);
    text("You hatched a COMMON chicken! (50%)",60,75); 

//________________________________________________________________________________________________

 /*30%*/ 
   }else if (a<=120){

    background(255,182,193);
image(goose,x,y,100,100);          //goose (RARE)
fill(255);
textSize(25);
    text("You hatched a RARE goose! (30%)",90,75); 
//________________________________________________________________________________________________

    }
 /*13.33%*/ 
    else if (a<=141){
      background(255,215,0);
     image(coolDoge,x,y,120,120);    //coolDoge (ULTRA RARE)
     fill(255);
textSize(25);
          text("You hatched an ULTRA RARE cool Doge! (14%)",25,75); 
    }
//________________________________________________________________________________________________

/*5%*/ 
  else if (a<=150){

 background(255);

 for (let s=0; s<8;s++){
    noStroke();                                     //glitter/sparkle
  fill(255,215,0,200);
    circle(random(width),random(height),random(3,7));

        image(rainbow,x,y,100,100);     //rainbow (LEGENDARY!!)
        frameRate(20);
        r=random(67,255);
        g=random(67,255);
        b=random(67,255);
        fill(r,g,b);
        noStroke();
        ellipse (170,550,50,50); //1
        ellipse (500,300,30,30); //2
        ellipse (250,120,40,40); //3
        ellipse (520,500,30,30); //4    //rainbow disco party
        r=random(1,255);
        g=random(1,255);
        b=random(1,255);
        fill(r,g,b);
        ellipse (67,367,40,40);  //5
        ellipse (100,167,20,20); //6
        ellipse (400,536,50,50); //7
        ellipse (450,135,20,20); //8

        

//________________________________________________________________________________________________
 //background(255,255,255);
      
       // fill(255);
        r=random(1,255);
        g=random(1,255);
        b=random(1,255);
        fill(r,g,b);
    textStyle(BOLDITALIC);
textSize(24);
         text("You hatched a LEGENDARY rainbow corgi! (5%)",30,67); 

    }}
//________________________________________________________________________________________________

/*1%*/ 
    else if (a<=151){

let pulse=sin(frameCount*0.0767)*30;      //cool pulsing/glowing background
background(
    140-pulse, 180-pulse, 90-pulse);

for (let s=0; s<8;s++){
    noStroke();                                     //glitter/sparkle
  fill(255,215,0,200);
    circle(random(width),random(height),random(3,7));
}
 r=random(1,255);
        g=random(1,255);
        b=random(1,255);
        fill(r,g,b);                                    //rainbow sparkle
  fill(r,g,b,200);
    circle(random(width),random(height),random(3,7));

image(panda,x,y,600,600);         //very very big                       //GIANT (mythical!!!)
image(bamboo,30,400,500,500);                                         
image(bamboo,67,500,267,267);          
image(bamboo,590,350,600,600);                                     


 fill(255);
stroke(0);
textSize(25);
          text("You hatched a MYTHICAL giant panda",80,75);
          text("and friend! (1%)",215,105);
    }
//________________________________________________________________________________________________

/*0.67%*/                  
    else{
background(0);                      //smoky black secret animal
image(lightning,1,1,1200,1200);

for (let s=0; s<8;s++){
 /*1*/   noStroke();                                    
  fill(167,8,31);
    circle(random(width),random(height),random(3,7));
          /*another red one*/                                        //red and white crazy sparkle lights
 /*1.5*/   noStroke();                                    
  fill(167,8,31);
    circle(random(width),random(height),random(3,7));
 /*2*/    noStroke();   
  fill(230,255,255,167);
    circle(random(width),random(height),random(3,7));
    for (let s=0; s<8;s++){
/*3*/     noStroke(); 
    r=random(1,255);
        g=random(1,255);
        b=random(1,255);
        fill(r,g,b);                                    //glitter/sparkle
  fill(r,g,b,200);
    circle(random(width),random(height),random(3,7));
}
}

frameRate(20);
        r=random(0,167);
        fill(r,0,0);
        noStroke();
        ellipse (170,550,25,25); //1
        ellipse (250,120,35,35); //2
        ellipse (520,500,30,30); //3          //red disco party

        r=random(1,255);
        g=random(1,255);
        b=random(1,255);
        fill(r,g,b);
        ellipse (67,390,35,35);  //4
        ellipse (500,300,15,15); //5
        ellipse (100,167,20,20); //6         //rainbow disco party
        ellipse (370,536,37,37); //7
        ellipse (450,135,15,15); //8

image(bear,x,y,240,180);         //BEAR (SECRET ???)
fill(170,6,7);
stroke(0);
textSize(25);
          text("You hatched a",185,80);
          text("lightning bear! (0.67%)",167,115);
           r=random(1,255);
        g=random(1,255);
        b=random(1,255);
        fill(r,g,b);
        textSize(40);
         text("???",105,81);
         textSize(26);
         text ("SECRET",365,80);

    }
    
}}


//________________________________________________________________________________________________

//reroll egg
function resetGame(){
    x=300;
    y=300;
    q=0;
    hatched=false;
    a=0;
    i=int(random(200,500));
   z=int(random(200,500));
   collide=true;

} 