/*
1. Example Analysis
a) Is the InnerFunction() a closure?
Yes, InnerFunction() is a closure because it is an inner function that captures variables from its containing (outer) function OuterFunction(). Specifically, it captures the outerVariable from OuterFunction().

b) What is the output of this program?
The output of this program will be an alert showing 100. Here's the step-by-step explanation:

OuterFunction is called, which defines outerVariable as 100 and the inner function InnerFunction.
OuterFunction returns the InnerFunction function.
innerFunc is assigned the returned InnerFunction.
Calling innerFunc() triggers the InnerFunction which alerts the value of outerVariable, which is 100.
2. Difference Between a Closure and a Scope
Scope: Refers to the visibility or accessibility of variables and functions in a particular part of the code. JavaScript has function scope and block scope. Variables defined within a function or block are not accessible outside of it.

Closure: A feature where an inner function has access to the variables of its outer function even after the outer function has finished execution. Closures allow functions to "remember" the environment in which they were created.

3. Lexical Scope and Its Relation to Closure
Lexical Scope: Refers to the fact that the scope of a variable is determined by its position within the source code. Nested functions have access to variables declared in their outer scope.

Relation to Closure: Closures are a consequence of lexical scoping. When a function is defined inside another function, it captures the variables from its lexical scope, creating a closure. The inner function retains access to the outer function's variables even after the outer function has executed.
*/