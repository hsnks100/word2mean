var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update:update });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('bullet', 'bullet.png');

}
var bullet = null;

var lastTime = 0;
function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen

    bullet = game.add.sprite(400, 300, 'bullet'); 
    bullet.anchor.x = 0.5;
    bullet.anchor.y = 0.5; 
    lastTime = this.game.time.totalElapsedSeconds();
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function update(){
    var dt = this.game.time.totalElapsedSeconds() - lastTime;
    // console.log(dt);


    bullet.position.x += getRandomArbitrary(-100, 100) * dt;
    bullet.position.y += getRandomArbitrary(-100, 100) * dt;
    lastTime = this.game.time.totalElapsedSeconds();
    // console.log(this.game.time.elapsed);
    // console.log(dt._deltaTime);

}
