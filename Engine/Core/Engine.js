import InputManager from '../Event/InputManager.js'
import Application from './Application.js'
import Logger from './Logger.js'
import Subsystem from './Subsystem.js'
import Window from './Window.js'

export default class Engine {
  /** @type {Application} */
  static _application = null
  static CreateApplication() {}

  /**
   *  Subsystems with a Initialize method
   * @type {Subsystem[]}
   */
  static _INIT_SUBSYSTEM = []

  /**
   *  Subsystems with a Update method
   * @type {Subsystem[]}
   */
  static _UPDATE_SUBSYSTEM = []

  static Start() {
    this._application = this.StartApplication()

    this._INIT_SUBSYSTEM = [Logger, InputManager, Window]
    this._UPDATE_SUBSYSTEM = []

    this.Initialize()
  }

  static Initialize() {
    //Start subsystem
    for (let i = 0; i < this._INIT_SUBSYSTEM.length; i++) {
      const subsystem = this._INIT_SUBSYSTEM[i]

      subsystem.Initialize()
    }

    this._application.Init()

    this.Update()
  }

  static Update() {
    this._application.Run()

    requestAnimationFrame(this.Update.bind(this))
  }

  /** @private */
  static StartApplication() {
    const app = this.CreateApplication()

    if (app === null || app === undefined) {
      throw new Error('Application cant be started')
    }

    if (app instanceof Application) {
      return app
    } else {
      throw new Error('Application not instance of Application')
    }
  }
}
