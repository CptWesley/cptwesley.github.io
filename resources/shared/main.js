(function() {
    const head = document.getElementsByTagName("head")[0];
    const title = document.createElement("title");
    title.innerText = "CptWesley's Blog"
    head.appendChild(title);

    request("/resources/shared/interface.html", function(content) {
        const body = document.getElementsByTagName("body")[0];
        body.innerHTML = content;

        // Restore state upon popping.
        window.onpopstate = function(e){
            if (e.state) {
                loadPage(e.state.path, e.state.query, e.state.hash, false);
            }
        };

        loadPage(window.location.pathname, window.location.search, window.location.hash);
    })
})();