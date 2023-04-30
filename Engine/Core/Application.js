import Renderer from '../Renderer/Renderer.js'

export default class Application {
  constructor() {}

  OnInit() {}

  OnRender() {}

  OnUpdate() {}

  OnCrash() {}

  Init() {
    Renderer.Init()

    this.OnInit()
  }

  Crash() {
    this.OnCrash()
  }

  Render() {
    Renderer.Render()

    this.OnRender()
  }

  Update() {
    this.OnUpdate()
  }

  Run() {
    this.Render()
    this.Update()
  }
}
