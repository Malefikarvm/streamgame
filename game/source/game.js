class Game extends Phaser.Game {

    constructor () {
        let electron = require('electron');
        let { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

        let config = {
            type: Phaser.AUTO,
            parent: 'game',
            pixelArt: true,
        };
        super({});
        console.log('it works');
    }
}

new Game();
