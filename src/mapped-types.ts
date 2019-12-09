const DOG = 'dog'
const CAT = 'cat'
const BIRD = 'bird'

const walkers = [DOG, CAT] as const
const flyers = [BIRD] as const
const animals = [...walkers, ...flyers]

// 'dog' | 'cat' | 'bird
type Animal = typeof animals[number]
// 'dog' | 'cat'
type Walkers = typeof walkers[number]
// 'bird'
type Flyers = typeof flyers[number]

type Walker = {
  walk(meters: number): boolean
}

type Flyer = {
  fly(meters: number, height: number): boolean
}

// { dog: Walker, cat: Walker } & { bird: Flyer }
type AnimalsMap = {
  [K in Walkers]: Walker
} &
  {
    [K in Flyers]: Flyer
  }

type Forrest = {
  dog: () => Walker
  cat: () => Walker
  bird: () => Flyer
  tree: string
}

// { dog: Walker, cat: Walker, bird: Flyer, tree: never }
type ForrestMap = {
  [K in keyof Forrest]: Forrest[K] extends (...args: any) => any
    ? ReturnType<Forrest[K]>
    : never
}

type Owner<T extends Animal> = {
  ownerName: string
  pet: { type: T; instance: AnimalsMap[T] }
}

let dogOwner: Owner<typeof DOG>
// 'dog'
// dogOwner.pet.type

// Walker
// dogOwner.pet.instance
