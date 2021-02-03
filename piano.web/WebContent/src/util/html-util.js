/**
 * 
 * @param {!String} type 
 * @param {*} attributes 
 * @param  {...any} children 
 */
export function htmlDomElementFactory(type, attributes, ...children) {
    const element = /** @type {HTMLElement} */ document.createElement(type);

    for (const key of Object.keys(attributes)) {
        const attributeValue = attributes[key];

        if (key.startsWith('on') && typeof attributes[key] === 'function') {
            element.addEventListener(key.substring(2), attributeValue);
        } else {
            if (typeof attributeValue === "boolean" && attributeValue) {
                element.setAttribute(key, "");
            } else {
                element.setAttribute(key, attributeValue);
            }
        }
        
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    });
}