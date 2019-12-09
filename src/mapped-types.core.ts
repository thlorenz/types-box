export type Band = {
  drums: string
  readonly guitar: string
  bass: string
  vocals?: string
}

// drums?: string; readonly guitar?: string; bass?: string; vocals?: string
export type BandAfterFiveYears = Partial<Band>

// drums: string; readonly guitar: string; bass: string; vocals: string
export type BandForImportantGig = Required<Band>

// readonly drums: string; readonly guitar: string; readonly bass: string; readonly vocals?: string
export type StickyBand = Readonly<Band>

// Band & { piano: string }
export type FullBand = NonNullable<Band & { piano: string | null }>

// 'drums' | 'guitar' | 'bass'
export type InstrumentalBandMembers = Exclude<keyof Band, 'vocals'>

// drums: string; readonly guitar: string; bass: string
export type InstrumentalBand = Omit<Band, 'vocals'>

// 'vocals' | 'guitar'
export type DuoMembers = Extract<keyof Band, 'vocals' | 'organ' | 'guitar'>

//
// Some related non-core types
//

export type Include<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>

// vocals: string; readonly guitar: string
export type Duo = Include<Band, 'vocals' | 'organ' | 'guitar'>

export type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] }
export type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] }

// drums: string; guitar: string; bass: string; vocals: string
export type FlexiblePros = MutableRequired<Band>

// readonly drums?: string; readonly guitar?: string; readonly bass?: string; readonly vocals?: string
export type StickyParty = ReadonlyPartial<Band>
