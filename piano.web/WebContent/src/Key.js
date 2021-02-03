export class Key {
    /**
     * Constructs a new Key.
     * 
     * @param {boolean} whiteKey true if the key is white, false if black
     * @param {string} audioFileName name of the mp3 file to play
     * @param {string} keyText text to display on the key
     */
    constructor(whiteKey, audioFileName, keyText) {
        // Create div for key and add appropriate class
        this.el = /** @type {HTMLButtonElement} */ document.createElement('button');
        this.el.classList.add('key');
        const classToAdd = whiteKey ? 'key-white' : 'key-black';
        this.el.classList.add(classToAdd);
        
        // Add text on key
        this.text = document.createTextNode(keyText);
        this.el.appendChild(this.text);

        // TODO figure out how to configure build so don't have to
        // write file path like this
        const filePath = 'src/notes/' + audioFileName;

        /** @type {Audio} */
        this.audio = new Audio(filePath);
        this.el.addEventListener('click', () => {
            const audioClone = /** @type {Audio} */ this.audio.cloneNode();
            audioClone.play();
        });
    }

    /**
     * Toggles showing the text on the key.
     */
    toggleKeyText() {
        // if (!this.text.style.display || this.text.style.display === 'none') {
        //     this.text.style.display = 'inline-block';
        // } else {
        //     this.text.style.display = 'none';
        // }  
    }
    
}