import { GOTO_PREV, GOTO_NEXT, LEAVE_PAGE } from "./types"

export function gotoPrev(payload) {
  return { type: GOTO_PREV, payload}
}

export function gotoNext(payload) {
  return { type: GOTO_NEXT, payload}
}

export function leavePage(payload) {
  return { type: LEAVE_PAGE, payload}
}

