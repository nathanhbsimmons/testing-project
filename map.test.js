let dash = require('aca-dash-nathansimmons');

let map = dash.map;
const names = ['Jon', 'Bob', 'Ted', 'Barney', 'Lilly', 'Robin', 'Saul', 'Axe'];

function addHello(name) {
  return 'Hello ' + name;
}

let helloArray = map(names, addHello);

test('map should prepend hello to all names', () => {
  expect(helloArray).toEqual([
    'Hello Jon',
    'Hello Bob',
    'Hello Ted',
    'Hello Barney',
    'Hello Lilly',
    'Hello Robin',
    'Hello Saul',
    'Hello Axe'
  ]);
});
