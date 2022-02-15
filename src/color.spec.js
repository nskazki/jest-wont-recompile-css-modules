const color = require('./color')

it('fails unless you change color to green in color.scss and clear the cache', () => {
  expect(color).toEqual('green')
})
