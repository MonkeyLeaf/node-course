// This snippet gets the day of the year from a Dateobject.

const dayOfYear = date =>
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

const result = dayOfYear(new Date()); // 272

console.log(result)