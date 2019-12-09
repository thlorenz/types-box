function addOne<T extends number | string | object>(
  x: T
): T extends number ? number : T extends string ? string : never

function addOne(x: number | string | object) {
  if (typeof x === 'number') {
    return x + 1
  } else if (typeof x === 'string') {
    return x + 'one'
  } else {
    throw new Error('not supported')
  }
}

addOne(2) // => number
addOne('hello') // => string
addOne({}) // => never
