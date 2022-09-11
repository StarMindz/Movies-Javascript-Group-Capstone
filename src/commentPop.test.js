import countComment from './mocks/commentPop.js'

test('Shoould Return data Length', () => {
  expect(countComment([1,2,4,5,6]).toBe(5))
});
