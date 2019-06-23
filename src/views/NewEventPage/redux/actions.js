import { UPLOAD_IMAGE, DELETE_IMAGE, CHANGE_HEADER } from "./types"

export function uploadImage(payload) {
  return { type: UPLOAD_IMAGE, payload}
}

export function deleteImage(payload) {
  return { type: DELETE_IMAGE, payload}
}

export function changeHeader(currentHeaderIndex, newHeaderIndex) {
  return { type: CHANGE_HEADER, currentHeaderIndex, newHeaderIndex}
}