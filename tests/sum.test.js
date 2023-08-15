const sum = require('../src/sum')

/**
  beforeAll(): se ejecuta antes de todas las pruebas.
  beforeEach(): se ejecuta antes de cada prueba.
  afterEach(): se ejecuta después de cada prueba.
  afterAll(): se ejecuta después de todas las pruebas
  Nota: Todas estas funciones se ejecutan dentro del alcance del scope.
*/

describe('sum', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })

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
    expect(undefined).toBeDefined() // the value is defined
    expect(undefined).toBeUndefined()
    expect(null).not.toBeUndefined() // not is undefined
  })

  test('should be string', () => {
    expect('John').toMatch(/hn/)
  })

  test('should be array', () => {
    const data = [1, 2, 3]
    expect(data).toHaveLength(3)
    expect(data).toContain(2)
    // expect(typeof data).toBe('array')
    expect(Array.isArray(data)).toBe(true)
  })
})

describe('type check', () => {
  test('should be type string', () => {
    expect(typeof '').toBe('string')
  })

  test('should be type number', () => {
    expect(typeof 10).toBe('number')
  })

  test('should be type boolean', () => {
    expect(typeof true).toBe('boolean')
  })

  test('should be type undefined', () => {
    expect(typeof undefined).toBe('undefined')
  })

  test('should be type object', () => {
    expect(typeof { foo: 'bar' }).toBe('object')
  })

  test('should be type function', () => {
    expect(typeof function () {}).toBe('function')
  })

  test('should be type null', () => {
    expect(typeof null).toBe('object')
  })

  expect(Array.isArray(['value'])).toBe(true)
  // string
  expect(typeof 'value').toBe('string')
  // object
  expect({ value: 'value' }).toBeTruthy()
  expect(typeof { value: 'value' }).toBe('object')
})
