var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('bullet', 'bullet.png');

}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    var s = game.add.sprite(80, 0, 'bullet'); 
    s.rotation = 0.14;

    var s2 = game.add.sprite(0, 0, 'bullet'); 
    var s3 = game.add.sprite(780, 570, 'bullet'); 
    var s4 = game.add.sprite(800, 600, 'bullet'); 
    s4.anchor.x = 0.5;
    s4.anchor.y = 0.5;


    // 일반적
    function MyObject(){
        var name = "var name";
        this.name = "this name"; 
    };

    var ins = new MyObject();
    console.log(ins.name);

    var Animal = function(sex, name){
        if (arguments.length == 1){
            this.sex = sex;
        }
    };

    var Cat = function(name){
        this.name = name;
    };
    Cat.prototype = new Animal();

    var Dog = function(name){
        this.name = name;
    };
    Dog.prototype = new Animal();

    var danbi = new Cat("단비");
    var sundol = new Dog("순돌");

    console.log(danbi.name);
    console.log(sundol.name); 
}
