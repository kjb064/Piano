import { Key } from './Key.js';

export class Piano {
    constructor() {
        this.el = /** @type {HTMLDivElement} */ document.createElement('div');
        this.el.classList.add('piano');

        this.allKeys = [];
        this.buildKeys();
    }

    /**
     * Creates the white and black piano keys.
     * 
     * @private
     */
    buildKeys() {
	    let keysContainer = /** @type {HTMLDivElement} */ document.createElement('div');
	    keysContainer.classList.add('keysContainer');
	    this.el.appendChild(keysContainer);

	    // Create white keys.
	    let whiteKeysContainer = /** @type {HTMLDivElement} */ document.createElement('div');
        whiteKeysContainer.classList.add('whiteKeysContainer');
        keysContainer.appendChild(whiteKeysContainer);

        const c4Key = new Key(true, 'C4.mp3');
        this.allKeys.push(c4Key);
        whiteKeysContainer.appendChild(c4Key.el);

        const d4Key = new Key(true, 'D4.mp3');
        this.allKeys.push(d4Key);
        whiteKeysContainer.appendChild(d4Key.el);

        const e4Key = new Key(true, 'E4.mp3');
        this.allKeys.push(e4Key);
        whiteKeysContainer.appendChild(e4Key.el);

        const f4Key = new Key(true, 'F4.mp3');
        this.allKeys.push(f4Key);
        whiteKeysContainer.appendChild(f4Key.el);

        const g4Key = new Key(true, 'G4.mp3');
        this.allKeys.push(g4Key);
        whiteKeysContainer.appendChild(g4Key.el);

        const a4Key = new Key(true, 'A4.mp3');
        this.allKeys.push(a4Key);
        whiteKeysContainer.appendChild(a4Key.el);

        const b4Key = new Key(true, 'B4.mp3');
        this.allKeys.push(b4Key);
        whiteKeysContainer.appendChild(b4Key.el);

        const c5Key = new Key(true, 'C5.mp3');
        this.allKeys.push(c5Key);
        whiteKeysContainer.appendChild(c5Key.el);

        const d5Key = new Key(true, 'D5.mp3');
        this.allKeys.push(d5Key);
        whiteKeysContainer.appendChild(d5Key.el);

        const e5Key = new Key(true, 'E5.mp3');
        this.allKeys.push(e5Key);
        whiteKeysContainer.appendChild(e5Key.el);

        // Create black keys.
        let blackKeysContainer = /** @type {HTMLDivElement} */ document.createElement('div');
        blackKeysContainer.classList.add('blackKeysContainer');
        keysContainer.appendChild(blackKeysContainer);

        const db4Key = new Key(false, 'Db4.mp3');
        this.allKeys.push(db4Key);
        blackKeysContainer.appendChild(db4Key.el);

        const eb4Key = new Key(false, 'Eb4.mp3');
        this.allKeys.push(eb4Key);
        blackKeysContainer.appendChild(eb4Key.el);

        const gb4Key = new Key(false, 'Gb4.mp3');
        gb4Key.el.classList.add('Gb4');
        this.allKeys.push(gb4Key);
        blackKeysContainer.appendChild(gb4Key.el);
        
        const ab4Key = new Key(false, 'Ab4.mp3');
        this.allKeys.push(ab4Key);
        blackKeysContainer.appendChild(ab4Key.el);

        const bb4Key = new Key(false, 'Bb4.mp3');
        this.allKeys.push(bb4Key);
        blackKeysContainer.appendChild(bb4Key.el);

        const db5Key = new Key(false, 'Db5.mp3');
        db5Key.el.classList.add('Db5');
        this.allKeys.push(db5Key);
        blackKeysContainer.appendChild(db5Key.el);

        const eb5Key = new Key(false, 'Eb5.mp3');
        this.allKeys.push(eb5Key);
        blackKeysContainer.appendChild(eb5Key.el);
    }

    toggleTextOnKeys() {
        this.allKeys.forEach((key) =>{
            key.toggleKeyText();
        });
    }
}