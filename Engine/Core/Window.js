import Renderer from '../Renderer/Renderer.js'

export default class Window {
  static _state = {
    init: false,

    width: innerHeight,
    height: innerHeight,

    canvas: document.querySelector('canvas'),
  }

  static Initialize() {
    if (this._state.init) return

    this._state.width = innerWidth
    this._state.height = innerHeight

    this._state.canvas.width = this._state.width
    this._state.canvas.height = this._state.height

    Renderer.Resize()

    this._state.init = true

    this.Resizing()
  }

  static Resizing() {
    addEventListener('resize', () => {
      this._state.width = innerWidth
      this._state.height = innerHeight

      this._state.canvas.width = this._state.width
      this._state.canvas.height = this._state.height

      Renderer.Resize()
    })
  }
}
