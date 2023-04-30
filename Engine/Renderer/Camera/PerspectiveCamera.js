import { Matrix4x4 } from '../../Math/Matrix4x4.js'
import Camera from './Camera.js'

export default class PerspectiveCamera extends Camera {
  constructor(fov, aspect, near, far) {
    super()

    this.fov = fov || 45
    this.aspect = aspect || innerWidth / innerHeight
    this.near = near || 0.1
    this.far = far || 1000

    // prettier-ignore
    this.viewMatrix = Matrix4x4.Perspective(this.fov, this.aspect, this.near, this.far)
  }

  Recalculate(width, height) {
    this.aspect = width / height

    // prettier-ignore
    this.viewMatrix = Matrix4x4.Perspective(this.fov, this.aspect, this.near, this.far)
  }
}
