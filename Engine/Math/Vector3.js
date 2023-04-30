export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  static get ZERO() {
    return new Vector3(0, 0, 0)
  }

  static get ONE() {
    return new Vector3(1, 1, 1)
  }

  static Normalized(vector) {
    const out = new Vector3(0, 0, 0)
    let len = vector.x * vector.x + vector.y * vector.y + vector.z * vector.z

    if (len > 0) {
      len = 1 / Math.sqrt(len)
    }

    out.x = vector.x * len
    out.y = vector.y * len
    out.z = vector.z * len

    return out
  }

  ToArray() {
    return [this.x, this.y, this.z]
  }

  To32Array() {
    return new Float32Array(this.ToArray())
  }

  Add(vector) {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z

    return this
  }

  Sub(vector) {
    this.x -= vector.x
    this.y -= vector.y
    this.z -= vector.z

    return this
  }

  Div(vector) {
    this.x /= vector.x
    this.y /= vector.y
    this.z /= vector.z

    return this
  }

  Mul(vector) {
    this.x *= vector.x
    this.y *= vector.y
    this.z *= vector.z

    return this
  }

  Compare(vector) {
    return this.x !== vector.x || this.y !== vector.y || this.z !== vector.z
  }

  Clone() {
    return new Vector3(this.x, this.y, this.z)
  }

  ClampX(min, max) {
    this.x = MathUtils.Clamped(this.x, min, max)
  }

  ClampY(min, max) {
    this.y = MathUtils.Clamped(this.y, min, max)
  }

  ClampZ(min, max) {
    this.z = MathUtils.Clamped(this.z, min, max)
  }
}
