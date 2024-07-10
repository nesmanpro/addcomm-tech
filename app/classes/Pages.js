import TextReveal from '../animations/TextReveal';
import Button from '../animations/Button';

export default class Pages {

    constructor() {
        this._createTextReveal();
        this._createButtons();
    }

    _createButtons() {
        const buttons = [...document.querySelectorAll('[data-animation="button"]')];

        buttons.forEach((button) => {
            new Button({
                element: button
            })
        })
    }


    _createTextReveal() {
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')];

        textItems.forEach((text) => {
            new TextReveal({
                element: text,
            });
        })
    }


}

