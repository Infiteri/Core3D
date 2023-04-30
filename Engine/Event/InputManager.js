export default class InputManager {
  static _state = {
    init: false,
  }

  static _keys = {}

  static Initialize() {
    if (this._state.init) return

    addEventListener('keydown', ({ code }) => {
      this._keys[code] = true
    })

    addEventListener('keyup', ({ code }) => {
      delete this._keys[code]
    })

    this._state.init = true
  }

  static IsKeyDown(value) {
    return this._keys[value] || false
  }
}
