import MathUtils from './MathUtils.js'

export class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  static get ZERO() {
    return new Vector2(0, 0)
  }

  static get ONE() {
    return new Vector2(1, 1)
  }

  ToArray() {
    return [this.x, this.y]
  }

  To32Array() {
    return new Float32Array(this.ToArray())
  }

  Add(vector) {
    this.x += vector.x
    this.y += vector.y

    return this
  }

  Sub(vector) {
    this.x -= vector.x
    this.y -= vector.y

    return this
  }

  Div(vector) {
    this.x /= vector.x
    this.y /= vector.y

    return this
  }

  Mul(vector) {
    this.x *= vector.x
    this.y *= vector.y

    return this
  }

  Clone() {
    return new Vector2(this.x, this.y)
  }

  ClampX(min, max) {
    this.x = MathUtils.Clamped(this.x, min, max)
  }

  ClampY(min, max) {
    this.y = MathUtils.Clamped(this.y, min, max)
  }
}
