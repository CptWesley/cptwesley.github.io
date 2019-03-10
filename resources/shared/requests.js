/**
 * Performs an asynchronous web request.
 * @param {string} url URL to get the resource from.
 * @param {function} callback Callback to use after having retrieved the resource.
 * @param {function} fallback Callback to use if we couldn't retrieve the resource.
 */
function request(url, callback, fallback) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                callback(request.responseText);
            } else if (fallback) {
                fallback(request.status);
            }
        }
    };
    request.send();
}

/**
 * Performs an asynchronous web request which parses the result to an object.
 * @param {string} url URL to get the resource from.
 * @param {function} callback Callback to use after having retrieved the resource.
 * @param {function} fallback Callback to use if we couldn't retrieve the resource.
 */
function requestObject(url, callback, fallback) {
    request(url, function(content) {
        let object;
        try {
            object = JSON.parse(content);
        } catch {
            fallback(200);
            return;
        }
        callback(object);
    }, fallback);
}
