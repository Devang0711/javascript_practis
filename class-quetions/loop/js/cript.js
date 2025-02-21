// q-1

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//   q-2

for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

  
//   q-3

let n = prompt("Enter any number: "); // Takes input from user
n = parseInt(n); // Converts the input to integer
for (let i = 1; i <= n; i++) {
  console.log(i);
}


// q - 4

let n = prompt("Enter any number: ");
n = parseInt(n);
for (let i = n; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// q -5 

let n = prompt("Enter any number: ");
n = parseInt(n);
for (let i = 2; i <= n; i += 2) {
  console.log(i);
}

// q-6

let n = prompt("Enter any number: ");
n = parseInt(n);

let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < n; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}


// q-7

let startYear = prompt("Enter the first number: ");
let endYear = prompt("Enter the second number: ");
startYear = parseInt(startYear);
endYear = parseInt(endYear);

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year);
  }
}


