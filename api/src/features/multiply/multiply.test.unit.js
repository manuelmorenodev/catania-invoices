describe('Example test', () => {
  it('Should work', () => {
    expect(multiply(2, 2)).toBe(4)
  })
  it('Should not work', () => {
    expect(multiply(2, 3)).toBe(6)
  })
})

const multiply = (num1, num2) => num1 * num2
