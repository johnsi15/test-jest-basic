const sum = require('../src/sum')

describe('sum', () => {
  test('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })
})

describe('testing data JS', () => {
  test('should return name John', () => {
    const data = { name: 'John' }

    expect(data.name).toBe('John')
  })

  test('should return object', () => {
    const data = { name: 'John' }
    expect(data).toEqual({ name: 'John' })
  })

  test('should booleans', () => {
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()

    expect(0).toBeFalsy()
    expect('').toBeFalsy()
  })

  test('should null or undefined', () => {
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
  })

  test('should be string', () => {
    expect('John').toMatch(/hn/)
  })

  test('should be array', () => {
    const data = [1, 2, 3]
    expect(data).toHaveLength(3)
    expect(data).toContain(2)
  })
})
