function foo(a, b) {
  if (a === null || b === null) {
    console.warn('Null value(s) encountered. Using default values.');
    a = a || 0; // Use default value 0 if a is null
    b = b || 0; // Use default value 0 if b is null
  }

  // ... more code, now safely handles null inputs
  return a + b; // Example operation
} 