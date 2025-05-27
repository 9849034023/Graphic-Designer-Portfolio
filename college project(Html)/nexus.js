document.addEventListener("DOMContentLoaded", function () {

    let navbar = document.querySelector("nav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    const commentsContainer = document.querySelector(".comments-container");
    const comments = Array.from(document.querySelectorAll(".comments"));
    let index = 0;

    function slideComments() {
        if (comments.length < 3) return;

        const firstComment = comments.shift();
        comments.push(firstComment);

        commentsContainer.innerHTML = "";
        comments.forEach(comment => commentsContainer.appendChild(comment));
    }

    if (comments.length >= 3) {
        const temp = comments.shift();
        comments.push(temp);
        const temp2 = comments.shift();
        comments.push(temp2);

        commentsContainer.innerHTML = "";
        comments.forEach(comment => commentsContainer.appendChild(comment));
    }

    setInterval(slideComments, 2000);

    console.log("JavaScript loaded successfully!");
});
