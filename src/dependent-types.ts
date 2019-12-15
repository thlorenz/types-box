const someObject = {
  foo: 'hello',
  bar: 1,
  nestedObject: {
    nfoo: 'hola',
    nbar: 2,
  },
  nestedArray: [{ foo: 1 }, { foo: 1 }],
}

type MatchingKeysAny<T> = Partial<{ [K in keyof T]: any }>
let match: MatchingKeysAny<typeof someObject> = {}

match = { foo: 'hi', bar: 1 }
match = { foo: 1, bar: 1 }

// Doesn't type check due to mis-spelled foo
// @ts-ignore
match = { fo: 1, bar: 1 }

type MatchingKeys<P> = Partial<
  { [K in keyof P]: P[K] extends object | [] ? MatchingKeys<P[K]> : P[K] }
>

const deepMatch: MatchingKeys<typeof someObject> = {
  // Doesn't type check foo should be number
  // @ts-ignore
  nestedArray: [{ foo: '1' }],

  // Doesn't type check nfoo should be number
  nestedObject: {nbar: 2, nfoo: null}
}
