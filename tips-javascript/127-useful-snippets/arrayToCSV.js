// This snippet converts the elements to strings with comma-separated values.

const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

const array1 = arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
const array2 = arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```

console.log(array1, '\n', array2)