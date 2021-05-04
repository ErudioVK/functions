// Első feladat - adott tömb elemei oszthatók-e kettővel
console.log('Első feladat - megvizsgáljuk, hogy az adott tömb elemei oszthatók-e kettóvel');
const nums = [3, 4, 9, 6, 2];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ': osztható');
  } else {
    console.log(nums[i] + ': nem osztható');
  }
}

// Második feldat - adott tömb elemeinek kiírása
console.log('Második feladat - kiírjuk a tömb elemeit a megfelelő indexével');
const players = ['Peter', 'Kate', 'John'];
for (let i = 0; i < players.length; i++) {
  console.log(i + 1 + '.', players[i]);
}


// Harmadik feladat - függvény készítése az elemek típusának meghatározásához
console.log('Harmadik feladat - függvény, amely megvizsgálja az elem típusát és azt egy új tömbe adja vissza');

console.log('Ez egy pár soros megoldása a feladatnak, de nem a megadott feltételek szerint:');
const x = ['', 4, true];
console.log('Eredeti tömb:', (x));
let y = [];
for (i = 0; i < x.length; i++) {
  y[i] = typeof (x[i]);
}
console.log('Konvertált tömb:', (y));



// function typeofElement(x, fn) {
//   typeof (x[i]);
// }
// y[i] = y.push(typeof [x[i]]);
// const x = ['', 4, true];
// console.log('Az eredeti tömb:', (x));
// function typeElements(x, fn) {
//   const resultArray = [];
//   for (let element of xArray) {
//     resultArray.push(typeof (fn(x)));
//   }

//   console.log('Az új tömb:', (resultArray));
// }


// let scores = [53, 23, 20, 10, 35, 80];
// function changeScores(scoreArray, fn) {
//   let resultArray = [];
//   for (let score of scoreArray) {
//     resultArray.push(fn(score));
//   }
//   return resultArray;
// }

// function checkIfWinner(score) {
//   if (score >= 50) {
//     return 'Winner';
//   } else {
//     return 'Looser';
//   }
// }
// let winners = changeScores(scores, checkIfWinner);
// console.log(winners);
