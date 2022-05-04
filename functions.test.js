const { returnTwo } = require('./functions')

require('functions.js').config()

    describe('returnTwo'), () => {
    test('returnTwo should equal 2', () => {
        expect(returnTwo).toEqual(2)
    }) 
    }

    describe("greeting"), () => {
    test('greeting should be hello James', () => {
        expect(greeting('James')).toEqual('Hello James')
        expext(greeting('Jill').toEqual('Hello Jill'))
    })
    }

    describe('add'), () => {
    test('test should add 1 + 2 and equal 3', () => {
        expect(add(1, 2).toEqual(3))
        expect(add(5, 9).toEqual(14))
    })
    }
