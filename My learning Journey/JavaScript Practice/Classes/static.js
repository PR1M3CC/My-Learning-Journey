class Calculator {
    // A static method
    static add(a, b) {
      return a + b;
    }
  }
  
  // You can call the static method directly on the class
  console.log(Calculator.add(5, 3)); // Output: 8
  
//   Static methods are often used to create utility functions or properties that are related to a class but don't need to be tied to an instance of that class.