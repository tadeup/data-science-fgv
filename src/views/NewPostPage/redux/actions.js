import { UPLOAD_IMAGE, DELETE_IMAGE } from "./types"

export function uploadImage(payload) {
  return { type: UPLOAD_IMAGE, payload}
}

export function deleteImage(payload) {
  return { type: DELETE_IMAGE, payload}
}
