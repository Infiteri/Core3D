export class VertexXYZ_UV {
  constructor(x, y, z, u, v) {
    this.x = x
    this.y = y
    this.z = z
    this.u = u
    this.v = v
  }

  ToArray() {
    return [this.x, this.y, this.z, this.u, this.v]
  }
}

export class VertexXYZ {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  ToArray() {
    return [this.x, this.y, this.z]
  }
}
