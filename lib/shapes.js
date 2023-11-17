class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}
class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,90 10,90" fill="${this.shapeColor}" />
            <text x="17%" y="30%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="16">
              ${this.text}
            </text>
          </svg>`
    }
}
class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
            <text x="17%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="16">
              ${this.text}
            </text>
          </svg>`
    }
}
class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" x="10" y="10" fill="${this.shapeColor}" />
            <text x="17%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="16">
              ${this.text}
            </text>
          </svg>`
    }
}
module.exports = { Triangle, Circle, Square }