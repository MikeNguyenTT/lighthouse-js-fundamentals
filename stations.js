const chooseStations = function (stations) {
  let goodStations = [];
  let j = 0;
  for (let i = 0; i < stations.length; i++) {
    if ((stations[i][1] >= 20) && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      goodStations[j] = stations[i][0];
      j++;
    }
  }
  return goodStations;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));