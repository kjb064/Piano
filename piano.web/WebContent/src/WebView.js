import { Piano } from './Piano.js';

function buildPiano() {
	const piano = new Piano();
	document.body.appendChild(piano.el);

	const checkBoxLabel = /** @type {HTMLLabelElement} */ document.createElement('label');
	checkBoxLabel.classList.add('labeled-checkbox');

	const checkBox = /** @type {HTMLInputElement} */ document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.addEventListener('change', piano.toggleTextOnKeys.bind(piano));
	checkBoxLabel.appendChild(checkBox);

	const labelText = document.createTextNode('Toggle Key Labels');
	checkBoxLabel.appendChild(labelText);

	document.body.appendChild(checkBoxLabel);

	console.log('done!');
}

window.addEventListener('load', (event) => {
	buildPiano();
});