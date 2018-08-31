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
which everyone building and using the web relies upon.

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
* [`encodeURIComponent()`] - use on components (i.e., parts of) a URL vs. the whole thing (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
* [`decodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
* [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) - use on full URLs vs. portions thereof
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

### Front-End Web Development: HTML5, CSS, JavaScript

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
