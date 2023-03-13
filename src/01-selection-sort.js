function selectionSort(array) {
  /* eslint-disable no-param-reassign */
  const n = array.length;
  for (let i = 0; i < n; i += 1) {
    let pos = i;
    for (let j = i + 1; j < n; j += 1) {
      if (array[j] < array[pos]) {
        const temp = pos;
        pos = j;
        j = temp;
      }
    }
    const temp = array[pos];
    array[pos] = array[i];
    array[i] = temp;
  }
  /* eslint-enable no-param-reassign */
}

function testSelectionSort() {
  // const ar = [];
  // const ar = [-56];
  const ar = [4, 5, -4, 55, 4, 0, -8, 65];
  selectionSort(ar);
  console.log(`[${ar}]`);
  console.log('\n\n');
}

testSelectionSort();
