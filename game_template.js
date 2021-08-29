
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



let player1= new Capsule(80,270,150,270,25,10);
player1.maxSpeed = 4;
let player1= new Capsule(560,270,490,270,25,10);
player2.maxSpeed = 4;

let football = new Ball(320, 270 , 15 ,6);

player1.score= 0;
player2.score=0;

buildStadium();

function gameLogic(){
}

userInput(player1);
requestAnimationFrame(mainLoop);

function buildStadium(){

    new Wall(60,80,580,80);
    new Wall(60,460,580,460);

    new Wall(60,80,60,180);
    new Wall(60,460,60,360);
    new Wall(580,80,580,180);
    new Wall(580,460,580,360);

    new Wall(50,360,10,360);
    new Wall(0,360,0,180);
    new Wall(10,180,50,180);
    new Wall(590,360,630,360);
    new Wall(640,360,640,180);
    new Wall(630,180,590,180);

}