/**
 * When the page finishes loading, use AJAX to get our dog breeds.
 */
window.onload = function() {
    loadDogBreeds();    
};

/**
 * If there are any errors during our AJAX work, display them in the page. 
 */
function showError(message) {
    var err = document.querySelector("#error-msg");
    err.classList.remove("hidden");
    err.innerHTML = message;
}

/**
 * Loop through the list of breeds, and create an <option>
 * for each, before adding it to our <select>
 */
function updateBreedList(breedList) {
    var select = document.querySelector("#breeds");
    var btnLoad = document.querySelector("#btn-load");

    function createBreedOption(name) {
        var option = document.createElement("option");
        option.value = name;
        option.innerHTML = name;
    
        return option;
    }
    
    breedList.forEach(function(breed) {
        var breedOption = createBreedOption(breed);
        select.appendChild(breedOption);
    });

    btnLoad.onclick = function(e) {
        var breed = select.value;
        loadBreedImages(breed);
    };
}

/**
 * Get the number of images to load from our form
 */
function getImageCount() {
    var input = document.querySelector("#image-count");
    return input.value;
}

/**
 * Parse the response Object, which looks something like this:
 * 
 * {
 *   status: "success",
 *   message: {
 *     "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
 *     "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
 *     ...
 *   }
 * }
 *  
 * The `status` tells us if the server was successful at building
 * the list of breed image URLs.  The `message` is an Object with all the
 * URLs for the breed images as an Array (we don't have to do anything to it). 
 */
function extractBreedImageList(response) {
    if(response.status !== "success") {
        throw new Error("response wasn't successful");
    }
    return response.message;
}

/**
 * Given a list of breed image URLs, erase our current image
 * container of any <img>s, and create new ones for these URLs. 
 */
function updateBreedImages(breedImageList){
    var imagesContainer = document.querySelector("#images-container");
    var breedName = document.querySelector("#breed-name");
    var breedsSelect = document.querySelector("#breeds");

    // Set the name of the Breed in our heading
    breedName.innerHTML = breedsSelect.value;

    // Clear the imagesContainer if there is anything there now
    imagesContainer.innerHTML = "";

    // Loop through the image URLs, and create new <img> elements
    function createImgElement(url) {
        var img = document.createElement("img");
        img.src = url;
        return img;
    }

    breedImageList.forEach(function(url) {
        var img = createImgElement(url);
        imagesContainer.appendChild(img);
    });
};

/**
 * Given a breed name, dynamically load a list of image URLs for that breed 
 */
function loadBreedImages(breed) {
    var imageCount = getImageCount();
    // See https://dog.ceo/dog-api/documentation/breed
    // Use the imageCount and breed variables to create our URL 
    var url = `https://dog.ceo/api/breed/${breed}/images/random/${imageCount}`;
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        try {
            var response = JSON.parse(this.responseText);
            var breedImageList = extractBreedImageList(response);
            updateBreedImages(breedImageList);
        } catch(e) {
            showError("Unable to load dog breeds");
        }
    };

    xhr.onerror = function() {
        showError("Unable to load dog breeds");
    };

    xhr.open("GET", url);
    xhr.send();
}

/**
 * Parse the response Object, which looks something like this:
 * 
 * {
 *   status: "success",
 *   message: {
 *     dingo: [],
 *     beagle: [],
 *     ...
 *   }
 * }
 *  
 * The `status` tells us if the server was successful at building
 * the list of breeds.  The `message` is an Object with all the names
 * of the breeds as keys, and values of sub-breeds (most are empty).
 * We want to turn the breed keys into an Array. 
 */
function extractBreedList(response) {
    if(response.status !== "success") {
        throw new Error("response wasn't successful");
    }
    return Object.keys(response.message);
}

/**
 * Create an XHR request to get all the dog breeds as JSON.
 * Parse the JSON and extract the list of breeds, populating
 * our <select> with <option>s.
 */
function loadDogBreeds() {
    // See https://dog.ceo/dog-api/documentation/
    var url = "https://dog.ceo/api/breeds/list/all";
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        try {
            var response = JSON.parse(this.responseText);
            var breedList = extractBreedList(response);
            updateBreedList(breedList);
        } catch(e) {
            showError("Unable to load dog breeds");
        }
    };

    xhr.onerror = function() {
        showError("Unable to load dog breeds");
    };

    xhr.open("GET", url);
    xhr.send();
}
