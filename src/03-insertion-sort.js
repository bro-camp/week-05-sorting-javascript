function insertionSort(array) {
  /* eslint-disable no-param-reassign */
  const n = array.length;
  for (let i = 0; i < n; i += 1) {
    // 'elem' stores the current element being inserted, so that, it can be
    // used even when the greater elements are shifted to the right.
    const elem = array[i];
    let j = i - 1;
    while (j >= 0 && elem < array[j]) {
      array[j + 1] = array[j]; // shift-element to the right
      j -= 1;
    }
    array[j + 1] = elem;
  }
  /* eslint-enable no-param-reassign */
}

function testInsertionSort() {
  // const ar = [];
  // const ar = [-56];
  const ar = [4, 5, -4, 55, 4, 0, -8, 65];
  insertionSort(ar);
  console.log(`[${ar}]`);
  console.log('\n\n');
}

testInsertionSort();
