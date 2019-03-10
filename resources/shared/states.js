/**
 * Pushes the state of a certain page.
 * @param {string} path The path to the page to push.
 * @param {string} query The query of the page to push.
 * @param {string} hash The hash of the page to push.
 */
function pushState(path, query, hash) {
    window.history.pushState({path: path, query: query, hash: hash}, "", path + query + hash);
}

/**
 * Replaces the state of the current page.
 * @param {string} path The path to the page to replace with.
 * @param {string} query The query of the page to replace with.
 * @param {string} hash The hash of the page to replace with.
 */
function replaceState(path, query, hash) {
    window.history.replaceState({path: path, query: query, hash: hash}, "", path + query + hash);
}

/**
 * Event handler for when a state is popped.
 * @param {PopStateEvent} e Event arguments of a state pop.
 */
function popState(e) {
    if (e.state) {
        loadPage(e.state.path, e.state.query, e.state.hash, false);
    }
}