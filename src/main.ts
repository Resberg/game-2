// This file is the entry point of the game. It initializes the game engine, sets up the main scene, and starts the game loop.

import { MainScene } from './scenes/mainScene';

class Game {
    private scene: MainScene;

    constructor() {
        this.scene = new MainScene();
    }

    public init(): void {
        this.scene.preload();
        this.scene.create();
        this.gameLoop();
    }

    private gameLoop(): void {
        requestAnimationFrame(() => {
            this.scene.update();
            this.gameLoop();
        });
    }
}

const game = new Game();
game.init();