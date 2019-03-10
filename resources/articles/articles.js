/**
 * Render the articles overview page.
 */
function showArticles(query) {
    const name = query["a"];
    if (name) {
        showArticle(name);
    } else {
        requestObject("https://api.github.com/repos/cptwesley/cptwesley.github.io/contents/resources/articles/entries", function(objects) {
            document.getElementById("page").innerHTML = `
                <h1>Blogs</h1>
                <ul id="articles-list-container" class="list-none"></ul>
            `;
            const container = document.getElementById("articles-list-container");
            appendArticleLinkElement(container, objects, 0);
        });
        document.title = "Blogs";
    }
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
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute("href", "javascript:loadPage('/articles', '?a=" + file + "');");
        const date = new Date(Date.parse(article.date));
        link.innerText = getDateFormat(date) + " - " + article.title;
        item.appendChild(link);
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

/**
 * Shows the article with the given name.
 * @param {string} name Name of the article to show.
 */
function showArticle(name) {
    requestObject("/resources/articles/entries/" + name + ".json", function(map) {
        request("/resources/articles/article-template.html", function(template) {
            document.getElementById("page").innerHTML = fillTemplate(template, map);
        });
        document.title = map.title;
    }, function() {
        articleNotFound(name);
    });
}

/**
 * Shows an error message saying that an article couldn't be found.
 * @param {string} name Name of the article that wasn't found.
 */
function articleNotFound(name) {
    const page = document.getElementById("page");
    page.innerHTML = `
        <div>
            <h1>:(</h1>
            <p>
                We could not find the article: <b>` + name + `</b><br>
                If you believe this is an error feel free to report it as an issue
                <a href="https://github.com/CptWesley/cptwesley.github.io/issues">here</a>.<br>
                In the mean time, enjoy this random xkcd.
            </p>
            <div id="xkcd-container" class="text-center"/>
        </div>
    `;
    const container = document.getElementById("xkcd-container");
    injectRandomXkcd(container);
    document.title = "Article not found";
}