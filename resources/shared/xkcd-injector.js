/**
 * Injects a random xkcd into the given html element.
 * @param {HTMLElement} parent The element to append the xkcd with.
 */
function injectRandomXkcd(parent) {
    requestObject("https://xkcd.now.sh/", function(newest){
        const number = Math.floor(Math.random() * newest.num) + 1;
        requestObject("https://xkcd.now.sh/" + number, function(selected) {
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", selected.img);
            imageElement.setAttribute("class", "mx-auto d-block img-fluid");
            const sourceElement = document.createElement("p");
            sourceElement.innerHTML = `Source: <a href="https://xkcd.com/` + number + `">xkcd: ` + selected.title + `</a>`;
            imageElement.setAttribute("src", selected.img);
            parent.appendChild(imageElement);
            parent.appendChild(sourceElement);
        })
    });
}