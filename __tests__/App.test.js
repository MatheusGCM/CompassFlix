const addNumbers = (x, y) => {
  return x + y;
};

test('add numbers', () => {
  expect(addNumbers(1, 2)).toEqual(3);
});
