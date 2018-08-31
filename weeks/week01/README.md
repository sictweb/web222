# WEB222 - Week 1

## Internet Architecture

### Overview

* [How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)
* [How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

### Application Protocols

The web runs on-top of TCP/IP networks using a number of communication protocols, including:

* [Domain Name System (DNS)](https://www.cloudflare.com/learning/dns/what-is-dns/)
* [Hypertext Transfer Protocol (HTTP)](https://dev.opera.com/articles/http-basic-introduction/)
    * [How to get things on the web](https://dev.opera.com/articles/http-lets-get-it-on/)
    * [HTTP Responses](https://dev.opera.com/articles/http-response-codes/)
* [Hypertext Transfer Protocol Secure (HTTPS)](https://en.wikipedia.org/wiki/HTTPS)

There are many more as well (SMTP, FTP, POP, IMAP, SSH, etc).

We often use the terms "Web" and "Internet" interchangeably, however, they aren't
the same.  The *World Wide Web* (WWW) runs on top of the Internet using HTTP, and
allows us to access web services, request resources (i.e., pages, images), and
transmit data between clients and servers.  The web is a subset of the Internet.

The web isn't owned or controlled by any single company, organization, or government.
Instead, it is defined as a set of [open standards](https://en.wikipedia.org/wiki/Web_standards),
which everyone building and using the web relies upon.  Some examples of these
standards include [HTML](https://html.spec.whatwg.org/multipage/), [HTTP](https://tools.ietf.org/html/rfc7230), [SVG](https://www.w3.org/TR/SVG11/), and many more.

### HTTP Requests and Responses

The Hypertext Transfer Protocol is a stateless, client-server model for formatting
requests and responses between computers on the Internet.  This means one computer
makes a request (the client) to another (the server), and after the response is returned,
the connection is closed.

The server listens for requests, and fulfills (or rejects) those requests by returning
(or generating) the requested resources, such as images, web pages, videos, or other data.

#### URLs

Web resources are reachable via unique identifiers called a *Uniform Resource Locator* or
*URL*.  Consider the URL for this course's outline:

https://ict.senecacollege.ca/course/web222?q=course/web222

A URL contains all the information necessary for a web client (e.g., a browser) to request
the resource.  In the URL given above we have:

* protocol: `https:` - the resource is available using the HTTPS (i.e., secure HTTP) protocol
* domain: `ict.senecacollege.ca` - the domain (domain name) of the server.  We could also have substituted the IP address (`142.204.140.190`), but it's easier to remember domain names.
* port: Not Given - if not specified, the port is the default for HTTP `80` or `443` for HTTPS.  It could have been specified by appending `:443` like so: `https://ict.senecacollege.ca:443`
* origin: combining the protocol, domain, and port gives us a unique origin, `https://ict.senecacollege.ca`.  Origins play a central role in the web's security model.
* path: `/course/web222` - a filesystem-like path to the resource on the server.  It may or may not end with a file extension (e.g., you might also have seen another server use `/course/web222.html`)
* query string: `?q=course/web222` - additional parameters sent to the server as part of the URL, of the form `name=value`

URLs can only contain a limited set of characters, and anything outside that set has to be *encoded*.
This includes things like spaces, non-ASCII characters, Unicode, etc.

**NOTE*: we'll discuss this again later, but be aware that the Web Platform provides a number of APIs (i.e., functions) you can call from JavaScript to help construct, parse, encode/decode, and work with URLs:

* [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL)
* [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 
* [`decodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
* [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
* [`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)

```js
encodeURI("http://www.me.com/My Resumé.html");
// "http://www.me.com/My%20Resum%C3%A9.html"
decodeURI("http://www.me.com/My%20Resum%C3%A9.html")
// "http://www.me.com/My Resumé.html"

encodeURIComponent("Seneca College")
// "Seneca%20College"
decodeURIComponent("Seneca%20College")
// "Seneca College"

new URL("https://ict.senecacollege.ca/course/web222?q=course/web222")
// {
//   hash: "",
//   host: "ict.senecacollege.ca",
//   hostname: "ict.senecacollege.ca",
//   href: "https://ict.senecacollege.ca/course/web222?q=course/web222",
//   origin: "https://ict.senecacollege.ca",
//   password: "",
//   pathname: "/course/web222",
//   port: "",
//   protocol: "https:",
//   search: "?q=course/web222",
//   username: ""
// }
```

#### Requests

A URL describes the location (i.e., server, pathname) and how to interpret (i.e., which protocol) a resource on the Internet.  To get the resource, we need to request it by sending a properly formatted
HTTP Request to the appropriate server:

```http
GET /course/web222 HTTP/1.1 
Host: ict.senecacollege.ca 
```

Here we do a `GET` request using HTTP version 1.1 for the resource at the path `/course/web222`
on the server named `ict.senecacollege.ca`.

There are various *HTTP Verbs* we can use other than `GET`, which allow us to request that
resources be returned, created, deleted, updated, etc.  The most common include:

* `GET` - retrieve the data at the given URL
* `POST` - create a new resource at the given URL based on the data sent along with the request in its *body*
* `PUT` - update an existing resource at the given URL with the data sent along with the request in its *body*
* `DELETE` - delete the resource at the given URL

We can use a URL in many ways, for example, via the command line using a tool like [curl](https://curl.haxx.se/):

```bash
$ curl https://ict.senecacollege.ca/course/web222?q=course/web222

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html lang="en" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  ...
  <p>School of ICT | Faculty of Applied Science and Engineering Technology | Seneca College | Toronto, Canada<br /><a href="/contact-us">Questions? Click here to contact us.</a></p>

</section> <!-- /.block -->
  </div>
</footer>
  <script src="//ict.senecacollege.ca/sites/default/files/public_files/advagg_js/js__i11V-7AETPhfL9YzRpXBpECwVkYyQ_ahu2eHxES_mK0__Tgy2Gm7LmUJY8GXZeWxVbS51f3txED35LX1ul4UiOfk__wTFB7oqRI9plmqzTHohaf0cp34LSVimp29dS48vpVW4.js"></script>
</body>
</html> 
```

#### Responses

Upon receiving a request for a URL, the server will respond with an *HTTP Response*, which includes
information about the response, and possibly the resource being requested.  Let's use `curl` again,
but this time ask that it `--include` the response headers:

```bash
$ curl --include https://ict.senecacollege.ca/course/web222?q=course/web222

HTTP/1.1 200 OK
Date: Thu, 30 Aug 2018 20:14:30 GMT
Server: Apache/2.4.29 (Unix) OpenSSL/1.0.2l PHP/5.6.30
X-Powered-By: PHP/5.6.30
Expires: Sun, 19 Nov 1978 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, post-check=0, pre-check=0
Content-Language: en
X-Generator: Drupal 7 (http://drupal.org)
Transfer-Encoding: chunked
Content-Type: text/html; charset=utf-8

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html lang="en" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
...
```

In this case, we see a two-part structure: first a set of Response Headers; then
the actual HTML Response Body.  The two are separated by a blank line.  The headers
provide extra metadata about the response, the resource being returned, the server, etc.

[HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) are well defined,
and easy to lookup via Google, MDN, or StackOverflow.  They follow the form `name:value`, and
can be upper- or lower-case.

In the response above, we see a number of interesting things:

* `200 OK` - tells us that the requested resource was successful located and returned.
* Info about the `Date`, when the response `Expires`, whether to cache it (`Cache-Control`) on the client
* The `Content-Language` is English, and the `Content-Type` is `text`, and more specifically, `html` (a web page) using [UTF8 text encoding](https://en.wikipedia.org/wiki/UTF-8).
* That the `Server` is running Apache, OpenSSL and PHP, as well as the versions being used
* Finally some non-standard `X-...` style headers are included, which are extra, user-defined bits of data, for example, that Drupal version 7 was used to create the document.

After these headers we have a blank line, followed by the body of our response: the actual HTML document.

What if we requested a URL that we know doesn't exist?

```bash
$ curl --include https://ict.senecacollege.ca/course/web000

HTTP/1.1 302 Found
Date: Thu, 30 Aug 2018 20:25:28 GMT
Server: Apache/2.4.29 (Unix) OpenSSL/1.0.2l PHP/5.6.30
X-Powered-By: PHP/5.6.30
Expires: Sun, 19 Nov 1978 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, post-check=0, pre-check=0
Location: https://ict.senecacollege.ca/Course/CourseNotFound?=web000
Content-Length: 0
Content-Type: text/html; charset=UTF-8

```

This time, instead of a `200` status code, we get `302`.  [This indicates](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) that the resource has moved,
and later in the headers we are given a new `Location` to try.  Notice there is no body (not every response will include one).

Let's try following the suggested redirect URL:

```bash
$ curl --include https://ict.senecacollege.ca/Course/CourseNotFound?=web000

HTTP/1.1 404 Not Found
Date: Thu, 30 Aug 2018 20:29:11 GMT
Server: Apache/2.4.29 (Unix) OpenSSL/1.0.2l PHP/5.6.30
X-Powered-By: PHP/5.6.30
Expires: Sun, 19 Nov 1978 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, post-check=0, pre-check=0
Content-Language: en
Link: </?q=Course/CourseNotFound>; rel="canonical",</?q=node/891>; rel="shortlink"
X-Generator: Drupal 7 (http://drupal.org)
Content-Type: text/html; charset=utf-8

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html lang="en" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  ...
```

Now a third response code has been returned, [`404 Not Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) as well as another HTML page
telling us our course couldn't be located.

There are dozens of response codes, but they fall into a few categories you should learn:

* `1xx` - [information responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Information_responses)
* `2xx` – [successful responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Successful_responses)
* `3xx` - [redirection messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages)
* `4xx` – [client error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Client_error_responses)
* `5xx` – [server error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Server_error_responses)

### Web Browsers

So far we've been using `curl` to work with URLs, but a more common tool is a Web Browser.
A good way to think about a browser is as an operating system vs. an application.
A web browser provides implementations of the web's open standards.  This means
it knows how to communicate HTTP, DNS and other protocols over the network in order
to request resources via URLs.  It also contains parsers for the web's programming languages,
and knows how to render, execute, and lay-out web content for use by a user.  Browsers
also contain lots of security features, and allow users to download and run untrusted code
(i.e., code from a random server on the Internet), without fear of infecting their
computers.

Some of the the largest software companies and vendors in the world all have their own browsers:

* Google [Chrome](https://www.google.com/chrome/) for desktop and Android
* [Microsoft Edge](https://www.microsoft.com/en-ca/windows/microsoft-edge) and Internet Explorer (IE)
* Apple [Safari and Safari for iOS](https://www.apple.com/ca/safari/)
* [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [Samsung Internet for Android](https://www.samsung.com/us/support/owners/app/samsung-internet)
* [Opera](https://www.opera.com/)

There are hundreds more, and thousands of different OS and version combinations. There are
good stats on usage info for [desktop](http://gs.statcounter.com/browser-market-share/desktop/worldwide)
and [mobile](http://gs.statcounter.com/browser-market-share/mobile/worldwide), but no one
company or browser controls the entire web.

As a web developer, you can't ever know for sure which browser your users will have.
This means you have to test your web applications in different browsers and on different platforms
in order to make sure the experience is good for as many people as possible.

The web is also constantly evolving, as new standards are written, APIs and features added
to the web platform, and older technologies retired.  A good way to stay on top of what
does and doesn't work in a particular browser is to use https://caniuse.com/.  This
is a service that keeps track of web platform features, and which browsers do and don't
implement it.

For example, you can look at the [`URL()`] API we discussed previously at https://caniuse.com/#feat=url.
Notice that it's widely supported (green) in most browsers (88.47% at the time of writing), but not supported (red) in some older browsers like Internet Explorer.

Because the web is so big, so complicated, so old, and used by so many people for so many different
and competing things, it's common for things to break, for there to be bugs, and for you to have
to adapt your code to work in interesting ways.  The good news is, it means there are lots
of jobs for web developers to make sure it all keeps working.

### Uniqueness of the Web as a Platform

We've been discussing HTTP as a way to request URLs be transferred between clients and servers.
The web is globally distributed set of 

* services - requesting *data* ([JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), [XML](https://developer.mozilla.org/en-US/docs/XML_introduction), binary, etc) to be used in code (vs. looked at by a user)
* pages, documents, and media - both static and dynamic user viewable resources (web pages), which link to other similar resources.
* applications - a combination of the above, providing rich user interfaces for working with real-time data or other complex information, alone or in networked (i.e., collaborative) ways.

The web can be read-only.  The web can also be interactive (video games), editable (wikis), personal (blog), and productive (e-commerce).

The web is *linkable*, which makes it something that can be indexed, searched, navigated, and connected. The web gets more valuable as its connections grow: just look at all the other pages and resources this page links to itself!

The web allows users to access and run remote applications *without* needing to install new software.  The deployment model of the web is HTTP.  Compare that to traditional software that has to be manually installed on every computer that needs to run it.  Same with mobile phones and apps in the various app stores.  Updates get *installed* every time you use a URL.

The web works on *every* computing platform.  You can access and use the web on desktop and mobile computers, on TVs and smartwatches, on Windows and Mac, in e-Readers and video game consoles.  The web works everywhere, and learning how to develop software for the web extends your reach into all those platforms.

### Front-End Web Development: HTML5, CSS, JavaScript, and friends

When we talk about programming for the web in a browser, we often refer to this as
*Front-End Web Development*.  This is in contrast to server-side, or *Back-End Development*.
In this course we will be focused on the front-end, leaving back-end for subsequent courses.

The modern web, and modern web browsers, are incredibly powerful.  What was once possible
only on native operating systems can now be done within browsers using only web technologies.

The set of front-end technologies that make this possible, and are commonly referred to as the Web Platform, include:

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - the Hypertext Markup Language, and its associated APIs, provide a way to define and structure content
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets allow developers and designers to create beautiful and functional UIs for the web
* [JS](https://developer.mozilla.org/bm/docs/Web/JavaScript) - JavaScript allows complex user interaction with web content, and dynamic behaviours in documents and applications.
* [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - the Document Object Model and its APIs allows scripts and web content to interact at runtime.
* [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) - hundreds of APIs provide access to hardware devices, networking, files, 2D and 3D graphics, databases, and so much more.

In addition to these primary technologies, an increasingly important set of secondary,
or third-party technologies are also in play:

* Libraries, Modules - [Bootstrap](https://getbootstrap.com/), [Leaflet](http://leafletjs.com/), [Three.js](http://threejs.org/), [Lodash](http://lodash.com/), ...
* Frameworks - [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue.js](https://vuejs.org/), ...
* Tooling - [Babel](https://babeljs.io/), [webpack](https://webpack.js.org/), [ESLint](https://eslint.org/), [TypeScript](https://www.typescriptlang.org/), ...

The front-end web stack is also increasingly being used to build software outside
the browser, both on desktop and mobile using things like [Electron](https://electronjs.org/) and [Progressive Web Apps (PWA)](https://developers.google.com/web/progressive-web-apps/).
[Visual Studio Code](https://code.visualstudio.com/), for example, is written using web technologies and runs on Electron, which is one of the reasons it works across so many platforms.

## Introduction to JavaScript

The first front-end web technology we will learn is JavaScript.  JavaScript (often shortened to JS)
is a lightweight, interpreted or JIT (i.e., Just In Time) compiled language mean to be
embedded in host environments, for example, web browsers.

JavaScript looks [similar to C/C++ or Java](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#JavaScript_and_the_ECMAScript_Specification#JavaScript_and_Java) in some of its syntax, but is quite different
in philosophy.  For example, JavaScript is a dynamic scripting language supporting
multiple programming styles, from object-oriented to imperative to functional.

JavaScript is one of, if not the [most popular programming languages in the world](https://redmonk.com/sogrady/2018/08/10/language-rankings-6-18/), and has been for many years.
Learning JavaScript well will be a tremendous asset to any software developer, since so
much of the software we use is built using JS.

> JavaScript's many versions: JavaScript is an evolving language, and you'll hear it [referred to by a number of names](https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5), including: ECMAScript (or ES), ES5, ES6, ES2015, ES2017, etc.  [ECMA is the European Computer Manufacturers Association, which is the standards body responsible for the JS language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#JavaScript_and_the_ECMAScript_Specification). As the standard evolves, the specification goes through different versions, adding or changing features and syntax.  In this course we will primarily focus on ECMAScript 5 (ES5), which all browsers support.  We will also sometimes use newer features of the language from ECMAScript 6 (ES6), which most browsers support.  Language feature support across browsers is [maintained in this table](http://kangax.github.io/compat-table/es6/).

### JavaScript Resources

Throughout the coming weeks, we'll make use of a number of important online resources.
They are listed here so you can make yourself aware of them, and begin to explore on your own.
All programmers, no matter how experienced, have to return to these documents on
a routine basis, so it's good to know about them.

* [JavaScript on MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript)
    * [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Eloquent JavaScript](https://eloquentjavascript.net/)
* [Speaking JavaScript (ES5)](http://speakingjs.com/es5/index.html)
* [Exploring ES6](http://exploringjs.com/es6/index.html)

### JavaScript Environments

Unlike C, which is compiled to machine code, JavaScript is meant to be run within a host
environment.  There are many possible environments, but we will focus on two:

* Web Browsers, and their associated developer tools, primarily:
    * [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
    * [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
* [node.js](https://nodejs.org/), and its [command line REPL (Read-Eval-Print-Loop)](http://www.tutorialsteacher.com/nodejs/nodejs-console-repl)

#### JavaScript Engines

JavaScript is parsed, executed, and managed (i.e., memory, garbage collection, etc) by an [engine](https://en.wikipedia.org/wiki/JavaScript_engine) written in C/C++.
There are a number of JavaScript engines available, the most common of which are:

* [V8](https://developers.google.com/v8/), maintained an used by Google in Chrome and in node.js
* [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), maintained and used by Mozilla in Firefox
* [ChakraCore](https://github.com/microsoft/chakracore), maintained and used by Microsoft in Edge
* [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore), maintained and used by Apple in Safari

These engines, much like car engines, are meant to be used within a larger context.  We will
encounter them indirectly via web browsers and in node.js.

It's not important to understand a lot about each of these engines at this point,
other than to be aware that each has its own implementation of the ECMAScript standards, its own performance characteristics (i.e., some are faster at certain things), as well as its own set of bugs.  

#### Running JavaScript Programs

JavaScript statements can be stored in an external file with a `.js` file extension,
or embedded within HTML code via the HTML `<script>` element.  As a developer, you also
have a number of options for writing and executing JavaScript statements or files:

1. From the command line via [node.js](https://nodejs.org/en/).  You'll learn more about node.js in subsequent courses, but we'll also use it sometimes in this course to quickly try test JavaScript expressions, and to run JavaScript programs outside the browser.

2. Using [Firefox's Developer Tools](https://developer.mozilla.org/en-US/docs/Tools), and in particular the [Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console), [JavaScript Debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger), and [Scratchpad](https://developer.mozilla.org/en-US/docs/Tools/Scratchpad).

3. Using [Chrome's DevTools](https://developers.google.com/web/tools/chrome-devtools/), and in particular the [Console](https://developers.google.com/web/tools/chrome-devtools/console/get-started) and [Sources Debugger](https://developers.google.com/web/tools/chrome-devtools/javascript/)

4. Finally, we'll eventually write JavaScript that connects with HTML and CSS to create dynamic web pages and applications.

Take some time to install and familiarize yourself with all of the methods listed above.

### JavaScript Syntax

#### Recommend Readings

We will spend a month learning JavaScript, and there is no one best way to do it.
The more you read and experiment the better.  The following chapters/pages give a good overview:

* [Chapter 1. Basic JavaScript](http://speakingjs.com/es5/ch01.html) of [Speaking JS (ES5)](http://speakingjs.com/es5).
* [MDN JavaScript Introduction Tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions)
* [Chapter 1. Values, Types and Operators](https://eloquentjavascript.net/2nd_edition/01_values.html) and [Chapter 2. Program Structure](https://eloquentjavascript.net/2nd_edition/02_program_structure.html) of [Eloquent JavaScript (2nd Ed.)](https://eloquentjavascript.net/2nd_edition/).  NOTE: the [third edition](https://eloquentjavascript.net/) covers ES6, which you can also read if you like, but be aware that it uses more modern syntax.

#### Important Ideas

* Like C, JavaScript is Case-Sensitive: `customerCount` is not the same thing as `CustomerCount` or `customercount`
* Name things using `camelCase` (first letter lowercase, subsequent words start with uppercase) vs. `snake_case`.
* Semicolons are optional in JavaScript, but highly recommended.  We'll expect you to use them in this course, and using them will make working in C++, Java, CSS, etc. much easier, since you have to use them there.

* Comments work like C/C++, and can be single or multi-line

```js
// This is a single line comment. NOTE: the space between the // and first letter.

/*
 This is a multi-line comment,
 and can be as long as you need.
 */
```

* Whitespace: JavaScript will mostly ignore whitespace (spaces, tabs, newlines).  In this course we will expect you to use good indentation practices, and for your code to be clean and readable. 

```js
// This is poorly indented, and needs more whitespace
function add(a,b ){
if(!b){
        return a;
}else {
return a+b;        
}}

// This is much more readable due to the use of whitespace
function add(a, b) {
    if(!b) {
        return a; 
    } else {
        return a + b;
    }
}
```

* JavaScript statements: a JavaScript program typically consists of a series of statements. A statement is a single-line of instruction made up of objects, expressions, variables, and events/event handlers.
* Block statement: a block statement, or compound statement, is a group of statements that are treated as a single entity and are grouped within curly brackets `{...}`. Opening and closing braces need to work in pairs. For example, if you use the left brace `{` to indicate the start of a block, then you must use the right brace `}` to end it. The same matching pairs applies to single `'......'` and double `"......."` quotes to designate text strings.

* Variables are declared using the [`var` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).  You must use the `var` keyword to precede a variable name, but you do not need to provide a type, since the initial value will set the type.

> JavaScript version note: newer versions of JavaScript also support the [`let` and `const` keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions#Variables) for variable declaration.  We will primarily use `var` in this course, but slowly start to add `let` and `const` as you become more familiar with the language.

```js
var year;
var seasonName = "Summer";

// Referring to and using syntax:
year = 2018;
console.log(seasonName, year);
```

* JavaScript Variables: variables must start with a letter (`a-zA-z`), underscore (`_`), or dollar sign (`$`).  They cannot be a [reserved (key) word](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords). Subsequent characters can be letters, numbers, underscores.

* Data Types: JavaScript is a typeless language--you don't need to specify a type for your data (it will be inferred at runtime).  However, internally, the [following data types are used](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Overview):
    * [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Numbers) - a double-precision 64-bit floating point number.  Using `Number` you can work with both Integers and Floats.  There are also some special `Number` types, [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) and [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
    * [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Strings) - a sequence of Unicode characters.  JavaScript supports both single (`'...'`) and double (`"..."`) quotes when defining a `String`.
    * `Boolean` - a value of `true` or `false`. We'll also see how JavaScript supports so-called *truthy* and *falsy* values that are not pure `Boolean`s.
    * `Object`, which includes [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions), [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), and many more. - JavaScript supports object-oriented programming, and uses objects and functions as first-class members of the language.
    * [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) - a value that means "this is intentionally nothing" vs. `undefined`
    * [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) - a special value that indicates a value has never been defined.

|Declaration|Type|Value|
|-----------|----|-----|
|`var s1 = "some text";` |`String`|`"some text"`|
|`var s2 = 'some text';` |`String`|`"some text"` |
|`var s3 = '172';`       |`String`|`"172"`|
|`var s4 = '172' + 4;`   |`String`|`"1724"` (concatenation vs. addition)|
|`var n1 = 172;`         |`Number`|`172` (integer)|
|`var n2 = 172.45;`      |`Number`|`172.45` (double-precision float)|
|`var b1 = true;`        |`Boolean`| `true` |
|`var b2 = false;`       |`Boolean`| `false`|
|`var b3 = !b2;`         |`Boolean`| `true` |
|`var c;`                |`undefined`| `undefined`|
|`var d = null;`         |`null`|`null`|

Consider a simple program from your C course, and how it would look in JavaScript

```c
 // Area of a Circle, based on https://scs.senecac.on.ca/~btp100/pages/content/input.html
 // area.c

 #include <stdio.h>               // for printf

 int main(void)
 {
    const float pi = 3.14159f;   // pi is a constant float 
    float radius = 4.2;          // radius is a float
    float area;                  // area is a float

    area = pi * radius * radius; // calculate area from radius

    printf("Area = %f\n", area); // copy area to standard output

    return 0;
}
```

Now the same program in JavaScript:

```js
var pi = 3.14159;              // pi is a Number 
var radius = 4.2;              // radius is a Number
var area;                      // area is (currently) undefined

area = pi * radius * radius;   // calculate area from radius

console.log("Area = " + area + "\n");   // print area to the console
```

We could also have written it like this, using [`Math.PI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI), which we'll learn about later:

```js
var radius = 4.2;                       // radius is a Number
var area = Math.PI * radius * radius;   // calculate area from radius

console.log("Area", area);              // print area to the console
```


Declaration syntax:
Dynamic typing
a JavaScript variable can have a different type in different parts of a program 
Variables Example
Special values
Infinity
Number data type
e.g. console.log(12/0);
NaN
means "Not a Number"; Number data type
null
both a value and a data type
undefined
both a value and a data type
e.g.  var x; 
          console.log(x); 
Expressions
An expression is any valid set of literals, variables, operators, and expressions that evaluates to a single value. 
The value may be a number, a string, or a logical value. 
Two types of expressions:
those that assign a value to a variable, e.g. x = 7 . 
those that simply have a value, e.g., 3 + 4 simply evaluates to 7; it does not perform an assignment. 
JavaScript has the following kinds of expressions:
Arithmetic - evaluates to a number 
String - evaluates to a character string 
Logical - evaluates to true or false 
Expressions - Ternary Operator
A conditional expression can have one of two values based on a condition. The syntax:

If the condition is true, the expression has the value of val1, Otherwise it has the value of val2.
Arithmetic Operators
Arithmetic Operators - Assigning Values
Logical Operators
Comparison Operators
Other Operators
The typeof operator (for variable or values):
 possible return values:
typeof "John"                         // Returns string 
typeof 3.14                            // Returns number
typeof false                           // Returns boolean
typeof [1,2,3,4]                     // Returns object
typeof {name:'John', age:34}  // Returns object

The instanceof operator
Used for objects
Strings and Quotation Marks
Literal strings can be denoted by either single or double quotes, which gives you some flexibility about how to handle awkward situations such as quotation marks inside a string:
Concatenation of Strings
The main operation on strings is the concatenation operator, +:
Adding Strings and Numbers
x =5+5;                console.log(x); // Output: 10 
x="5"+"5"; console.log(x); // Output: 55 
x=5+"5"; console.log(x); // Output: 55 
x="5"+5; console.log(x); // Output: 55
Example - Evaluating Expressions
Programming Constructs
JavaScript execution flow is determined using the following four (4) basic control structures:
Sequential:  an instruction is executed when the previous one is finished.
Conditional a logical condition is used to determine which instruction will be executed next - similar to the "if" and "switch" statements in C.
Looping a series of instructions are repeatedly executed until some condition is satisfied - similar to the "for" and "while" statements in C.
Transfer jump to a different part of the code - similar to calling a function in C.
Construct (1) - Sequence
Tasks are executed one after another in “sequence” – e.g.
var a = 3;
var b = 6;
var c = a + b;

console.log(c);
Construct (2) - Selection
Make decisions and perform single or multiple tasks based on the outcome of the decision (true or false).
Types of conditional statements :
if 
if / else 
switch / case 
if-else Example 
Switch-case Example 
Construct (3) - Iteration
Loop - an action that occurs again and again until a certain condition is met.
Continuously check a condition and based on the outcome, either terminate the loop or repeat a set of statements. 
Three basic types of loop structures:
The for loop 
The for / in loop
The while loop 
The do-while loop 
for loop Example
for in loop Example
Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.
while & do…while loop Examples
break and continue Statements
break: breaks the loop and continue executing the code that follows after the loop (if any). 
Thank you!
 
