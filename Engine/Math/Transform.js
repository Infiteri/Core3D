import { Matrix4x4 } from './Matrix4x4.js'
import { Vector3 } from './Vector3.js'

/**
 * Transform stuff:
 *
 * @this position position - Vector3 ZERO
 * @this rotation rotation - Vector3 ZERO
 * @this scale scale - Vector3 ONE
 */
export class Transform {
  constructor() {
    this.position = Vector3.ZERO
    this.rotation = Vector3.ZERO
    this.scale = Vector3.ONE
  }

  //   /**
  //    * Copies the transforms from a transform to the current one
  //    *
  //    * @param {Transform} transform - to copy from
  //    */
  //   CopyFrom(transform) {
  //     this.position.CopyFrom(transform.position)
  //     this.rotation.CopyZ(transform.rotation)
  //     this.scale.CopyFrom(transform.scale)
  //   }

  /**
   * Returns the (translation * rotation) * scale in a Matrix4x4 format
   * @see Matrix4x4 for the format
   */
  GetMatrix() {
    const translation = Matrix4x4.Translation(this.position)
    const rotation = Matrix4x4.RotationXYZ(this.rotation)

    const scale = Matrix4x4.Scale(this.scale)

    //?: T * R * E
    return Matrix4x4.Multiply(Matrix4x4.Multiply(translation, rotation), scale)
  }
}
