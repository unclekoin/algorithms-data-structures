const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivotPosition = Math.floor(Math.random() * array.length)
  const pivot = array[pivotPosition];
  const less = array.filter((value) => value < pivot);
  const greater = array.filter((value) => value > pivot);
  const equal = array.filter((value) => value === pivot)

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

console.log(quickSort([4, 6, 1, 7, 3, 2, 5, 8, 5, 3]));