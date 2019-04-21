import { GOTO_PREV, GOTO_NEXT } from "./types"

export function gotoPrev(payload) {
  return { type: GOTO_PREV, payload}
}

export function gotoNext(payload) {
  return { type: GOTO_NEXT, payload}
}
