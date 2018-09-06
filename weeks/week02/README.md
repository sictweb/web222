# WEB222 - Week 2

## Suggested Readings

* [SpeakingJS,  Chapter 15. Functions](http://speakingjs.com/es5/ch15.html) and [Chapter 16. Variables: Scopes, Environments, and Closures](http://speakingjs.com/es5/ch16.html)
* [Eloquent JavaScript, Chapter 3. Functions](https://eloquentjavascript.net/2nd_edition/02_program_structure.html)
* [Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) and [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) on MDN.

## Functions

A function is a *subprogram*, or a smaller portion of code that
can be called (i.e., invoked) by another part of your program, another function,
or by the environment in response to some user or device action (e.g., clicking a button,
a network request, the page closing). Functions *can* take values (i.e., arguments)
and may *return* a value.

Functions are first-class members of JavaScript, and play a critical role in developing
JavaScript programs.  JavaScript functions can take other functions as arguments,
can return functions as values, can be bound to variables or `Object` properties, and
can even have their own properties.  We'll talk about more of this when we visit JavaScript's
object-oriented features.

Learning to write code in terms of functions takes practice.  JavaScript supports
[functional programming](https://en.wikipedia.org/wiki/Functional_programming). Web
applications are composed of lots of small components that need to get wired together
using functions, have to share data (i.e., state), and interoperate with other code
built into the browser, or in third-party frameworks, libraries, and components.

We use JavaScript functions in a number of ways.  First, we encapsulate
a series of statements into higher-order logic, giving a name to a set of repeatable
steps we can call in different ways and places in our code.  Second, we use them
to define actions to be performed in response to events, whether user initiated or
triggered by the browser.  Third, we use them to define behaviours for objects, what
is normally called a *member function* or *method*.  Fourth, we use them to define
*constructor* functions, which are used to create new objects.  We'll look at all
of these in the coming weeks.

Before we dive into that , we'll try to teach you that writing many smaller functions
is often [better than having a few large ones](https://martinfowler.com/bliki/FunctionLength.html).  Smaller code is [easier to test, easier to understand](https://dzone.com/articles/rule-30-%E2%80%93-when-method-class-or),
and generally [has fewer bugs](https://dubroy.com/blog/method-length-are-short-methods-actually-worse/).

### User-defined Functions

JavaScript has many built-in functions, which we'll get to below; however, it also
allows you to write your own and/or use ones written by other developers (libraries, frameworks).
These user-defined functions can take a number of forms.

The first is the *function declaration*, which looks like this:

```js
// The most basic function, a so-called NO OPERATION function
function noop() {
}

// square function accepts one parameter `n`, returns its value squared.
function square(n) {
    return n * n;
}

// add function accepts two parameters, `a` and `b`, returns their sum.
function add(a, b) {
    return a + b;
}
```

Here the `function` keyword initiates a *function declaration*, followed by a
*name*, a *parameter list* in round parenthesis, and the function's *body* surrounded
by curly braces.  There is no semi-colon after the function body.

The second way to create a function is using a *function expression*.  Recall that
expressions evaluate to a value: a function expression evaluates to a `function` Object.
The resulting value is often bound (i.e., assigned) to a variable, or used as a parameter.

```js
var noop = function() {};

var square = function(n) {
    return n * n;
};

var add = function add(a, b) {
    return a + b;
};
```
 A few things to note:

 * The function's *name* is often omitted.  Instead we return an anonymous function and bind it to a variable.  We'll access it again via the variable name later.  In the case of recursive functions, we sometimes include it to make it easier for functions to call themselves.  You'll see it done both ways.
 * We *did* use a semi-colon at the end of our function expression.  We do this to signify the end of our assignment statement `var add = ... ;`.
 * In general, *function declarations* are likely a better choice (when you can choose) due to subtle errors introduced with declaration order and hosting (see below); however, both are used widely and are useful.

> JavaScript version note: newer versions of JavaScript also include the new `=>` notation, which denotes an [Arrow Function](https://eloquentjavascript.net/03_functions.html#h_/G0LSjQxoo).  When you see `var add = (a, b) => a + b;` it is short-hand for `var add = function(a, b) { return a + b; }`, where `=>` replaces the `function` keyword and comes *after* the parameter list, and the `return` keyword is optional when functions return a single value).  Arrow functions also introduce some new semantics for the `this` keyword, which we'll address later.

Function definitions in both cases take parameter lists, which can be empty, single, or multiple
in length.  Just as with variable declaration, no type information is given:

```js
function emptyParamList() {
}

function singleParam(oneParameter) {
}

function multipleParams(one, two, three, four) {
}
```

Functions always *return* a value, whether implicitly or explicitly. If the `return`
keyword is used, the expression following it is returned from the function.  If
it is omitted, the function will return `undefined`:

```js
function implicitReturnUndefined() {
    // no return keyword, the function will return `undefined` anyway
}

function explicitReturnUndefined() {
    return;
    // return keyword, but no expression given, which is also `undefined`
}

function explicitReturn() {
    return 1;
    // return keyword, followed by `Number` expression evalutes to `Number`
}

function explicitReturn2() {
    return "Hello" + " World!";
    // return keyword, followed by expression evaluating to a `String`
}
```


naming
parameter vs. argument, `arguments` keyword, `arguments.length` and `arguments[i]`, implicit (`undefined)` vs. explicit return
pass by value (primitives) vs. pass by reference (objects like `Array`, `Function`, etc)
binding functions to variables

```js
function greeting(greeting, name) {
    return greeting + " " + name;
}

var sayHi = greeting;  // also bind a reference to greeting to sayHi

// We can now call `greeting` either with `greeting()` or `sayHi()`
console.log(greeting("Hello", "Steven"));
console.log(sayHi("Hi", "Kim"));
```

execution operator, functions aren't executed until they are called.




### Built-in/Global Functions

`parseInt`, `parseFloat`
`isNaN()`, `isFinite()`
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()

Most of JavaScripts "standard library" comes in the form of *methods* on global objects
vs. global functions.  A *method* is a function that is bound to a variable belonging
to an object, also known as a *property*.


[console.*](https://developer.mozilla.org/en-US/docs/Web/API/console).  There are
quite a few worth learning, but here are some to get you started:

* [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log), [`console.warn()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn), and [`console.error`](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)
* [``]()
* [`console.assert()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/assert)
* [`console.count()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
* [`console.dir()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)

Math.* (Math.abs, Math.max, Math.min, Math.random, Math.round)
JSON.* (JSON.parse, JSON.stringify)
Date.* (Date.now, getTime, getMonth, getDay, ...)

Some global functions exist for historical reasons, but should be avoided for performance,
usability, and/or security reasons:

`eval()` dangerous to parse and run user-defined strings
`prompt()` and `alert()` synchronous calls that block the UI thread.


## Scope

JavaScript variables are *declared* with the `var` keyword (or `let`, `const` in es6).  We often
*assign* a value when we *declare* it, though we don't have to do both at once:

```js
var x;      // declared, no assignment (value is `undefined`)
x = 7;      // assignment of previously declared variable
var y = x;  // declaration and assignment combined
```

A variables always has a *scope*, which is the location(s) in the code where it
is usable.  Consider the variables `total` and `value`, as well as the
`add` function below:

```js
var total = 7;                    // global variable, accessible everywhere

function add(n) {
    var value = total + n;        // local variable, accessible within `add` function only 
    return value;
}

console.log("Total is", total);   // Works, because `total` is in the same scope
console.log("Value is", value);   // `undefined`, since `value` isn't defined in this scope
console.log("New Total", add(16)) // Works, because `add` is defined in the same scope
```

Unlike most programming languages, which use *block scope*, JavaScript variables
have *function scope*:

```c
int main()
{
  {
      int x = 10;       // x is declared with block scope
  }
  {
      printf("%d", x);  // Error: x is not accessible here
  }
  return 0;
}
```

Now in JavaScript:

```js
function main() {
    {
        var x = 10;     // x is declared in a block, but is scoped to `main`
    }
    {
        console.log(x); // works, because `x` is accessible everywhere in `main`
    }
}
```

In many languages, we are told to declare variables when we need them.  However,
in JavaScript we tend to define our variables at the top of our functions.  We
don't strictly need to do this, due to *hoisting*.  JavaScript will *hoist* or
raise all variable declarations it finds in a function to the top of their
scope:

```js
function f() {
    var y = x + 1;
    var x = 2;
}
```

At runtime, this will be transformed into the following:

```js
function f() {
    var x;          // declaration is hoisted (but not assignment) to the top

    var y = x + 1;  // `NaN`, since `undefined` + 1 can't be resolved
    x = 2;          // note: `x` is not declared above, only the assignment is now here
```

This also happens when we forget to declare a local variable:

```js
function f() {
    x = 2;          // `x` is assigned a value, but not declared 
    return x + 1;
}
```

At runtime, this will be transformed into the following:

```js
var x;              // `x` is not found in the scope of `f`, so it becomes global

function f() {
    x = 2;
    return x + 1;
}
```

The previous example introduces another important concept with JavaScript scopes, namely,
that scopes can be *nested* within one another.


Hoisting - "moving to the beginning of a scope".  Function declarations are hoisted completely.  You can call a function *before* you declare it.

```js
f(); // this will work, as f's declaration gets hoisted
function f() {
}
f(); // this will also work, because f has been declared as you expect.

g(); // this will not work, since g's declaration will be hoisted, but not the assignment.
var g = function() {};
```

In general, declare and define things *before* you need them.

## Closures

Anonymous functions

Closures make it possible to *associate* some *data* (i.e., the environment) with a
function that can then operate on that data.  We see similar strategies in pure
object-oriented languages, where data (properties) can be associated with an object,
and functions (methods) can then operate on that data.  Closures play a somewhat
similar role, however, they are more lightweight and allow for dynamic (i.e., runtime)
associations.

By connecting data and functionality, closures help to reduce global variables, provide
ways to "hide" data, allow a mechanism for creating private "methods", avoid overwriting
other variables in unexpected ways. 



TODO:

Make sure I've covered what a global variable is, why to avoid

Cover how to invoke/call a function

Dealing with missing arguments, applying default values with ||
Call Stack, [Stack Trace](https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces), Debugging


Closures

[Immediately-Invoked Function Expression (IIFE)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) to avoid global variables, simulate block scope, choose or generate implementations at runtime (e.g., polyfill)

## Practice Exercises

For each of the following, write a function that takes the given arguments, and returns
or produces (e.g., `console.log`) the given result.

1. Given `r` (radius) of a circle, calculate the area of a circle (A = π * r * r).
1. Simulate rolling a dice using `random()`.  The function should allow the caller to specify any number of sides, but default to 6 if no side count is given: `roll()` (assume 6 sided, return random number between 1 and 6) vs. `roll(50)` (50 sided, return number between 1 and 50).
1. Write a function that converts values in Celcius to Farenheit: `convert(0)` should return `"32 F"`.
1. Modify your solution to the previous function to allow a second argument: `"F"` or `"C"`, and use that to determine what the scale of the value is, converting to the opposite: `convert(122, "F")` should return `"50 C"`. 
1.  Function taking any number of arguments (`Number`s), returning `true` if they are all less than 50: `isUnder50(1, 2, 3, 5, 4, 65)` should return `false`.
1. Function allowing any number of arguments (`Number`s), returning their sum: `sum(1, 2, 3)` should return `6`.
1. Function allowing any number of arguments of any type, returns `true` only if none of the arguments is falsy. `allExist(true, true, 1)` should return `true`, but `allExist(1, "1", 0)` should return `false`.
1. Function to create a JavaScript library name generator: `generateName("dog")` should return `"dog.js"`
1. Function to check if a number is a multiple of 3 (returns `true` or `false`)
1. Check if a number is between two other numbers, being inclusive if the final argument is true: `checkBetween(66, 1, 50, true)` should return `false`.
1. Function to calculate the HST (13%) on a purchase amount
1. Function to subtract a discount % from a total.  If no % is given, return the original value.
1. Function that takes a number of seconds as a `Number`, returning a `String` formatted like `"X Days, Y Hours, Z Minutes"` rounded to the nearest minute.
1. Modify your solution above to only include units that make sense: `"1 Minute"` vs. `"3 Hours, 5 Minutes"` vs. `"1 Day, 1 Hour, 56 Minutes"` etc
1. Function that takes any number of arguments (`Number`s), and returns them in reverse order, concatenated together as a String: `flip(1, 2, 3)` should return `"321"`
1. Function that takes two `Number`s and returns their sum as an `Integer` value (i.e., no decimal portion): `intSum(1.6, 3.333333)` should return `4`
1. Function that returns the number of matches found for the first argument in the remaining arguments: `findMatches(66, 1, 345, 2334, 66, 67, 66)` should return `2`
1. Function to log all arguments larger than `255`: `showOutsideByteRange(1, 5, 233, 255, 256, 0)` should log `256` to the `console`
1. Function that takes a `String` and returns its value properly encoded for use in a URL. `prepareString("hello world")` should return `"hello%20world"`
1. Using the previous function, write an enclosing function that takes any number of `String` arguments and returns them in encoded form, concatenated together like so: `"?...&...&..."` where "..." are the encoded strings.  `buildQueryString("hello world", "goodnight moon")` should return `"?hello%20world&goodnight%20moon"`
1. Function that takes a `Function` followed by any number of `Number`s, and applies the function to all the numbers, returning the total: `applyFn(function(x) { return x * x;}, 1, 2, 3)` should return 14.
