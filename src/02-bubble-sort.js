function bubbleSort(array) {
  /* eslint-disable no-param-reassign */
  const n = array.length;
  let ub = array.length - 1;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < ub; j += 1) { // (j < ub) -> Iterate until ub - 1
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    ub -= 1;
  }
  /* eslint-enable no-param-reassign */
}

function testBubbleSort() {
  // const ar = [];
  // const ar = [-56];
  const ar = [4, 5, -4, 55, 4, 0, -8, 65];
  bubbleSort(ar);
  console.log(`[${ar}]`);
  console.log('\n\n');
}

testBubbleSort();
