import { gl } from '../Renderer.js'
import { Buffer } from '../WebGL/Buffer.js'
import Object3D from './Object3D.js'

export default class Box extends Object3D {
  constructor() {
    super()

    this.buffer = new Buffer({
      elementSize: 2,
      drawMode: gl.TRIANGLE_STRIP,
    })

    const data = [1, 1, -1, 1, 1, -1, -1, -1]
    this.buffer.AddData(data)
    this.buffer.AddLayout(0, 0, 2)
    this.buffer.Init()
  }
}
