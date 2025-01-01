function foo(a, b) {
  // Handle null values for numbers separately
  if (typeof a === 'number' && a === null) {
    a = 0; // Or handle it according to your needs
  }
  if (typeof b === 'number' && b === null) {
    b = 0; // Or handle it according to your needs
  }

  // Handle null values for other types
  if (a === null) {
    a = ''; // Or handle it accordingly
  }
  if (b === null) {
    b = ''; // Or handle it accordingly
  }

  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // "
console.log(foo(1, 'hello')); // 1hello
console.log(foo(null, 'world')); // world