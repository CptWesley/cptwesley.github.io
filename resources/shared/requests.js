/**
 * Performs an asynchronous web request.
 * @param {string} url URL to get the resource from.
 * @param {function} callback Callback to use after having retrieved the resource.
 */
function request(url, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            callback(request.responseText);
        }
    };
    request.send();
}

/**
 * Performs an asynchronous web request which parses the result to an object.
 * @param {string} url URL to get the resource from.
 * @param {function} callback Callback to use after having retrieved the resource.
 */
function requestObject(url, callback) {
    request(url, function(content) {
        callback(JSON.parse(content));
    });
}
