/**
 * Loads a certain page.
 * @param {string} path The path to the page to load.
 * @param {string} query The query of the page to load.
 * @param {string} hash The hash of the page to load.
 * @param {boolean} push Determines whether or not a new state is pushed.
 */
function loadPage(path = "", query = "", hash = "", push = true) {
    pageNotFound(path, query, hash);

    if (push) {
        pushState(path, query, hash);
    }
}

/**
 * Loads a certain page.
 * @param {string} path The path to the page that wasn't found.
 * @param {string} query The query of the page that wasn't found.
 * @param {string} hash The hash of the page that wasn't found.
 */
function pageNotFound(path = "", query = "", hash = "") {
    const page = document.getElementById("page");
    page.innerHTML = `
        <div>
            <h1>:(</h1>
            <p>
                We ran into problems when trying to visit the page at url: <b>` + path + query + hash + `</b><br>
                If you reached this page from a link on this same website,
                feel free to report it as an issue <a href="https://github.com/CptWesley/cptwesley.github.io/issues">here</a>.<br>
                In the mean time, enjoy this random xkcd.
            </p>
            <div id="xkcd-container" class="text-center"/>
        </div>
    `;
    const container = document.getElementById("xkcd-container");
    injectRandomXkcd(container);
}
