(function() {
    request("/resources/shared/interface.html", function(content) {
        const body = document.getElementsByTagName("body")[0];
        body.innerHTML = content;
        window.onpopstate = popState;
        loadPage(window.location.pathname, window.location.search, window.location.hash, false);
        replaceState(window.location.pathname, window.location.search, window.location.hash);
        
        window.onresize = function() {
            const nav = document.getElementById("navigation");
            body.style.paddingTop = (nav.clientHeight + 10) + "px";
        };
        window.onresize();
    })
})();
