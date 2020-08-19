// This snippet converts the elements of an array into <li> tags and appends them to the list of the given ID.

const arrayToHtmlList = (arr, listID) =>
    (el => (
        (el = document.querySelector('#' + listID)),
        (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
    ))();

const result = arrayToHtmlList(['item 1', 'item 2'], 'myListID');

console.log(result)