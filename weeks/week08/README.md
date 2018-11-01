# WEB222 - Week 8

## Suggested Readings

* [Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
* [Learning to Style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [CSS: Cascading Style Sheets on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Cascading Style Sheets (CSS)

In HTML5 we don't include markup related to how our page should look; instead we focus on
its structure, layout, and organization.  We put all this information in style sheets: text
files that define CSS *selectors* and *rules* for how to style our HTML elements.

CSS allows us to specify styles, layout, positioning, and other "style" properties for HTML elements.
CSS makes it possible for a page's style information to be separated from its structure and content.
Consider how much of an impact CSS can have on the same HTML:

* [CSS Zen Garden](http://www.csszengarden.com/)
* [CSS Zen Garden HTML file](zengarden.html)
* [CSS Zen Garden CSS file](zengarden-style.css)

## CSS Syntax

CSS syntax is made up of *rules*, which are broken into two parts:

1. a *selector*, specifying the element(s) that should have the rules applied
1. one or more *declarations*, which are *key/value* pairs surrounded by `{...}` braces

```css
h1 {
    color: blue;
    font-size: 12px;
}
```

In this example, the *selector* is `h1`, which indicates that we want the following
rules to be applied to level-1 heading elements (i.e., all `<h1></h1>` elements in the document).
Next comes a list of two definitions, each ending with a `;`.  These declarations
follow the usual key/value syntax, with a *property* name coming before the `:`, and a *value*
coming after:

* `color: blue;` says we want to use the colour (note the spelling) blue
* `font-size: 12px;` says we want the font to be 12px.

Here's another example:

```css
p {
    color: red;
    text-align: center;
    text-decoration: underline;
}
```

This indicates we want all `<p></p>` elements in the document to have red, centered, underlined text.

## Where to Put CSS

CSS can come from a number of sources in an HTML page:

1. Inline
1. Internal Embedded
1. External File(s)
1. The browser itself (e.g., [default styles](https://github.com/mozilla/gecko-dev/blob/master/layout/style/res/html.css), or extra styles injected by a browser extension)

Browsers apply styles to elements using a priority order that matches the list above.
If more than one style rule is specified for an element, the browser will prefer whatever
is defined in Inline styles over Internal Embedded, Internal Embedded over External files, etc.  

### Inline Example

CSS rules can be placed directly on an element via the `style` attribute:

```html
<div style="background-color: green">...</div>
```

### Internal Embedded

If we want to apply the same CSS rules to more than one element, it makes more sense to
*not* duplicate them on every element's `style` attribute.  One solution is to use an internal embedded
`<style>` element in the `<head>` or `<body>`, similar to how embedded `<script>` elements work:

```html
<style>
    p { color: red; }

    div {
        background-color: blue;
        text-align: center;
    }
</style>
```

### External File(s)

Putting large amounts of CSS in `<style>` elements makes our HTML harder to read and maintain
(CSS is about separating style from structure), and also causes our page to perform worse
in terms of load times (i.e., the styles can't be cached by the browser).  To overcome this,
we often include external `.css` files via the [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
element within the document's `<head>`:

```html
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css" type="text/css">
    </head>
```

We can include many stylesheets in this way (i.e., everything doesn't have to go in one file),
and we can include `.css` files on the same origin, or a remote origin:

```html
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="styles.css" type="text/css">
    </head>
```

In the example above, the page uses the popular [Bootstrap](https://getbootstrap.com/) CSS styles
along with some locally (i.e., local to the web server) styles in `styles.css`.

A `.css` file included in this way can also [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
to have even more `.css` files get loaded at runtime:

```css
/* Import Font Awesome */
@import url(https://use.fontawesome.com/releases/v5.4.2/css/all.css)
```

In this example, the popular [Font Awesome](https://fontawesome.com/) CSS library for font icons
has been imported via a `.css` file.

## CSS Selectors

We've already learned a few CSS Selectors when we discussed `querySelector()` and
`querySelectorAll()`.  The word `Selector` refers to the fact that these methods take
a CSS Selector and return DOM elements that match.  For example:

* `document.querySelector('#output')` would return the element with attribute `id="output"`
* `document.querySelectorAll('.logo')` would return all elements with a class of `logo`
* `document.querySelectorAll('img')` would return all `<img>` elements

These same selectors, and many more, can also be used in our CSS rulesets.

### Tag/Type Selectors

The name of an HTML element can be used to specify the styles associated with all
elements of the given type.  For example, to [indent all `<p>` text](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent) in our document, we could do this:

```css
p {
    text-indent: 20px;
}
```

### Class Selectors

Often we want to apply styles to *some* but not *all* elements of a certain kind.  Perhaps
we only want some of our page's `<p>` elements to have a particular look.  To achieve this, 
we define a *class*, and then put that class on the elements that require it:

```html
<style>
    .demo {
        text-decoration: underline red;
    }
</style>

<p>This is a paragraph that won't get the styles below applied to it (doesn't include the class)</p>
<p class="demo">This paragraph will get the styling applied.</p>
<p class="demo">And so will this one.</p>
```

A class can be applied to elements that aren't of the same type:

```html
<style>
    .invisible {
        display: none;
    }
</style>

<h1 class="invisible">Title</p>
<p class="invisible">This is a paragraph.</p>
```

I this example, both the `<h1>` element, and the `<p>` element will have the `display: none` style applied,
hiding them so they don't appear in the page.

If we want to be more specific, and only apply styles to elements of a given type which also have
a given class, we can do this:

```html
<style>
    p.note {
        font-weight: bold;
    }
</style>

<p class="note">This is a paragraph that also uses the note class.</p>
<div class="note">This div uses the note class too, but because we said p.note, no styles are used.</div>
```

An element can also have multiple classes applied, each one adding different styling:

```html
<style>
    .invisible {
        display: none;
    }

    .example {
        color: green;
        background-color: red;
    }
</style>

<p class="invisible example">This is a paragraph that uses two classes at once.</p>
```

### ID Selectors

In many cases, we have only a single element that should use styles.  Using a type
or class selector would be overly broad, and so we tend to use an `id` instead.
Recall that only one HTML element in a document can have a given `id` attribute:
it must be unique.

```html
<style>
    #summary {
        background-color: skyblue;
    }
</style>

<div id="summary"></div>
```

When we use the `id` as a selector, we prefix it with the `#` symbol.  Notice that
the HTML does *not* use the `#` symbol though.

### Contextual Selectors

Another common way to write selectors is to use the position of elements in the DOM.
The *context selector* indicates the context, or placement/nesting (i.e., determined by the
parent node) of the element.

For example, if we want to apply styles to `<p>` elements that are children of `<div>`
elements, we could do this:

```html
<style>
    div p {
        font-size: 16px;
    }
</style>

<p>This paragraph will not receive the styling</p>

<div>
    <p>This paragraph will receive the styling.</p>
    <p>This paragraph will receive the styling also.</p>
</div>
```

### Grouping Selectors

As our CSS grows, it's common that we'll notice that we're repeating the same things
multiple times.  Instead of doing this, we can group a number of selectors together into
a comma-separated list:

```css
html, body {
    height: 100%
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Serif;
    color: blue;
}
```

Here we've used grouping twice to cut-down on the number of times we have to repeat things.
In the first case, we defined a height of `100%` (full height of the window) for the `<html>`
and `<body>` elements (they don't have a height by default, and will only be as tall as
the content within them).  We've also declared some font and color information for all the
headings we want to use.

## Containers for Styling

We've discussed `<div>` and `<span>` in the past, but their purpose may not have been clear.
Why bother wrapping other elements in `<div>...</div>` or `<span>...</span>` when they don't
display any different?

With CSS we can now start to take advantage of what they provide.  If we think of them as
containers which can be used to group styling, their purpose will become more clear.

A `<div>` is a block level element, and `<span>` an inline element.  Depending on how we want
to group and apply styling, we can use one or both.  Consider the following:

```html
<style>
    .info-box {
        border: solid green;
    }

    .info-box p {
        font-family: Serif;
    }

    .info-box span {
        font-weight: bold;
    }

    .info-box img {
        width: 75px;
        height: 75px;
    }
</style>

<p>This paragraph won't have any special style applied.  Neither will this <span>span</span>.</p>

<div class="info-box">
    <p><span>Name:</span> Thomas Lee</p>
    <p><span>Age:</span> 23</p>
    <img src="tlee.jpg">
</div>
```

## CSS Units

Many CSS values require units to be specified, for example, font sizes, widths, heights, etc.
At first you might think that we should specify things in pixels; however, browsers need to work
on such a wide variety of hardware and render to so many different displays (watches to billboards), 
we need more options.  It's also important to be able to specify sizes using relative units vs. fixed,
for layouts that need to adapt to changing conditions and still retain the correct proportions.

There is one exception, and that is for `0` (i.e., zero), which never needs a unit (i.e., `0px` is the
same as `0%`, etc).

The most common units we use in CSS are:

```
1em = 12pt = 16px = 100%
```

Let's look at each of these in turn:

* `em` (the width of the capital letter `M`) - a scalable unit that is used in web media, and is equal to the current `font-size`.  If the `font-size` is `12pt`, `1em` is the same as `12pt`.  If the `font-size` is changed, `1em` changes to match.  We can also use multiples: `2em` is twice the `font-size`, and `.5em` is half.  Using `em` for sizes is popular on the web, since things have to scale on mobile vs. desktop (i.e., fixed unit sizes don't work as the screen shrinks/expands).
* `pt` - a fixed-size *Point* unit that comes from print media, where `1pt` equals `1/72` of an inch.
* `px` - pixels are fixed size units for web media (screens), and `1px` is equal to one dot on a computer display.  We use `px` on the web when we need "pixel perfect" sizing (e.g., image sizes).
* `%` - the percent unit is similar to `em` in that it scales with the size of the display.  `100%` is the same as the current `font-size`.
* `vw`, `vh` - the viewport width and height units are percentages of the visible space in the viewport (the part of the page you can see, the window's width and height).  `1vw` is the same as `1%` of the width of the viewport, and `80vh` is the same as `80%` of the visible height.

You will also sometimes encounter other ways of measurement that use full words: `xx-small, x-small, small, medium, large, x-large, xx-large, smaller, larger, thin, medium, thick`

Here's an example that uses a number of the units mentioned above:

```html
<style>
    html, body {
        height: 100vh;
    }

    .box {
        margin: 10px;
        font-size: 2em;
        height: 150px;
        border: medium solid black;
    }
</style>
<div class="box"></div>
```

## CSS Colours (`color`)

CSS allows us to define colour values for many declarations.  We do so by specifying
a colour using one of the following notations:

* Hexadecimal Red, Green, Blue: written using 3 double-digit hex numbers, and starting with a `#` sign.  Each of the 3 pairs represents a value between 0 and 255 for Red, Green, and Blue: `#000000` is pure Black and `#ffffff` is pure White, and `#ffd700` is Gold.
* RGB or RGBA notation: here the red, green, blue, and sometimes alpha (i.e., opacity) are defined in decimal notation: `#ffffff` is the same as `rgb(255, 255, 255)` and `#ffd700` is the same as `rgb(255, 215, 0)`.  If we want to define how see-through the colour is (by default you can't see through a colour), we add an alpha value: `rgba(0, 191, 0, 0.5)` means that the colour will be 50% see through.
* Named colours: some colours are so common that they have their own [name defined in the CSS standard](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords).  For example: `white`, `black`, `green`, `red`, but also `chocolate`, `darkorange`, `peru`, etc.

The easiest way to understand this is using a [Colour Picker tool](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool), which lets you visually see the difference in changing values.