
## DOM Programming Exercise

In this exercise, we will practice working with HTML, images, URLs, the DOM,
events, and JavaScript to create an interactive web page.

1. Create a **folder** called `cats` on your computer
1. Create a **file** inside the `cats` folder named `index.html`
1. Open a **terminal** to your `cats` folder (i.e., `cd cats`)
1. In your **terminal**, start a web server by running the following command: `npx http-server`
1. Open the `cats` folder in Visual Studio Code
1. Edit the `index.html` file so it contains a [basic HTML5 web page](https://web222.ca/weeks/week05/#basic-html5-document), including a `<head>`, `<body>`, etc.  Try to do it from memory first, then look up what you've missed.
1. Save `index.html` and try loading it in your browser by visiting your local web server at `http://localhost:8080/index.html`
1. In your editor, modify the `body` of your `index.html` file to contain the text of the poem in [cats.txt](cats.txt).  Use HTML tags to markup the poem for the web.  Your page should have a proper heading for the title, each line should break at the correct position, and the poet's name should be bold.
1. Add an image of a cat to the page below the text.  You can use [https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg](https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg).
1. Adjust the `width` of your image so it fits nicely on your page.  What happens if you adjust the `width` and `height`?  
1. Create a new file in your `cats` folder called `script.js`.  Add the following line of JavaScript:
    ```js
    console.log('cats!');
    ```
1. Add a `script` element to the bottom of your `body` (i.e., right before the closing `</body>` tag).  Set its `src` to a file called `script.js`:
    ```html
        <script src="script.js"></script>
    </body>
    ```
1. Refresh your web page in the browser, and open your browser's `Dev Tools`, and `Web Console`.  Make sure you can see the `cats!` message printed in the log.
1. Try changing `cats!` in `script.js` to some other message, save your `script.js` file, and refresh your browser.  Make sure your console updates with the new message. 
1. Modify `index.html` and update your `<img>` tag: add an attribute `id="cat-picture"` and remove the `src="..."`:
    ```html
    <!-- NOTE: there is no longer a src attribute in our HTML, we'll do it JavaScript below -->
    <img id="cat-picture">
    ```
1. Modify your `script.js` file to add the following code:

    ```js
    window.onload = function() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg';
    };
    ```
1. Save your `script.js` file and reload your browser.  Do you still see a cat?  If not, check your web console for any errors.
1. Modify your `script.js` and change your cat URL used by `img.src` to use [https://cataas.com/cat](https://cataas.com/cat).  The [cataas.com](https://cataas.com/#/) site provides cat pictures as a service via URL parameters.  Save `script.js` and reload your page a few times.  Do you see a different cat each time?
1. Modify your `script.js` file to move your image code to a separate function.  Make sure it still works the same way when you're done (save and test in your browser):

    ```js
    function loadCatPicture() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://cataas.com/cat';
    }

    window.onload = loadCatPicture;
    ```
1. Rewrite `script.js` to update the picture after 5 seconds:

    ```js
    function loadCatPicture() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://cataas.com/cat';
    }

    window.onload = function() {
        loadCatPicture();

        // Call the loadCatPicture function again in 5000ms
        setTimeout(loadCatPicture, 5 * 1000 /* 5s = 5000ms */);
    };
    ```
1. Rewrite `script.js` to update the picture every 15 seconds, forever:

    ```js
    function loadCatPicture() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://cataas.com/cat';
    }

    window.onload = function() {
        loadCatPicture();

        // Call the loadCatPicture function every 15000ms
        setInterval(loadCatPicture, 15 * 1000 /* 15s = 15000ms */);
    };
    ```
1. Rewrite `script.js` to update the picture only when the user clicks somewhere in the window:

    ```js
    function loadCatPicture() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://cataas.com/cat';
    }

    window.onload = function() {
        loadCatPicture();

        // Call the loadCatPicture function when the user clicks in the window
        window.onclick = loadCatPicture;
    };
    ```
1. Modify `index.html` and put a `<div>...</div>` around all the text of the poem.  Give your `div` an `id="poem-text"` attribute:
    ```html
    <div id="poem-text">
        <p>Cats sleep anywhere, any table, any chair....</p>
        ...
    </div>
    ````
1. Rewrite `script.js` to load the picture only when the user clicks on the text of the poem:

    ```js
    function loadCatPicture() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://cataas.com/cat';
    }

    var poemText = document.getElementById('poem-text');
    poemText.onclick = loadCatPicture;
    ```
1. Rewrite `script.js` to also load the picture only when the user presses a key on the keyboard:

    ```js
    function loadCatPicture() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://cataas.com/cat';
    }

    var poemText = document.getElementById('poem-text');
    poemText.onclick = loadCatPicture;

    window.onkeypress = function(event) {
        var keyName = event.key;
        console.log('Key Press event', keyName);
        loadCatPicture();
    };
    ```
1. Rewrite `script.js` to also load the picture only when the user presses a key on the keyboard, but only one of `b, m, s, n, p, x`:

    ```js
    function loadCatPicture() {
        var img = document.getElementById('cat-picture');
        img.src = 'https://cataas.com/cat';
    }

    var poemText = document.getElementById('poem-text');
    poemText.onclick = loadCatPicture;

    window.onkeypress = function(event) {
        var keyName = event.key;
        console.log('Key Press event', keyName);

        switch(keyName) { 
            case 'b':
            case 'm':
            case 's':
            case 'n':
            case 'p':
            case 'x':
                loadCatPicture();
                break;
            default:
                console.log('Ignoring key press event');
        }
    };
    ```
1. Rewrite `script.js` to also load the picture only when the user presses a key on the keyboard, but only one of `b, m, s, n, p, x`, and load the picture with one of the supported [cataas filters](https://cataas.com/#/):

    ```js
    function loadCatPicture(filter) {
        var url = 'https://cataas.com/cat';
        var img = document.getElementById('cat-picture');

        // If the function is called with a filter argument, add that to URL
        if (filter) {
            console.log('Using cat picture filter', filter);
            url += '?filter=' + filter
        }

        img.src = url;
    }

    var poemText = document.getElementById('poem-text');
    poemText.onclick = function() {
        loadCatPicture();
    };

    window.onkeypress = function(event) {
        var keyName = event.key;
        console.log('Key Press event', keyName);

        switch(keyName) { 
            case 'b':
                return loadCatPicture('blur');
            case 'm':
                return loadCatPicture('mono');
            case 's':
                return loadCatPicture('sepia');
            case 'n':
                return loadCatPicture('negative');
            case 'p':
                return loadCatPicture('paint');
            case 'x':
                return loadCatPicture('pixel');
            default:
                console.log('Ignoring key press event');
        }
    };
    ```
1. Rewrite `script.js` so that we only load a new cat picture when the old picture is finished loading (don't send too many requests to thh server).  Also, add some [cache busting](https://www.keycdn.com/support/what-is-cache-busting):

    ```js
    // Demonstrate using a closure, and use an immediately executing function to hide
    // an `isLoading` variable (i.e., not global), which will keep track of whether
    // or not an image is being loaded, so we can ignore repeated requests.
    var loadCatPicture = (function() {
        var isLoading = false;

        // This is the function that will be bound to loadCatPicture in the end.
        return function(filter) {
            if(isLoading) {
                console.log('Skipping load, already in progress');
                return;
            }

            var img = document.getElementById('cat-picture');
            
            function finishedLoading() {
                isLoading = false;

                // Remove unneeded event handlers so `img` can be garbage collected.
                img.onload = null;
                img.onerror = null;
                img = null;
            }
            img.onload = finishedLoading;
            img.onerror = finishedLoading;

            // If the function is called with a filter argument, add that to URL
            var url = 'https://cataas.com/cat';

            // Add something unique (and meaningless) to the query string, so the browser
            // won't cache this URL, but always load it again
            url += '?nocache=' + Date.now();

            if (filter) {
                console.log('Using cat picture filter', filter);
                url += '&filter=' + filter
            }

            // Finally, set isLoading to true, and begin loading image
            isLoading = true;
            img.src = url;
        };
    })();

    var poemText = document.getElementById('poem-text');
    poemText.onclick = function() {
        loadCatPicture();
    };

    window.onkeypress = function(event) {
        switch(event.key) { 
            case 'b':
                return loadCatPicture('blur');
            case 'm':
                return loadCatPicture('mono');
            case 's':
                return loadCatPicture('sepia');
            case 'n':
                return loadCatPicture('negative');
            case 'p':
                return loadCatPicture('paint');
            case 'x':
                return loadCatPicture('pixel');
            default:
                console.log('Ignoring key press event');
                break;
        }
    };
    ```