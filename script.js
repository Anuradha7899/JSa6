  // Q1. Find Grades
  let marks = parseInt(prompt('Enter the marks'))
  let grade;
  switch (true) {
      case marks >= 41 && marks <= 50: grade = 'A'
          break;
      case marks >= 31 && marks <= 40: grade = 'B'
          break;
      case marks >= 21 && marks <= 30: grade = 'C'
          break;
      case marks >= 11 && marks <= 20: grade = 'D'
          break;
      default: grade = 'E'
  }
  console.log(grade)

  // Q2. Get Value
  let word = prompt('Enter a word')
  if (word == 'p' || word == 'P') {
      console.log('PrepBytes')
  } else if (word == 'z' || word == 'Z') {
      console.log('Zenith')
  } else if (word == 'e' || word == 'E') {
      console.log('Expert Coder')
  } else if (word == 'd' || word == 'D') {
      console.log('Data Structure')
  }

  // Q3. Find the maximum out of three numbers.
  let a1 = parseInt(prompt('Enter a1'));
  let b1 = parseInt(prompt('Enter b1'));
  let c1 = parseInt(prompt('Enter c1'));
  if (a1 > b1 && a1 > c1) {
      console.log(a1)
  } else if (b1 > a1 && b1 > c1) {
      console.log(b1)
  } else {
      console.log(c1)
  }

  // Q4. Find the second smallest number. 
  let a2 = parseInt(prompt('Enter a2'))
  let b2 = parseInt(prompt('Enter b2'))
  let c2 = parseInt(prompt('Enter c2'))
  if ((a2 <= b2 && b2 <= c2) || (c2 <= b2 && b2 <= a2)) {
      console.log(b2)
  } else if ((b2 <= a2 && a2 <= c2) || (c2 <= a2 && a2 <= b2)) {
      console.log(a2)
  } else {
      console.log(c2)
  }

  // Q5. Check whether the triangle is Acute or Obtuse
  let a3 = parseInt(prompt('Enter a3'))
  let b3 = parseInt(prompt('Enter b3'))
  let c3 = parseInt(prompt('Enter c3'))
  if (a3 * a3 + b3 * b3 > c3 * c3) {
      console.log('Acute angle.')
  }
  else if (a3 * a3 + b3 * b3 < c3 * c3) {
      console.log('Obtuse angle.')
  } else {
      console.log('This is not an angle.')
  }
