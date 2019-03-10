/**
 * Loads a certain page.
 * @param {string} path The path to the page to load.
 * @param {string} query The query of the page to load.
 * @param {string} hash The hash of the page to load.
 * @param {boolean} push Determines whether or not a new state is pushed.
 */
function loadPage(path = "", query = "", hash = "", push = true) {
    switch (sanitizePath(path)) {
        case "":
            renderHtml("/resources/index/index.html", "About Me");
            break;
        case "/projects":
            showProjects();
            break;
        case "/articles":
            showArticles(parseQuery(query));
            break;
        default:
            pageNotFound(path, query, hash);
            break;
    }

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
    document.title = "Page not found";
}

/**
 * Renders a simple HTML page content at the given url.
 * @param {string} url Address of the HTML content to render.
 * @param {string} title Title of the page to load.
 */
function renderHtml(url, title = "CptWesley's Website") {
    request(url, function(content) {
        const page = document.getElementById("page");
        page.innerHTML = content;
        document.title = title;
    });
}

/**
 * Sanitizes a path part of a url.
 * @param {string} path Path to sanitize.
 */
function sanitizePath(path) {
    return path.replace(/\/$/, "");
}

/**
 * Parses a query to a map.
 * @param {string} query Query to parse.
 */
function parseQuery(query) {
    const result = {};
    for (let element of query.substring(1).split("&")) {
        const parts = element.split("=");
        result[parts[0]] = parts[1];
    }
    return result;
}