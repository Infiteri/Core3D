import InputManager from '../../Event/InputManager.js'
import { Matrix4x4 } from '../../Math/Matrix4x4.js'
import { Vector3 } from '../../Math/Vector3.js'

/**
 * PerspectiveCamera movement code
 *
 * TODO: Remove
 */
export default class PerspectiveMovement {
  constructor(camera, speed = 0.05) {
    this.camera = camera

    this.speed = speed

    this.ClickEventTrigger()
  }

  ClickEventTrigger() {
    addEventListener('click', () => {
      const c = document.querySelector('canvas')

      c.requestPointerLock({})

      addEventListener('mousemove', event => {
        this.camera.rotation.x += -event.movementY / 1000
        this.camera.rotation.y += event.movementX / 1000
      })
    })
  }

  Update() {
    const camera = this.camera

    const i = InputManager

    if (i.IsKeyDown('ArrowUp')) {
      camera.rotation.x += this.speed
    }

    if (i.IsKeyDown('ArrowDown')) {
      camera.rotation.x -= this.speed
    }

    if (i.IsKeyDown('ArrowRight')) {
      camera.rotation.y += this.speed
    }

    if (i.IsKeyDown('ArrowLeft')) {
      camera.rotation.y -= this.speed
    }

    const velocity = new Vector3(0, 0, 0)

    if (i.IsKeyDown('KeyW')) {
      const v = Matrix4x4.Forward(Matrix4x4.RotationXYZ(camera.rotation))

      velocity.Add(v)
    }

    if (i.IsKeyDown('KeyS')) {
      const v = Matrix4x4.Forward(Matrix4x4.RotationXYZ(camera.rotation))

      velocity.Sub(v)
    }

    if (i.IsKeyDown('KeyD')) {
      const v = Matrix4x4.Right(Matrix4x4.RotationXYZ(camera.rotation))

      velocity.Add(v)
    }

    if (i.IsKeyDown('KeyA')) {
      const v = Matrix4x4.Right(Matrix4x4.RotationXYZ(camera.rotation))

      velocity.Sub(v)
    }

    if (Vector3.ZERO.Compare(velocity)) {
      camera.position.Add(velocity)
    }
  }
}
