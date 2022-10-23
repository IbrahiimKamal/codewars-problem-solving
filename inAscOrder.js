// solution 1
function inAscOrder(arr) {
  let result;
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result = arr[i] - arr[i + 1] < 0;
    newArr.push(result);
  }
  return !newArr.includes(false);
}

// solution 2
function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// solution 3
const inAscOrder = (a) =>
  a
    .slice()
    .sort((x, y) => x - y)
    .every((e, i) => e === a[i]);
