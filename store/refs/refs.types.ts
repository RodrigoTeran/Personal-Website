import type { MutableRefObject } from 'react'
import { ADD_REF } from './actions'

export type Refs = 'header' | 'about-me' | 'my-career-info'

export type IMapRef = Map<Refs, MutableRefObject<any>>

export type REF_REDUCER_ACTION = {
  type: typeof ADD_REF
  payload: {
    key: Refs
    ref: MutableRefObject<any>
  }
}
