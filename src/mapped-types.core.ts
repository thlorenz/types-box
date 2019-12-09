type Band = {
  drums: string
  readonly guitar: string
  bass: string
  vocals?: string
}

// drums?: string; readonly guitar?: string; bass?: string; vocals?: string
type BandAfterFiveYears = Partial<Band>

// drums: string; readonly guitar: string; bass: string; vocals: string
type BandForImportantGig = Required<Band>

// readonly drums: string; readonly guitar: string; readonly bass: string; readonly vocals?: string
type StickyBand = Readonly<Band>

// Band & { piano: string }
type FullBand = NonNullable<Band & { piano: string | null }>

// 'drums' | 'guitar' | 'bass'
type InstrumentalBandMembers = Exclude<keyof Band, 'vocals'>

// drums: string; readonly guitar: string; bass: string
type InstrumentalBand = Omit<Band, 'vocals'>

// 'vocals' | 'guitar'
type DuoMembers = Extract<keyof Band, 'vocals' | 'organ' | 'guitar'>

//
// Some related non-core types
//

type Include<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>
// vocals: string; readonly guitar: string
type Duo = Include<Band, 'vocals' | 'organ' | 'guitar'>

type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] }
type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] }

// drums: string; guitar: string; bass: string; vocals: string
type FlexiblePros = MutableRequired<Band>

// readonly drums?: string; readonly guitar?: string; readonly bass?: string; readonly vocals?: string
type StickyParty = ReadonlyPartial<Band>
