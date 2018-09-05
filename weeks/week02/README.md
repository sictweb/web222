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

Math.* (Math.abs, Math.max, Math.min, Math.random, Math.round)
JSON.* (JSON.parse, JSON.stringify)
Date.* (Date.now, getTime, getMonth, getDay, ...)

## Scope

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


TODO:

Dealing with missing arguments, applying default values with ||
Call Stack, Debugging



[Immediately-Invoked Function Expression (IIFE)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) to avoid global variables, simulate block scope, choose or generate implementations at runtime (e.g., polyfill)
