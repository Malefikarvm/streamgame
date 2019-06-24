class Game extends Phaser.Game {

    constructor () {
        let electron = require('electron');
        let { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

        let config = {
            type: Phaser.AUTO,
            parent: 'game',
            pixelArt: true,
            backgroundColor: '#212121',
            width: width,
            height: height,
            scaleMode: 1,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true,
                    gravity: {
                        y: 0
                    }
                }
            },
            scenes: [

            ]
        };

        super(config);
        console.log('it works');
    }
}

new Game();
