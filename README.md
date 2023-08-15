# Test

Assertions o afirmaciones, con los cuales se puede verificar el comportamiento del código, algunas de los assertions más comunes de Jest, son:

- expect: es la función principal de Jest y se utiliza para especificar la salida esperada de una función o valor. Por ejemplo: `expect(2 + 2).toBe(4)`.
  
- toBe: compara dos valores usando el operador ===. Por ejemplo: `expect(2 + 2).toBe(4)`.
  
- toEqual: compara dos valores recursivamente para verificar si son iguales. Por ejemplo: `expect({ a: 1 }).toEqual({ a: 1 })`.
  
- toMatch: comprueba si una cadena o expresión regular coincide con una cadena esperada. Por ejemplo: `expect("Hello World").toMatch(/Hello/)`.
  
- toBeNull: comprueba si un valor es null. Por ejemplo: `expect(null).toBeNull()`.

- toBeUndefined: comprueba si un valor es undefined. Por ejemplo: `expect(undefined).toBeUndefined()`.

- toBeDefined: comprueba si un valor no es undefined. Por ejemplo: `expect("Hello").toBeDefined()`.

- toBeTruthy: comprueba si un valor es verdadero. Por ejemplo: `expect("Hello").toBeTruthy()`.

- toBeFalsy: comprueba si un valor es falso. Por ejemplo: `expect("").toBeFalsy()`.

- toThrow: comprueba si una función lanza una excepción. Por ejemplo: `expect(() => { throw new Error(); }).toThrow()`.

## Install types for VScode
`npm i -D @types/jest`