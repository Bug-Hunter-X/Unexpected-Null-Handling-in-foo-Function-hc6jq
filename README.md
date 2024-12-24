# Unexpected Null Handling in foo Function

This repository demonstrates an issue with null handling in a JavaScript function and its solution.  The `foo` function unexpectedly terminates when null values are passed as arguments instead of handling them gracefully.

## Bug Description
The `foo` function, as initially written, does not explicitly handle cases where the input parameters `a` or `b` are null. This results in abrupt termination without appropriate error handling or alternative behavior.

## Solution
The solution adds explicit null checks to handle cases where `a` or `b` are null.  Instead of simply returning, the solution could perform alternative actions, such as logging an error, using default values, or throwing a more informative exception.  The choice of solution depends on the specific requirements of the function.