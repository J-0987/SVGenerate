const Shape = require('./shapes');


// constructor function for Square
class Square extends Shape {
    render() {
        return `<rect x="110" y="90" width="200" height="200" fill="${this.color}" />`
    }
}

module.exports = Square;