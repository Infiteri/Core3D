export default class Subsystem {
  static _state = {
    init: false,
  }

  static IsLoaded() {
    return this._state.init
  }

  static Initialize() {
    this._state = true
  }

  static Update() {}
}
