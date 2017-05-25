function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function Scene(){
    var self = this;
    this.create = function(){
    };
    this.elapsedTime = 0;
    this.lastCreatedTime = 0;
    this.update = function(){
        self.elapsedTime += this.game.time.desiredFpsMult;
        if (self.elapsedTime - self.lastCreatedTime > 1){
            var b = new Bullet(this.game);
            this.game.add.existing(b);
            self.lastCreatedTime = self.elapsedTime; 
        } 
    };
    this.preload = function(){
        this.game.load.image('bullet', 'bullet.png'); 
    }
}

var scene = new Scene();
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: scene.preload, create: scene.create, update:scene.update });
// function invertY(y) {  return game.world.height - y;}

function Bullet(game){
    Phaser.Sprite.call(this, game, 0, 0, 'bullet');
    this.velocity = randomRange(80, 160);

    var randomAngle = randomRange(0, 3.14*2);
    this.position.x = 400 + Math.cos(randomAngle) * 400;
    this.position.y = 300 + Math.sin(randomAngle) * 400;
    this.theta = 3.14 + randomAngle;

    this.update = function(){
        this.position.x += Math.cos(this.theta) * this.velocity * this.game.time.desiredFpsMult;
        this.position.y += Math.sin(this.theta) * this.velocity * this.game.time.desiredFpsMult;
    }
}

Bullet.prototype = Phaser.Sprite.prototype;
