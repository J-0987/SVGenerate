class Svg {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shapeEl}    
            ${this.textEl}
        </svg>`
    }
    // set the text color and text
    setTextEl(text, color) {
        this.textEl = `<text x="150" y="116" font-size="20" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render();
    }
}

module.exports = Svg;