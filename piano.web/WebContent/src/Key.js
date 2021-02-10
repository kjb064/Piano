export class Key {
    /**
     * Constructs a new Key.
     * 
     * @param {boolean} whiteKey true if the key is white, false if black
     * @param {string} audioFileName name of the mp3 file to play
     * @param {string} keyText text to display on the key
     */
    constructor(whiteKey, audioFileName, keyText) {
        // Create button for key and add appropriate class
        this.el = /** @type {HTMLButtonElement} */ document.createElement('button');
        this.el.classList.add('key');

        this.class = whiteKey ? 'key-white' : 'key-black';
        this.el.classList.add(this.class);
                
        // Add text on key
        this.textContainer = /** @type {HTMLDivElement} */ document.createElement('div');
        this.textContainer.classList.add('key-text');
        this.textContainer.classList.add('hide')
        this.textContainer.appendChild(document.createTextNode(keyText));
        this.el.appendChild(this.textContainer);

        // TODO figure if need to configure build differently so don't have to
        // write file path like this
        const filePath = 'src/notes/' + audioFileName;

        /** @type {Audio} */
        this.audio = new Audio(filePath);
        this.el.addEventListener('click', this.playNote.bind(this));
    }

    /**
     * Toggles showing the text on the key.
     */
    toggleKeyText() {
        this.textContainer.classList.toggle('hide');
    }

    /**
     * Plays the note associated with this key.
     */
    playNote() {
        const audioClone = /** @type {Audio} */ this.audio.cloneNode();
        audioClone.play();
    }

    /**
     * Toggles the key-pressed styling for the key.
     */
    toggleKeyPress() {
        const style = this.class + '-pressed';
        this.el.classList.toggle(style);
    }
    
}