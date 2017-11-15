/*
 * action types
 */

export const FILTER_PILOTS = 'FILTER_PILOTS'

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
