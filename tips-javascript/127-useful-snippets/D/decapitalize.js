// This snippet turns the first letter of a string into lowercase.

const decapitalize = ([first, ...rest]) =>
    first.toLowerCase() + rest.join('')

const result = decapitalize('FooBar'); // 'fooBar'

console.log(result)