export function divisibleBy(numbers: number[], divisor: number): number[]{
  return numbers.filter((x: number) => x % divisor === 0)
}