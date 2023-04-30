import Subsystem from './Subsystem.js'

export default class Logger extends Subsystem {
  static _state = {
    init: false,
  }

  static IsLoaded() {
    return this._state.init
  }

  static Initialize() {
    this._state = true
  }

  static Info(message) {
    console.info(`%c[INFO]: ${message}`, 'color: gray')
  }

  static Warn(message) {
    console.info(`%c[WARN]: ${message}`, 'color: yellow')
  }

  static Error(message) {
    console.info(`%c[ERROR]: ${message}`, 'color: red')
  }

  static Log(message) {
    console.info(`[LOG]: ${message}`)
  }

  static Important(message) {
    console.info(`%c[IMPORTANT]: ${message}`, `color: #00ff00;`)
  }

  static Trace() {
    console.trace()
  }

  static Assert(condition = true, message) {
    if (condition === null || condition === undefined) {
      throw new this.Error(message)
    }
  }

  static ColorLog(message, color = 'white') {
    console.info(`%c${message}`, `color: ${color}`)
  }
}
