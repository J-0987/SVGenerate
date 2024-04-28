const Shape = require('./shapes');

// constructor function for Triangle
class Triangle extends Shape {
    render() {
        return `<polygon points="150,10 250,150 50,150" fill="${this.color}" stroke="black" stroke-width="3"/>`
    }
}

module.exports = Triangle;