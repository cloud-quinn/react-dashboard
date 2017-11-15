import { combineReducers } from 'redux'
import {
  FILTER_PILOTS,
  PilotFilters
} from '../actions/actions'
const { SHOW_ALL } = PilotFilters

function pilotFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case FILTER_PILOTS:
      return action.filter
    default:
      return state
  }
}

function pilots(state = [], action) {
  return state
}

const reducers = combineReducers({
  pilotFilter,
  pilots
})

export default reducers
