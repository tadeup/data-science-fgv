import {ADD_FIELD} from "./types"

export function addField(payload) {
  return { type: ADD_FIELD, payload}
}
