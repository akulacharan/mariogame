var mario,mario_running,mario_collided;
var bg,bgImage;

function preload(){
    mario_running = loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
    bgImage = loadImage('images/bgnew.jpg');

}

function setup() {
createCanvas(1000, 600);

bg = createSprite(580,300);
bg.addImage(bgImage);
mario = createSprite(200,500,20,50);
ground = createSprite(200,585,400,10);
mario.addAnimation("running",mario_running);
mario.scale=0.3
bg.scale = 0.5


}

function draw() {
    
    if(keyDown('space')){
        mario.velocityY = -16;
    }
    mario.collide(ground);
    ground.visible = true;

    mario.setCollider('rectangle');

    mario.debug = true;
    ground.debug = true;

    mario.velocityY = mario.velocityY+0.5;



    drawSprites();

}
