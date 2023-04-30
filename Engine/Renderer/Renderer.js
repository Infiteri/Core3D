import MathUtils from '../Math/MathUtils.js'
import Camera from './Camera/Camera.js'
import PerspectiveCamera from './Camera/PerspectiveCamera.js'
import PerspectiveMovement from './Camera/PerspectiveMovement.js'
import { Shader } from './WebGL/Shader.js'

export const gl = document.querySelector('canvas').getContext('webgl2')

const vs = `
  attribute vec4 aPosition;

  uniform mat4 uCamera;
  uniform mat4 uObject;

  void main() {
    gl_Position = uCamera * uObject * aPosition;
  }
`

const fs = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
`

export default class Renderer {
  static _state = {
    init: false,
    render: false,

    /** @type {Shader} */
    mainShader: null,

    /** @type {Camera} */
    mainCamera: null,
  }

  static Init() {
    if (this._state.init) return

    this._state.init = true

    this._state.mainShader = new Shader(vs, fs)
    this._state.mainCamera = new PerspectiveCamera(
      MathUtils.DegToRad(45),
      innerWidth / innerHeight,
      0.1,
      1000
    )

    this.cameraMovement = new PerspectiveMovement(this._state.mainCamera)

    //Set
    this._state.render = true
  }

  static Render() {
    if (!this._state.render) return

    this.ClearScreen()

    this._state.mainShader.Use()
    this._state.mainCamera.Upload(this._state.mainShader)
    this.cameraMovement.Update()
  }

  static ClearColor(r = 0, g = 0, b = 0) {
    gl.clearColor(r, g, b, 1)
  }

  static Resize(width = innerWidth, height = innerHeight) {
    gl.viewport(0, 0, width, height)

    if (this._state.mainCamera !== null) {
      this._state.mainCamera.Recalculate(width, height)
    }
  }

  static ClearScreen() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  }
}
