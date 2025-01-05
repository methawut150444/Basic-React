var numbers = [3, 56, 2, 48, 5];

// < Map >----------------------------------> กระทำทุกตัวใน Array โดยไล่ทีละตัว
const New_map = numbers.map(function (x) {
  return x + 1;
});

// --------------- [foreach] use case
let Old_map = [];
numbers.forEach(function (x) {
  Old_map.push(x + 1);
});

console.log(New_map);
console.log(Old_map);

// < Filter >------------------------------> คัดกรองค่าใน Array ว่า Index ไหนตรงเงื่อนไข
const New_filter = numbers.filter(function (x) {
  return x > 50;
});

// --------------- [foreach] use case
let Old_filter = [];
numbers.forEach(function (x) {
  if (x > 50) {
    Old_filter.push(x);
  }
});

console.log(New_filter);
console.log(Old_filter);

// < Reduce >------------------------------> รวมค่าใน Array เป็นอันเดียว (ต้องมีค่า Index ก่อนห้าและหลังด้วย)
const New_reduce = numbers.reduce(function (index_before, index_after) {
  return index_before + index_after;
});

// --------------- [foreach] use case
let Old_reduce = 0;
numbers.forEach(function (x) {
  Old_reduce += x;
});

console.log(Old_reduce);
console.log(New_reduce);

// < Find >----------------------------------> หาผลลัพธ์ใน Array ตัวแรก ที่ตรงเงื่อนไข
const Find = numbers.find(function (x) {
  return x > 2;
});

console.log(Find);

// < FindIndex >------------------------------> หาตำแหน่งของค่าใน Array ตัวแรก ที่ตรงเงื่อนไข
const FindIndex = numbers.findIndex(function (x) {
  return x == 5;
});

console.log(FindIndex);
