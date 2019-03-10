/**
 * Fills an html template with content.
 * @param {string} template Template to fill.
 * @param {object} map Map to use to complete the template.
 */
function fillTemplate(template, map) {
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            template = template.split("{@" + key + "}").join(map[key]);
        }
    }
    return template;
}
