// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Countdown Timer
const eventDate = new Date("December 31, 2026 09:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (days) {
        days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }
}, 1000);

// Registration Form
const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("🎉 Registration Successful!");
        form.reset();
    });
}