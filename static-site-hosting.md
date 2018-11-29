# Static Web Site Hosting

## Introduction

During this and subsequent courses, you will create many websites, and
may wish to host them online.  Developing websites locally works fine
when all you need to do is look at the code and resulting web pages by
yourself.  However, eventually, you'll want and need to show your work
to others.  The easiest way to accomplish this is to use one of a number
of free services.

## GitHub and GitLab Accounts

Many of the services discussed below are commonly used with [git](https://git-scm.com/) (a command-line tool for version control) 
and either [GitHub](https://github.com/) or [GitLab](https://about.gitlab.com/) (two popular online git repository hosting services).

While using git/GitHub/GitLab are beyond the scope of this course, learning
them is something you'll need to do in the coming semesters.

In the meantime, you are encouraged to create accounts for yourself on both GitHub and GitLab. It's free, and doing so will make it easier to connect to other services discussed below:

1. Create an [account on GitHub](https://github.com/join)
1. Create an [account on GitLab](https://gitlab.com/users/sign_in)

## Static Site Hosting Provides

In this course we are focused on HTML, CSS, and JavaScript for client-side
web development.  The web sites we will create are often referred to as
[static sites](https://en.wikipedia.org/wiki/Static_web_page), because they
are comprised of files (`.html`, `.css`, `.js`) with no server application.
A static site only needs a web server to serve its files.

Because static sites are so simple to host (you just need to upload your files),
there are many options for hosting them.  Previously this was the kind of thing
that people did on their own, setting up, or renting space on a web server.

Today there are numerous free options for hosting your own personal static sites.
We'll briefly mention three, and focus on the simplest.

### Prepare your Static Site for Deployment

No matter which hosting service you use, make sure you follow these guidelines
when creating your web pages.

1. Your site needs to have an `index.html` file in the root of your folder. This is necessary so that your site has an entry point, and people can navigate to it without knowing the name of your web pages.  In addition to your `index.html` page, ou can also have other `.html` pages that use different names; just add links to them from your `index.html` page.
1. Use relative URL paths for other assets in your site.  For example, consider the following file layout:
    ```
    my-website/
             |
             +--- index.html
             +--- about.html
             +--- styles/
                       |
                       +--- style.css
             +--- images/
                       |
                       +--- logo.png
    ```
    In your `index.html`, you should refer to these other files and directories using paths relative to the `index.html` file, without specifying a protocol, domain, etc.  For example:
    ```html
    <!doctype html>
    <html>
        <head>
            <link rel="stylesheet" href="styles/style.css" type="text/css">
        </head>
        <body>
            <h1 class="logo">Welcome!</h1>
            <a href="about.html">About</a>
        </body>
    </html>
    ```
    In the HTML above, notice how the stylesheet `<link>` and anchor `<a>` elements both use paths relative to `index.html`, and don't use a leading `/`.

    In the CSS file, you'd do something similar, but the paths would be relative to the `styles/style.css` file this time:
    ```css
    .logo {
        background-image: url('../images/logo.png');
    }
    ```
    By specifying all your file paths for scripts, stylesheets, images, etc as relative paths to the file where you include them, 
1. If you want to disallow Google and other web crawlers from indexing your page, add a [robots.txt](http://www.robotstxt.org/robotstxt.html) file.  If you are OK with Google indexing your site, you don't need to do anything.
1. Consider preparing your site and its assets for optimal network performance by using a bundler like [Parcel](https://parceljs.org/).  This isn't necessary, but is a best practice, and something you should learn to do as you progress.  Bundlers take web asset files and package, compress, and re-write them for optimal loading.  [Parcel](https://parceljs.org/) is particularly beginner-friendly, in that you don't need to do any setup.  To use [Parcel](https://parceljs.org/) with your site:
    1. Make sure [node.js](https://nodejs.org/en/download/) is installed on your computer.
    1. Open a command line terminal and navigate to your web site's folder: `cd my-website`.
    1. Run the parcel command: `npx parcel build index.html`.  See the [parcel cli docs](https://parceljs.org/cli.html#set-the-public-url-to-serve-on) for details on changing the public URL if your host uses a particular path for your site (e.g., GitHub pages).
    1. Your built website, and all optimized files, will be available in the `dist/` directory.

### Option 1: Glitch

[Glitch](https://glitch.com/) provides both online coding and hosting together in one tool.  You can [remix existing pages](https://glitch.com/edit/#!/remix/hello-webpage) and then add your own files or change the code.

If you need a quick way to both create and host a small web site, especially if you're just wanting to learn and experiment with something, Glitch is a good option to consider.  See the [help docs](https://glitch.com/help/) for more info.

### Option 2: Netlify

To use [Netlify](https://www.netlify.com), first you need to [Sign up](https://app.netlify.com/signup).  If you followed the advice above, you already
have a GitHub account, and can authenticate using your GitHub (or GitLab) account
vs. having to create a new one for Netlify.

Once you've signed up, the easiest way to deploy your web site is to 
drag-and-drop the site's folder into the [dropzone on your Netlify dashboard](https://app.netlify.com/account/sites).  There is a [short video tutorial](https://www.netlify.com/docs/manual-deploys/#drag-drop) available in the Netflify docs as well

Once your site is deployed, you can manage it via the [Netlify Dashboard](https://app.netlify.com/account/sites).  See the [Netflify docs](https://www.netlify.com/docs/) for more info on other things you can do.

### Option 3: GitHub Pages

[GitHub](https://github.com/) is a git hosting service, which also offers static site hosting for users and their open source repositories.  Using GitHub usually
means working with [git](https://git-scm.com/), but you can also begin by using the [GitHub Desktop app](https://desktop.github.com/), and upload your files that way.

GitHub provides static hosting via [GitHub Pages](https://pages.github.com/).
In order to use GitHub Pages for free, you'll need to host your source code on GitHub in a public repository.  As a [student](https://education.github.com/students) you can get special access to GitHub and create private repositories.

### Option 4: GitLab Pages

Similar to GitHub, [GitLab](https://about.gitlab.com/) provides git repository hosting.  They also have a [pages](https://about.gitlab.com/product/pages/) feature for hosting static sites.

The [docs](https://docs.gitlab.com/ee/user/project/pages/#getting-started) are excellent, and cover all aspects of setup and customization.
