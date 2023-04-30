export default class MathUtils {
  static IsPowerOf2(value) {
    return (value & (value - 1)) === 0
  }

  static DegToRad(value) {
    return value * (180 / Math.PI)
  }

  static Clamped(value, min, max) {
    return Math.min(Math.max(value, min), max)
  }
}
