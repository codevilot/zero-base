const {getRandom} = require('./getRandom')

test('getRandom(10)의 반환 값은 0보다 크거나 같고, 10보다 작거나 같다.', () =>{
    let result = getRandom(10)
    let value = 10
    expect(result).toBeLessThenOrEqual(value)
    expect(result).toBeLessThenOrEqual(value)
})
