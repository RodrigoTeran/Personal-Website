import { ADD_REF } from './actions'
import { IMapRef, REF_REDUCER_ACTION } from './refs.types'

export function refsReducer(
  state: IMapRef,
  action: REF_REDUCER_ACTION
): IMapRef {
  switch (action.type) {
    case ADD_REF: {
      state.set(action.payload.key, action.payload.ref)
      return state
    }
    default: {
      console.error('Unknown ref-reducer-type')
      return state
    }
  }
}

export const initialRefs: IMapRef = new Map()
