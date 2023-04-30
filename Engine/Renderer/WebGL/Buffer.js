import { gl } from '../Renderer.js'

const configBoilerplate = {
  bufferType: 0,
  drawMode: 0,
  dataType: 0,
  elementSize: 3,
}

class Layout {
  constructor(location, offset, size) {
    this.location = location
    this.offset = offset
    this.size = size
  }
}

export class Buffer {
  /**
   * Creates a new buffer
   *
   * @param {configBoilerplate} config
   */
  constructor(config) {
    this.bufferType = config.bufferType || gl.ARRAY_BUFFER
    this.drawMode = config.drawMode || gl.TRIANGLES
    this.dataType = config.dataType || gl.FLOAT
    this.elementSize = config.elementSize || 3

    //Calculated based on the provided data
    this.buffer = gl.createBuffer()
    this.typeSize = this.GetTypeSize()
    this.stride = this.elementSize * this.typeSize
    this.layout = []
    this.data = []
  }

  /** @private */
  GetTypeSize() {
    let s = 0

    switch (this.dataType) {
      case gl.FLOAT:
      case gl.INT:
      case gl.UNSIGNED_INT:
        s = 4
        break

      case gl.SHORT:
      case gl.UNSIGNED_SHORT:
        s = 2
        break

      case gl.BYTE:
      case gl.UNSIGNED_BYTE:
        s = 1
        break

      default:
        throw new Error('Unrecognized data type: ' + this.dataType.toString())
    }

    return s
  }

  /**
   * Binds and uploads
   */
  Init() {
    this.Bind()
    this.Upload()
  }

  Bind() {
    gl.bindBuffer(this.bufferType, this.buffer)

    for (const l of this.layout) {
      const { location, offset, size } = l

      gl.vertexAttribPointer(
        location,
        size,
        this.dataType,
        false,
        this.stride,
        offset * this.typeSize
      )
      gl.enableVertexAttribArray(location)
    }
  }

  ReUpload(data) {
    this.data = []
    this.data.push(...data)

    this.Bind()
    this.Upload()
    this.Unbind()
  }

  Unbind() {
    gl.bindBuffer(this.bufferType, null)
  }

  Upload() {
    this.Bind()

    let bufferData

    switch (this.dataType) {
      case gl.FLOAT:
        bufferData = new Float32Array(this.data)
        break

      case gl.INT:
        bufferData = new Int32Array(this.data)
        break

      case gl.UNSIGNED_INT:
        bufferData = new Uint32Array(this.data)
        break

      case gl.SHORT:
        bufferData = new Int16Array(this.data)
        break

      case gl.UNSIGNED_SHORT:
        bufferData = new Uint16Array(this.data)

        break

      case gl.BYTE:
        bufferData = new Int8Array(this.data)
        break

      case gl.UNSIGNED_BYTE:
        bufferData = new Uint8Array(this.data)
        break

      default:
        bufferData = new Float32Array(this.data)
        break
    }

    gl.bufferData(this.bufferType, bufferData, gl.STATIC_DRAW)
  }

  AddLayout(location, offset, size) {
    this.layout.push(new Layout(location, offset, size))
  }

  AddData(array) {
    this.data.push(...array)
  }

  Draw() {
    if (this.bufferType === gl.ARRAY_BUFFER) {
      gl.drawArrays(this.drawMode, 0, this.data.length / this.elementSize)
    }
  }
}
