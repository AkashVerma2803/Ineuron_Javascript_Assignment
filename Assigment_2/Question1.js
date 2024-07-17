function checkTriangleType(a, b, c) {
  if (a === b && b === c) {
      return "Equilateral triangle";
  } else if (a === b || b === c || a === c) {
      return "Isosceles triangle";
  } else {
      return "Scalene triangle";
  }
}

// Example usage:
console.log(checkTriangleType(3, 3, 3)); // Equilateral triangle
console.log(checkTriangleType(3, 3, 5)); // Isosceles triangle
console.log(checkTriangleType(3, 4, 5)); // Scalene triangle
