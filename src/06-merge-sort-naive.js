function merge(array1, array2) {
  /* eslint-disable no-plusplus */
  const array = [];
  const n1 = array1.length;
  const n2 = array2.length;
  let i = 0;
  let j = 0;
  while (i < n1 || j < n2) {
    if (i < n1 && j < n2) {
      array.push(array1[i] <= array2[j] ? array1[i++] : array2[j++]);
    } else if (i < n1) {
      array.push(array1[i++]);
    } else {
      array.push(array2[j++]);
    }
  }
  return array;
  /* eslint-enable no-plusplus */
}

function mergeSort(array) {
  /* eslint-disable no-param-reassign */
  if (array.length < 2) {
    return [...array];
  }

  const mid = Math.trunc(array.length / 2);
  const array1 = mergeSort(array.slice(0, mid));
  const array2 = mergeSort(array.slice(mid, array.length));
  const mergedArray = merge(array1, array2);

  return mergedArray;
  /* eslint-enable no-param-reassign */
}

function testMergeSort() {
  // const ar = [];
  // const ar = [-56];
  const ar = [4, 5, -4, 55, 4, 0, -8, 65];
  // const ar = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const mar = mergeSort(ar);
  console.log(`[${mar}]`);
  console.log('\n\n');
}

testMergeSort();
