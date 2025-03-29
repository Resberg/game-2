class KeyboardControls {
    constructor() {
        this.keys = {
            W: false,
            A: false,
            S: false,
            D: false
        };
    }

    init() {
        window.addEventListener('keydown', (event) => {
            if (event.key in this.keys) {
                this.keys[event.key] = true;
            }
        });

        window.addEventListener('keyup', (event) => {
            if (event.key in this.keys) {
                this.keys[event.key] = false;
            }
        });
    }

    update() {
        const movement = {
            forward: this.keys.W,
            left: this.keys.A,
            backward: this.keys.S,
            right: this.keys.D
        };
        return movement;
    }
}

export default KeyboardControls;