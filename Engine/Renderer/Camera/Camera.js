import { Matrix4x4 } from '../../Math/Matrix4x4.js'
import { Vector3 } from '../../Math/Vector3.js'

export default class Camera {
  constructor() {
    this.viewMatrix = Matrix4x4.Identity()

    // Position
    this.position = new Vector3(0, 0, 10)
    this.modelPositionMatrix = Matrix4x4.Translation(this.position)

    this.rotation = new Vector3(0, 0, 0)
    this.modelRotationMatrix = Matrix4x4.RotationXYZ(this.rotation)
  }

  GetModelView() {
    return Matrix4x4.Multiply(this.viewMatrix, this.GetTransform())
  }

  GetTransform() {
    return Matrix4x4.Multiply(
      this.modelPositionMatrix,
      this.modelRotationMatrix
    )
  }

  Upload(shader, name = 'uCamera') {
    this.UpdateModel()

    //get and upload
    let models = Matrix4x4.Multiply(
      this.modelPositionMatrix,
      this.modelRotationMatrix
    )

    models = Matrix4x4.Invert(models)

    const matrix = Matrix4x4.Multiply(this.viewMatrix, models)
    shader.Mat4(name, matrix.ToFloat32Array())
  }

  Recalculate(width, height) {}

  UpdateModel() {
    this.modelPositionMatrix = Matrix4x4.Translation(this.position)
    this.modelRotationMatrix = Matrix4x4.RotationXYZ(this.rotation)
  }
}
