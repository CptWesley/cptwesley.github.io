function showProjects() {
    requestObject("/resources/projects/projects.json", function(projects) {
        const page = document.getElementById("page");
        page.innerHTML = "<h1>Projects</h1>";
        request("/resources/projects/project-template.html", function(template) {
            for (let map of projects) {
                page.innerHTML += fillTemplate(template, map);
            }
        });
    });
    document.title = "Projects";
}