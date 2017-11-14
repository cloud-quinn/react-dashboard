/*
 * action types
 */

export const FILTER_PILOTS = 'FILTER_PILOTS'
export const TOGGLE_TODO = 'TOGGLE_TODO'

/*
 * other constants
 */

export const PilotFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function filterPilots(filter) {
  return { type: FILTER_PILOTS, filter }
}
