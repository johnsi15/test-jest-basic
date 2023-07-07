const Person = require('../src/person')

describe('Test for Person', () => {
  let person
  beforeEach(() => {
    person = new Person('John Doe', 30, 1.72)
  })

  test('should return imc down', () => {
    person.weight = 45
    const imc = person.calcIMC()
    expect(imc).toBe('down')
  })

  test('should return imc normal', () => {
    person.weight = 60
    const imc = person.calcIMC()
    expect(imc).toBe('normal')
  })

  test('should create a new Person instance with valid name, weight and height', () => {
    person.name = 'John'
    person.weight = 70
    person.height = 1.8

    expect(person.name).toBe('John')
    expect(person.weight).toBe(70)
    expect(person.height).toBe(1.8)
  })

  test('should return imc no found with negative weight', () => {
    person.weight = -60
    const imc = person.calcIMC()
    expect(imc).toBe('not found')
  })

  test('should return imc no found with weight and height zero values', () => {
    person.weight = 0
    person.height = 0
    const imc = person.calcIMC()
    expect(imc).toBe('not found')
  })

  test('should return imc no found with weight and height infinity values', () => {
    person.weight = Infinity
    person.height = Infinity
    const imc = person.calcIMC()
    expect(imc).toBe('not found')
  })
})
