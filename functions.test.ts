const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
})

test('length is the same after running function', () => {
    let arr = [1, 2, 3, 4, 5]
    let result = shuffleArray(arr)
    expect(arr.length).toBe(result.length)
})

test("all the values aren't changed, just shuffled", () => {
    let arr = [1, 2, 3, 4, 5]
    let result = shuffleArray(arr)
    let values = true

    for(let i = 0; i < result.length; i++) {
        if(arr.includes(result[i]) === false) {
            values = false
            return
        }
    }
    expect(values).toBe(true)
})