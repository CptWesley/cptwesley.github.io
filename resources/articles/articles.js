/**
 * Render the articles overview page.
 */
function showArticles() {
    requestObject("https://api.github.com/repos/cptwesley/cptwesley.github.io/contents/resources/articles/entries", function(objects) {
        document.getElementById("page").innerHTML = `
            <h1>Blogs</h1>
            <div id="articles-list-container" class="list-group">
        `;
        const container = document.getElementById("articles-list-container");
        appendArticleLinkElement(container, objects, 0);
    });
}

/**
 * Creates an article link element.
 * @param {HTMLElement} container Container to append to.
 * @param {*} objects Objects in the json response of the github api.
 * @param {Number} index Current index in the objects list.
 */
function appendArticleLinkElement(container, objects, index) {
    const file = getFileNameWithoutExtension(objects[index].path);
    requestObject("/resources/articles/entries/" + file + ".json", function(article) {
        const item = document.createElement("a");
        item.setAttribute("href", "javascript:loadPage('/articles/" + file + "');");
        const date = new Date(Date.parse(article.date));
        item.innerText = getDateFormat(date) + " - " + article.title;
        container.appendChild(item);
        if (index < objects.length - 1) {
            appendArticleLinkElement(container, objects, index + 1);
        }
    });
}

/**
 * Gets the file name without the extension of a path.
 * @param {string} path Path to get the file name from.
 */
function getFileNameWithoutExtension(path) {
    return path.split("/").pop().split(".")[0];
}

/**
 * Reformats a date.
 * @param {Date} date 
 */
function getDateFormat(date) {
    return date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
}
