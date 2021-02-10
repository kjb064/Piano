import { Key } from './Key.js';
import {
    KEY_Q,
    KEY_W,
    KEY_E,
    KEY_R,
    KEY_T,
    KEY_Y,
    KEY_U,
    KEY_I,
    KEY_O,
    KEY_P,
    KEY_2,
    KEY_3,
    KEY_5,
    KEY_6,
    KEY_7,
    KEY_9,
    KEY_0
} from './util/Constants.js';

export class Piano {
    /**
     * Constructs a new Piano.
     */
    constructor() {
        this.el = /** @type {HTMLDivElement} */ document.createElement('div');
        this.el.classList.add('piano');

        this.allKeys = [];
        this.buildKeys();
        this.addKeyDownListener();
        this.addKeyUpListener();
    }

    /**
     * Creates the white and black piano keys.
     * 
     * @private
     */
    buildKeys() {
        // TODO remove key-specific containers to prevent issue of not being able
        // to click a white key in between two black keys.

	    let keysContainer = /** @type {HTMLDivElement} */ document.createElement('div');
	    keysContainer.classList.add('keysContainer');
	    this.el.appendChild(keysContainer);

	    // Create white keys.
	    let whiteKeysContainer = /** @type {HTMLDivElement} */ document.createElement('div');
        whiteKeysContainer.classList.add('whiteKeysContainer');
        keysContainer.appendChild(whiteKeysContainer);

        this.c4Key = new Key(true, 'C4.mp3', 'C');
        this.allKeys.push(this.c4Key);
        whiteKeysContainer.appendChild(this.c4Key.el);

        this.d4Key = new Key(true, 'D4.mp3', 'D');
        this.allKeys.push(this.d4Key);
        whiteKeysContainer.appendChild(this.d4Key.el);

        this.e4Key = new Key(true, 'E4.mp3', 'E');
        this.allKeys.push(this.e4Key);
        whiteKeysContainer.appendChild(this.e4Key.el);

        this.f4Key = new Key(true, 'F4.mp3', 'F');
        this.allKeys.push(this.f4Key);
        whiteKeysContainer.appendChild(this.f4Key.el);

        this.g4Key = new Key(true, 'G4.mp3', 'G');
        this.allKeys.push(this.g4Key);
        whiteKeysContainer.appendChild(this.g4Key.el);

        this.a4Key = new Key(true, 'A4.mp3', 'A');
        this.allKeys.push(this.a4Key);
        whiteKeysContainer.appendChild(this.a4Key.el);

        this.b4Key = new Key(true, 'B4.mp3', 'B');
        this.allKeys.push(this.b4Key);
        whiteKeysContainer.appendChild(this.b4Key.el);

        this.c5Key = new Key(true, 'C5.mp3', 'C');
        this.allKeys.push(this.c5Key);
        whiteKeysContainer.appendChild(this.c5Key.el);

        this.d5Key = new Key(true, 'D5.mp3', 'D');
        this.allKeys.push(this.d5Key);
        whiteKeysContainer.appendChild(this.d5Key.el);

        this.e5Key = new Key(true, 'E5.mp3', 'E');
        this.allKeys.push(this.e5Key);
        whiteKeysContainer.appendChild(this.e5Key.el);

        // Create black keys.
        let blackKeysContainer = /** @type {HTMLDivElement} */ document.createElement('div');
        blackKeysContainer.classList.add('blackKeysContainer');
        keysContainer.appendChild(blackKeysContainer);

        this.db4Key = new Key(false, 'Db4.mp3', 'D♭');
        this.allKeys.push(this.db4Key);
        blackKeysContainer.appendChild(this.db4Key.el);

        this.eb4Key = new Key(false, 'Eb4.mp3', 'E♭');
        this.allKeys.push(this.eb4Key);
        blackKeysContainer.appendChild(this.eb4Key.el);

        this.gb4Key = new Key(false, 'Gb4.mp3', 'G♭');
        this.gb4Key.el.classList.add('Gb4');
        this.allKeys.push(this.gb4Key);
        blackKeysContainer.appendChild(this.gb4Key.el);
        
        this.ab4Key = new Key(false, 'Ab4.mp3', 'A♭');
        this.allKeys.push(this.ab4Key);
        blackKeysContainer.appendChild(this.ab4Key.el);

        this.bb4Key = new Key(false, 'Bb4.mp3', 'B♭');
        this.allKeys.push(this.bb4Key);
        blackKeysContainer.appendChild(this.bb4Key.el);

        this.db5Key = new Key(false, 'Db5.mp3', 'D♭');
        this.db5Key.el.classList.add('Db5');
        this.allKeys.push(this.db5Key);
        blackKeysContainer.appendChild(this.db5Key.el);

        this.eb5Key = new Key(false, 'Eb5.mp3', 'E♭');
        this.allKeys.push(this.eb5Key);
        blackKeysContainer.appendChild(this.eb5Key.el);
    }

    /**
     * Adds the 'keydown' event listener to the document.
     */
    addKeyDownListener() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case KEY_Q:
                    this.c4Key.playNote();
                    this.c4Key.toggleKeyPress();
                    break;
                case KEY_W:
                    this.d4Key.playNote();
                    this.d4Key.toggleKeyPress();
                    break;
                case KEY_E:
                    this.e4Key.playNote();
                    this.e4Key.toggleKeyPress();
                    break;
                case KEY_R:
                    this.f4Key.playNote();
                    this.f4Key.toggleKeyPress();
                    break;
                case KEY_T:
                    this.g4Key.playNote();
                    this.g4Key.toggleKeyPress();
                    break;
                case KEY_Y:
                    this.a4Key.playNote();
                    this.a4Key.toggleKeyPress();
                    break;
                case KEY_U:
                    this.b4Key.playNote();
                    this.b4Key.toggleKeyPress();
                    break;
                case KEY_I:
                    this.c5Key.playNote();
                    this.c5Key.toggleKeyPress();
                    break;
                case KEY_O:
                    this.d5Key.playNote();
                    this.d5Key.toggleKeyPress();
                    break;
                case KEY_P:
                    this.e5Key.playNote();
                    this.e5Key.toggleKeyPress();
                    break;
                case KEY_2:
                    this.db4Key.playNote();
                    this.db4Key.toggleKeyPress();
                    break;
                case KEY_3:
                    this.eb4Key.playNote();
                    this.eb4Key.toggleKeyPress();
                    break;
                case KEY_5:
                    this.gb4Key.playNote();
                    this.gb4Key.toggleKeyPress();
                    break;
                case KEY_6:
                    this.ab4Key.playNote();
                    this.ab4Key.toggleKeyPress();
                    break;
                case KEY_7:
                    this.bb4Key.playNote();
                    this.bb4Key.toggleKeyPress();
                    break;
                case KEY_9:
                    this.db5Key.playNote();
                    this.db5Key.toggleKeyPress();
                    break;
                case KEY_0:
                    this.eb5Key.playNote();
                    this.eb5Key.toggleKeyPress();
                    break;
            }
        });
    }

    /**
     * Adds the 'keyup' event listener to the document.
     */
    addKeyUpListener() {
        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case KEY_Q:
                    this.c4Key.toggleKeyPress();
                    break;
                case KEY_W:
                    this.d4Key.toggleKeyPress();
                    break;
                case KEY_E:
                    this.e4Key.toggleKeyPress();
                    break;
                case KEY_R:
                    this.f4Key.toggleKeyPress();
                    break;
                case KEY_T:
                    this.g4Key.toggleKeyPress();
                    break;
                case KEY_Y:
                    this.a4Key.toggleKeyPress();
                    break;
                case KEY_U:
                    this.b4Key.toggleKeyPress();
                    break;
                case KEY_I:
                    this.c5Key.toggleKeyPress();
                    break;
                case KEY_O:
                    this.d5Key.toggleKeyPress();
                    break;
                case KEY_P:
                    this.e5Key.toggleKeyPress();
                    break;
                case KEY_2:
                    this.db4Key.toggleKeyPress();
                    break;
                case KEY_3:
                    this.eb4Key.toggleKeyPress();
                    break;
                case KEY_5:
                    this.gb4Key.toggleKeyPress();
                    break;
                case KEY_6:
                    this.ab4Key.toggleKeyPress();
                    break;
                case KEY_7:
                    this.bb4Key.toggleKeyPress();
                    break;
                case KEY_9:
                    this.db5Key.toggleKeyPress();
                    break;
                case KEY_0:
                    this.eb5Key.toggleKeyPress();
                    break;
            }
        });
    }

    /**
     * Toggles the text on all keys.
     */
    toggleTextOnKeys() {
        this.allKeys.forEach((key) =>{
            key.toggleKeyText();
        });
    }
}