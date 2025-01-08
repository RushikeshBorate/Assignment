var config = {
    type: Phaser.AUTO,
    width: 1400, 
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var balloon;
var pumpButton;
var isInflating = false;
var balloonScale = 1;
var isFlying = false;

function preload() {
    this.load.image('ballons', 'ballons.png');
    this.load.image('Symbol_3_copy', 'src/Graphics/Symbol_3_copy.png');
    this.load.image('Symbol 27', 'src/Graphics/Symbol 27.png');
    this.load.image('Symbol 28', 'src/Graphics/Symbol 28.png');
    this.load.image('Symbol 10001', 'src/Graphics/Symbol 10001.png');
    this.load.image('Symbol 10002', 'src/Graphics/Symbol 10002.png');
    this.load.image('Symbol 10003', 'src/Graphics/Symbol 10003.png');
    this.load.image('Symbol 10004', 'src/Graphics/Symbol 10004.png');
    this.load.image('Symbol 10005', 'src/Graphics/Symbol 10005.png');
    this.load.image('Symbol 10006', 'src/Graphics/Symbol 10006.png');
    this.load.image('Symbol 10007', 'src/Graphics/Symbol 10007.png');
    this.load.image('Symbol 10008', 'src/Graphics/Symbol 10008.png');
    this.load.image('Symbol 10009', 'src/Graphics/Symbol 10009.png');
    this.load.image('Symbol 10010', 'src/Graphics/Symbol 10010.png');
    this.load.image('Symbol 10011', 'src/Graphics/Symbol 10011.png');
    this.load.image('Symbol 10012', 'src/Graphics/Symbol 10012.png');
    this.load.image('Symbol 10013', 'src/Graphics/Symbol 10013.png');
    this.load.image('Symbol 10014', 'src/Graphics/Symbol 10014.png');
    this.load.image('Symbol 10015', 'src/Graphics/Symbol 10015.png');
    this.load.image('Symbol 10016', 'src/Graphics/Symbol 10016.png');
    this.load.image('Symbol 10017', 'src/Graphics/Symbol 10017.png');
    this.load.image('Symbol 10018', 'src/Graphics/Symbol 10018.png');
    this.load.image('Symbol 10019', 'src/Graphics/Symbol 10019.png');
    this.load.image('Symbol 10020', 'src/Graphics/Symbol 10020.png');
    this.load.image('Symbol 10021', 'src/Graphics/Symbol 10021.png');
    this.load.image('Symbol 10022', 'src/Graphics/Symbol 10022.png');
    this.load.image('Symbol 10023', 'src/Graphics/Symbol 10023.png');
    this.load.image('Symbol 10024', 'src/Graphics/Symbol 10024.png');
    this.load.image('Symbol 10025', 'src/Graphics/Symbol 10025.png');
    this.load.image('Symbol 10026', 'src/Graphics/Symbol 10026.png');
    this.load.image('Symbol 100001', 'src/Graphics/Symbol 100001.png');
    this.load.image('Symbol 100002', 'src/Graphics/Symbol 100002.png');
    this.load.image('Symbol 100003', 'src/Graphics/Symbol 100003.png');
    this.load.image('Symbol 100004', 'src/Graphics/Symbol 100004.png');
    this.load.image('Symbol 100005', 'src/Graphics/Symbol 100005.png');
    this.load.image('Symbol 100006', 'src/Graphics/Symbol 100006.png');
    this.load.image('Symbol 100007', 'src/Graphics/Symbol 100007.png');
    this.load.image('Symbol 100008', 'src/Graphics/Symbol 100008.png');
    this.load.image('Symbol 100009', 'src/Graphics/Symbol 100009.png');
    this.load.image('Symbol 100010', 'src/Graphics/Symbol 100010.png');
    this.load.image('Symbol 100011', 'src/Graphics/Symbol 100011.png');
    this.load.image('Symbol 320001', 'src/Graphics/Symbol 320001.png');
    this.load.image('Symbol 320002', 'src/Graphics/Symbol 320002.png');
    this.load.image('Symbol 320003', 'src/Graphics/Symbol 320003.png');
}

function create() {
    this.add.image(700, 450, 'Symbol_3_copy').setDisplaySize(1400, 900);

    this.add.image(1150, 750, 'Symbol 28').setScale(0.5);

    platforms = this.physics.add.staticGroup();
}

function update() {

}
