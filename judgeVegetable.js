const judgeVegetable = function (veggies, characteristic) {
  let highest = 0;
  let bestVeggie;
  for (let i = 0; i < veggies.length; i++) {
    if (veggies[i][characteristic] > highest) {
      highest = veggies[i][characteristic];
      bestVeggie = veggies[i]
    }
  }
  console.log(bestVeggie.submitter);
  return bestVeggie.submitter;

}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)