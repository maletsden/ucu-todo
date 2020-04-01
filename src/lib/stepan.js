import StepanError from '/src/lib/StepanError.js';

export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    const newElement = document.createElement(element);

    if (newElement instanceof HTMLUnknownElement) {
      throw new StepanError(`Unknown tagName: "${element}"`);
    }

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {
      if (!(parent instanceof Element)) {
        throw new StepanError(`Given argument "parent" is not a valid DOM object`);
      }

      if (!parent) {
        throw new StepanError(`Given argument "parent" is null or undefined`);
      }

      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}
