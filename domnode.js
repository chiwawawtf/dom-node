class DomNode {

    constructor(nodeType) {
        return this.create(nodeType);
    }

    create(nodeType) {
       this.node = document.createElement(nodeType);
    }

    get() {
        return this.node;
    }

    display(parentNode) {
        parentNode.append(this.get());
    }

    empty(node) {
       if (node == null) {
           node = this.get();
       }

       node.childNodes.forEach(function(childNode) {
           this.empty(childNode);
       });
    }

    destroy() {
        this.node.remove();
    }

}

class Clock extends DomNode {

    constructor() {
        super('div');

        this.digits = [];
        this.digits.push(new ClockDigit());
        this.digits.push(new ClockDigit());
        this.digits.push(new ClockDigit());
        this.digits.push(new ClockDigit());
        this.digits.push(new ClockDigit());
        this.digits.push(new ClockDigit());

        const clockNode = this.get();
        this.digits.forEach(function(digit) {
            digit.display(clockNode);
        });
    }

}

class ClockDigit extends DomNode {

    constructor() {
        super('img');

        const clockDigitNode = this.get();
        clockDigitNode.setAttribute('width', 32);
        clockDigitNode.setAttribute('height', 64);
        clockDigitNode.setAttribute('src', 'https://placehold.co/32x64');
        clockDigitNode.setAttribute('style', 'border: 1px solid black');
    }

}
