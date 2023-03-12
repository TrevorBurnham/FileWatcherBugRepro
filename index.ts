const isEven = (num: number) => num % 2 === 0;

test('when 2 then isEven true', () => {
    const result = isEven(2);
    expect(result).toEqual(true);
});
