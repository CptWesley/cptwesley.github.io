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