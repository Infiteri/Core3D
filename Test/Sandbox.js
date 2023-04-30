import Core from '../Engine/Core.js'

class Sandbox extends Core.Application {
  OnInit() {
    Core.Renderer.ClearColor()

    this.box = new Core.Box()
    this.box2 = new Core.Box()
    this.box2.position.x = -5
  }

  OnRender() {
    this.box.Render()
    this.box2.Render()
  }

  OnUpdate() {

  }
}

//Setup
Core.Engine.CreateApplication = () => new Sandbox()
Core.Engine.Start()
