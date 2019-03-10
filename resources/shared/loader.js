loadStyle("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
loadStyle("/resources/thirdparty/prism.css");
loadStyle("/resources/shared/style.css");

loadScript("/resources/thirdparty/prism.js");
loadScript("/resources/shared/templates.js");
loadScript("/resources/shared/markdown-parser.js");
loadScript("/resources/shared/requests.js");
loadScript("/resources/shared/xkcd-injector.js");
loadScript("/resources/articles/articles.js");
loadScript("/resources/projects/projects.js");
loadScript("/resources/shared/resolver.js");
loadScript("/resources/shared/states.js");
loadScript("/resources/shared/main.js");

/**
 * Loads a JavaScript file during runtime.
 * @param {string} file The path to the file being loaded.
 */
function loadScript(file) {
    const element = document.createElement("script");
    element.setAttribute("type","text/javascript");
    element.setAttribute("src", file);
    document.getElementsByTagName("head")[0].appendChild(element);
}

/**
 * Loads a CSS file during runtime.
 * @param {string} file The path to the file being loaded.
 */
function loadStyle(file) {
    const element = document.createElement("link");
    element.setAttribute("rel","stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", file);
    document.getElementsByTagName("head")[0].appendChild(element);
}
