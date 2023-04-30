import { Matrix4x4 } from '../../Math/Matrix4x4.js'
import { Vector3 } from '../../Math/Vector3.js'
import Renderer from '../Renderer.js'
import { Buffer } from '../WebGL/Buffer.js'

export default class Object3D {
  constructor() {
    this.buffer = new Buffer({})

    this.position = new Vector3(0, 0, 0)
    this.modelMatrix = Matrix4x4.Translation(this.position)
  }

  Init() {}

  Render() {
    const shader = Renderer._state.mainShader

    //Safety check
    if (shader === null) return

    // Upload
    this.modelMatrix = Matrix4x4.Translation(this.position)
    shader.Mat4('uObject', this.modelMatrix.ToFloat32Array())

    this.buffer.Bind()
    this.buffer.Draw()
  }

  Update() {}
}
