let dash = require('aca-dash-nathansimmons');


let filter = dash.filter;
const names = ['Jon', 'Bob', 'Ted', 'Barney', 'Lilly', 'Robin', 'Saul', 'Axe'];
function onlyThreeLetters(name) {
  return name.length === 3;
}

let helloArray = filter(names, onlyThreeLetters);

test('filter finds all names with 3 letters', () => {
  expect(helloArray).toEqual(['Jon', 'Bob', 'Ted', 'Axe']);
});
