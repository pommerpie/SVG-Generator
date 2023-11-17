const { Triangle, Circle, Square } = require('./shapes')

describe('Triangle', () => {
    it('Render a blue triangle SVG file with pink text that reads "yay."', () => {
        const newTriangle = new Triangle('yay', 'pink', 'blue')
        const testSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,90 10,90" fill="blue" />
            <text x="17%" y="30%" dominant-baseline="middle" text-anchor="middle" fill="pink" font-size="16">
              yay
            </text>
          </svg>`
        expect(newTriangle.render()).toEqual(testSvg)
    })
})
describe('Circle', () => {
    it('Render a blue circle SVG file with pink text that reads "yay."', () => {
        const newCircle = new Circle('yay', 'pink', 'blue')
        const testSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="blue" />
            <text x="17%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="pink" font-size="16">
              yay
            </text>
          </svg>`
        expect(newCircle.render()).toEqual(testSvg)
    })
})
describe('Square', () => {
    it('Render a blue square SVG file with pink text that reads "yay."', () => {
        const newSquare = new Square('yay', 'pink', 'blue')
        const testSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" x="10" y="10" fill="blue" />
            <text x="17%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="pink" font-size="16">
              yay
            </text>
          </svg>`
        expect(newSquare.render()).toEqual(testSvg)
    })
})