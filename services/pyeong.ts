export function toMeter(pyeong: number) {
  return pyeong * 3.305785;
}

export function toPyeong(meter: number) {
  return meter / 3.305785;
}

export function calculatePercent(i1: number, i2: number) {
  const result = (i1 / i2) * 100;

  if (!isFinite(result) || isNaN(result)) {
    return 0;
  }

  return result;
}
