// 1.feladat
console.log('Első feladat megoldása');
const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];
function myFirst() {
  if (names[i] === 'Gábor') {
    console.log(names[i], 'a tömb', i + 1 + '. eleme');
  }
}
for (i = 0; i < names.length; i++) {
  myFirst(names[i]);
}

// 2.feladat
console.log('Második feladat megoldása');
const nums = [4, 2, 2, 1, 1];
let sum = 0;
for (i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}
console.log('A tömb elemeinek összege:', sum);

// 3.feladat
console.log('Harmadik feladat megoldása');
const nums1 = ['a', 4, 2, 2, 1, 1];
let x = 0;
for (i = 0; i < nums1.length; i++) {
  if (typeof (nums1[i]) != 'number') {
    console.log('A tömb', i + 1 + '. eleme nem szám, ez egy', typeof (nums1[i]));

  } else {
    x = x + nums1[i];
  }
}
console.log('A tömb elemeinek összege:', x);


// 4.feladat
console.log('Negyedik feladat megoldása');
let m = 0;
for (i = 0; i < nums1.length; i++) {
  if (typeof (nums1[i]) != 'number') {
    console.log('A tömb', i + 1 + '. eleme nem szám, ez egy', typeof (nums1[i]));
    if (isNaN(parseInt(nums1[i]))) {
      console.log('Sajnos nem sikerült átkönvertálni');
    }
  } else {
    m = m + nums1[i];
  }
}
console.log('A tömb elemeinek összege:', m);


