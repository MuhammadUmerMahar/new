document.getElementById("applicationForm").addEventListener("submit", function (event) {

    event.preventDefault(); // stop submission first

    let isValid = true;

    let username = document.getElementById("username");
    let age = document.getElementById("age");
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.getElementById("course");
    let agree = document.getElementById("agree");
    let comment = document.getElementById("comment");

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.remove());

    function showError(element, message) {
        let error = document.createElement("div");
        error.className = "error";
        error.style.color ="red" + " " + "bold" + " " + "italic";
        error.style.fontSize = "14px";
        error.innerText = message;
        element.parentNode.appendChild(error);
    }

    if (username.value.trim() === "") {
        showError(username, "*Username is required.");
        isValid = false;
    }

    if (age.value.trim() === "") {
        showError(age, "*Age is required.");
        isValid = false;
    }

    if (!gender) {
        showError(document.querySelector('input[name="gender"]').parentNode,
            "*Please select your gender.");
        isValid = false;
    }

    if (course.value === "") {
        showError(course, "*Please choose a course.");
        isValid = false;
    }

    if (!agree.checked) {
        showError(agree.parentNode,
            "*You must agree to the terms and conditions.");
        isValid = false;
    }

    if (comment.value.trim() === "") {
        showError(comment, "*Comment field cannot be empty.");
        isValid = false;
    }

    if (isValid) {
        this.submit(); // submit only if everything is valid
    }

});
const btn = document.getElementById("runBtn");

btn.addEventListener("mouseover", function () {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    btn.style.transform = `translate(${x}px, ${y}px)`;
});