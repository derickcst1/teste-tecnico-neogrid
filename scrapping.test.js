const scrap = require('./scrapping.mjs');

test('adds 1 + 2 to equal 3', () => {
    expect(scrap(1, 2)).toBe(3);
  });