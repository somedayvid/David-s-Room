document.addEventListener("DOMContentLoaded", () =>{
// Load the JSON file\
console.log("HELlo world!");
fetch("blog.json")
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById("posts");

    data.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
        <div class="title">${post.title}</div>
        <div class="date">${post.date}</div>
        <p>${post.content}</p>
        `;

        container.appendChild(div);
    });
    })
    .catch(error => {
    console.error("Error loading posts:", error);
    });
});