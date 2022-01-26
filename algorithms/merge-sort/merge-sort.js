const merge = (arrayOne, arrayTwo) => {
  const combined = [];
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      combined.push(arrayOne[i]);
      i++;
    } else {
      combined.push(arrayTwo[j]);
      j++;
    }
  }

  while (i < arrayOne.length) {
    combined.push(arrayOne[i]);
    i++;
  }

  while (j < arrayTwo.length) {
    combined.push(arrayTwo[j]);
    j++;
  }

  return combined;
};


const mergeSort = (array) => {
  if (array.length === 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([3, 1, 4, 2]));




