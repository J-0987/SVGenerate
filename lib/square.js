const Shape = require('./shapes');


// constructor function for Square
class Square extends Shape {
    render() {
        return `<rect x="180" y="180" width="400" height="400" fill="${this.color}" />`
    }
}

module.exports = Square;