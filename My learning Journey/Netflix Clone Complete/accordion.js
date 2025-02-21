document.querySelectorAll(".faq button").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector("img");

        // Toggle visibility
        answer.classList.toggle("open");
        button.classList.toggle("active");

        // Close other open answers
        document.querySelectorAll(".answer").forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.classList.remove("open");
                otherAnswer.previousElementSibling.classList.remove("active");
            }
        });
    });
});
