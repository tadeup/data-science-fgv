import { GO_TO_NEXT, GO_TO_PREV } from "./types"

export function goToNext(payload) {
  return { type: GO_TO_NEXT, payload}
}

export function goToPrev(payload) {
  return { type: GO_TO_PREV, payload}
}
