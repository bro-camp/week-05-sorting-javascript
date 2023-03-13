function partition(array, lb, ub) {
  /* eslint-disable no-param-reassign */
  const pivotIdx = Math.trunc((lb + ub) / 2); // Take middle index
  const pivot = array[pivotIdx];
  [array[lb], array[pivotIdx]] = [array[pivotIdx], array[lb]];

  let i = lb + 1;
  let j = ub;
  while (i <= j) {
    while (i <= j && array[i] <= pivot) i += 1;
    while (i <= j && array[j] > pivot) j -= 1;
    if (i < j) [array[i], array[j]] = [array[j], array[i]];
  }

  [array[lb], array[j]] = [array[j], array[lb]];
  return j;
  /* eslint-enable no-param-reassign */
}

function quickSort(array, lb = 0, ub = array.length - 1) {
  if (lb >= ub) return;

  const p = partition(array, lb, ub);
  quickSort(array, lb, p - 1);
  quickSort(array, p + 1, ub);
}

function testQuickSort() {
  // const ar = [];
  // const ar = [-56];
  const ar = [4, 5, -4, 55, 4, 0, -8, 65];
  // const ar = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  quickSort(ar);
  console.log(`[${ar}]`);
  console.log('\n\n');
}

testQuickSort();
