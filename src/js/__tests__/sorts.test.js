import sorts from '../sorts';

const arr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('sort array', () => {
  const result = sorts(arr);
  console.log(result);
  expect(result[0]).toEqual({ name: 'маг', health: 100 });
});
