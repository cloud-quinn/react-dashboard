import { combineReducers } from 'redux'
import {
  FILTER_PILOTS,
  PilotFilters
} from './actions'
const { SHOW_ALL } = PilotFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case FILTER_PILOTS:
      return action.filter
    default:
      return state
  }
}

function pilots(state = [], action) {
    default:
      return state
    }
}

const reducers = combineReducers({
  pilotFilter,
  pilots
})

export default reducers
