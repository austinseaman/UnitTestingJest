const { sum, sub } = require('./math.js')


describe("The Sum Function", () => {
    test('adds 1 and 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    
    test('arguments given are numbers', () => {
        expect(sum('h', 3)).toBe('You must provide 2 numerical values')
    })

})
