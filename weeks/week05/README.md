# WEB222 - Week 5

## Suggested Readings

* [HTML: HyperText Markup Language on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* [Learning HTML: Guides and Tutorials](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

## Running a Development Web Environment

Developing for the web requires at least 3 things pieces of software:

1. a proper code editor which, is aware of HTML, JavaScript, and CSS
1. a web client (i.e., browser), with developer and debugging tools
1. a web server, to serve your web pages over HTTP to a browser

### Code Editor

For our code editor, we will be using [Visual Studio Code](https://code.visualstudio.com/),
which is a free ([open source](https://github.com/Microsoft/vscode)) code editor created
and maintained by Microsoft.  It also works on Windows, macOS, and Linux.  Make
sure you have downloaded and installed it on all the computers you will use for
web development.

### Web Client

For our web client we will use the many web browsers we introduced in Week 1, namely:

* Google [Chrome](https://www.google.com/chrome/) for desktop and Android
* [Microsoft Edge](https://www.microsoft.com/en-ca/windows/microsoft-edge) and Internet Explorer (IE)
* Apple [Safari and Safari for iOS](https://www.apple.com/ca/safari/)
* [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Opera](https://www.opera.com/)

There are many more, and you are highly encouraged to install as many as possible.

### Web Server

We will also need a **web server** to host our web pages and applications.  Installing
and running a web server can be complicated.  Industry-grade web servers like
[Apache](http://httpd.apache.org/) and [nginx](https://www.nginx.com/) are free
and can be installed and run on your local computer; however, they
are much more complicated and powerful than anything we will need for hosting
our initial web pages.

For our purposes, we will use one of the many simple node.js based HTTP servers.  In order to
use them, do the following:

1. Make sure you have installed [node.js](https://nodejs.org/en/) on your computer.
1. In a terminal window, navigate to the directory that you want your web server to host. For example `cd my-website`
1. Now download and run a web server using the [npx](https://docs.npmjs.com/cli/v7/commands/npx) command.

For example, you can use the [serve](https://github.com/vercel/serve) web server like this:

```sh
cd my-website
npx serve
Need to install the following packages:
  serve@14.2.1
Ok to proceed? (y)

   ┌──────────────────────────────────────────┐
   │                                          │
   │   Serving!                               │
   │                                          │
   │   - Local:    http://localhost:3000      │
   │   - Network:  http://10.7.133.229:3000   │
   │                                          │
   │   Copied local address to clipboard!     │
   │                                          │
   └──────────────────────────────────────────┘
```

You can now open your web browser to `http://localhost:3000` and browser your files.
This uses the `http` protocol, and connects you to the special IP address
`127.0.0.1`, also known as [localhost](https://en.wikipedia.org/wiki/Localhost)
(i.e., you can also use `http://localhost:3000`).  The localhost IP address always
refers to *this* computer, and allows you to connect network clients to your own
machine.  The final `:3000` portion of the URL is a port number.  Together,
`http://127.0.0.1:3000` means *connect using HTTP to my local computer on port 3000.*

*NOTE: the second External IP address will be different than the above, but 127.0.0.1 will always be correct.*

When you are done testing your web site, stop the web server by pressing `CTRL-C`
in your terminal window.  To run the server again, use `npx serve`.

## HTML

HTML is the [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML).  It
allows us to write *content* in a document, just as we would in a file created by
a word processor.  Unlike a regular text file, it also includes structural and
layout information about this content.  We literally *mark up* the text of our
document with extra information.

When talking about HTML's markup, we'll often refer to the following terms:

* content: any text content you want to include can usually be written as-is.
* [tag](https://developer.mozilla.org/en-US/docs/Glossary/Tag): separated from regular content, tags are special text (names) wrapped in `<` and `>` characters, for example the paragraph tab `<p>` or the image tag `<img>`.
* [element](https://developer.mozilla.org/en-US/docs/Glossary/Element): everything from the beginning of an opening tag to the closing tag, for example: `<h1>Chapter 1</h1>`.  Here an element is made up of an `<h1>` tag (i.e., opening Heading 1 tag), the text content `Chapter 1`, and a closing `</h1>` tag.  These three components taken together create an `h1` element in the document.
* [attribute](https://developer.mozilla.org/en-US/docs/Glossary/Attribute): optional characteristics of an element defined using the style `name` or `name="value"`, for example `<p id="error-message" hidden>There was an error downloading the file</p>`.  Here two attributes are included with the `p` element: an `id` with value `"error-message"` (in quotes), and the `hidden` attribute (note: not all attributes need to have a value).  [Full list of common attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).
* [entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity): special text that should not be confused for HTML markup.  Entities begin with `&` and end with `;`.  For example, if you need to use the `<` character in your document, you need to use `&lt;` instead, since `<` would be interpreted as part of an HTML tag. `&nbsp;` is a single whitespace and `&amp;` is the `&` symbol.  [Full list of named entities](https://dev.w3.org/html5/html-author/charref).

## HTML Document

The first [HTML page ever created](http://info.cern.ch/hypertext/WWW/TheProject.html) was
built by [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) on August 6, 1991.

Since then, the web has gone through many versions:

* HTML - created in 1990 and standardized in 1997 as HTML 4
* xHTML - a rewrite of HTML using XML in 2000
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - the current standard.

## Basic HTML5 Document

Here's a basic HTML5 web page:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>My Web Page</title>
    </head>

    <body>
        <!-- This is a comment -->
        <h1>Hello World!</h1>
    </body>
</html>
```

Let's break this down and look at what's happening.

1. [`<!doctype html>`](https://developer.mozilla.org/en-US/docs/Glossary/Doctype) tells the browser what kind of document this is (HTML5), and how to interpret/render it
2.  [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) the root element of our document: all other elements will be included within `<html>...</html>`.
3. [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) provides various information *about* the document as opposed to providing its content.  This is metadata that describes the document to search engines, web browsers, and other tools.
4. [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) an example of metadata, in this case defining the [character set](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) used in the document: [utf-8](https://en.wikipedia.org/wiki/UTF-8)
5. [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) an example of a specific (named) metadata element: the document's title, shown in the browser's title bar.  There are a number of specific named metadata elements like this.
6. [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) the content of the document is contained within `<body>...</body>`.
7. `<!-- ... -->` a comment, similar to using `/* ... */` in C or JavaScript
8. [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) a heading element (there are headings 1 through 6), which is a title or sub-title in a document.

Now let's try creating and loading this file in our browser:

1. Make a directory on your computer called `my-website`
1. Create a new file in `my-website` named `index.html` (the `index.html` name is important, as it represents the main entry point to a directory of HTML files and other web resources)
1. Use Visual Studio Code to open your `my-website/index.html` file
1. Copy the HTML we just discussed above, and paste it into your editor
1. Save your `index.html` file 
1. In a terminal, navigate to your `my-website` directory
1. Start a web server by typing `npx serve` (you must do this from **within** the `my-website` directory)
1. Open your web browser (Chrome, Firefox, etc) and enter `http://localhost:3000` in the URL bar
1. Make sure you can see a new page with `Hello World!` in black text.

Now let's make a change to our document:

1. Go back to your editor and change the `index.html` file so that instead of `Hello World!` you have `This is my web page.`
1. Save your `index.html` file.
1. Go back to your browser and hit the **Refresh** button.
1. Make sure your web page now says `This is my web page.`

Every time we update anything in our web page, we have to refresh the web page in our browser.
The web server will serve the most recent version of the file on disk when it is
requested.  Web browsers and servers disconnect from one another after processing a request/response.

## Common HTML Elements

There are many [HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) you'll learn and use, but the following is a good initial set to get you started.

You can see an example page that uses every HTML element [here](https://www.patrickweaver.net/blog/a-blog-post-with-every-html-element/).

### Metadata

Information *about* the document vs. the document's content goes in various [metadata elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Document_metadata):

* [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) - links from this document to external resources, such as CSS stylesheets
* [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) - metadata that can't be included via other elements
* [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) - the document's title

### Major Document Sections

* [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) - the document's root element, containing all other elements
* [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) - machine-readable metadata about the document
* [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) - the document's content

### Content Sections

These are [organizational blocks within the document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning), helping give structure to the content and
provide clues to browsers, screen readers, and other software about how to present the content:

* [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) - introductory material at the top of a document
* [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) - content related to navigation (a menu, index, links, etc)
* [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) - the main content of the document.  For example, a news article's paragraphs vs. ads, links, navigation buttons, etc.
* [`<h1>, <h2>, ..., <h6>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1) - (sub) headers for different sections of content
* [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) - end material (author, copyright, links)

### Text Content

We organize [content into "boxes,"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Text_content) some of which have unique layout characteristics.

* [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) - a generic container we use to attach CSS styles to a particular area of content
* [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) - an ordered list (1, 2, 3) of list items
* [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) - an unordered list (bullets) of list items
* [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) - a list item in an `<ul>` or `<ol>`
* [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) - a paragraph
* [`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) - an extended quotation

### Inline Text

We also use [elements within larger text content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics) to indicate that certain words or phrases are to be shown differently:

* [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) - an "anchor" element, which will produce a hyperlink, allowing users to click and navigate to some other document.
* [`<code>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) - formats the text as computer code vs. regular text.
* [`<em>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) - adds emphasis to the text (often in italics)
* [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) - another generic container, used to define CSS styles

### Multimedia

In addition to text, HTML5 also defines a number of rich [media elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Image_and_multimedia):

* [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) - an element used to embed images in a document.
* [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) - an element used to embed sound in a document.
* [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) - an element used to embed video in a document
* [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) - a graphical area (rectangle) used to draw with either 2D or 3D using JavaScript.

### Scripting

We create dynamic web content and applications through the use of scripting:

* [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) - used to embed executable code in a document, typically JavaScript.

## Examples

* [Lists: ordered and unordered](list-example.html)
* [Anchors: creating hyperlinks](anchor-example.html)
* [Images: using img](img-example.html)
* [Text: text sections](text-example.html)
