function sayHello() {
    alert("Hello! 👋 Thanks for visiting my portfolio!");
}
// You can add any animations or interactions for the About section here if needed.
// For now, let’s add a console log when the CV button is clicked.

document.querySelector(".btn").addEventListener("click", function() {
    console.log("Download CV button clicked!");
});
// You can later add animations like fade-in or progress bars if needed
console.log("Skills section loaded.");
function showTab(tabName) {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".qualification-content");

    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
    contents.forEach(content => {
        content.style.display = "none";
    });

    document.getElementById(tabName).style.display = "block";
    event.target.classList.add("active");
}
// Handle contact form submit
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset(); // Clear form fields
});
