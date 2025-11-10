// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Animated counter for hero statistic
const statNumber = document.querySelector('.stat-number');
const target = parseInt(statNumber.getAttribute('data-target'));

let count = 0;
const increment = target / 100;
const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
        statNumber.innerText = target.toLocaleString();
        clearInterval(timer);
    } else {
        statNumber.innerText = Math.floor(count).toLocaleString();
    }
}, 50);

// Simple animation for stats in impact section
const stats = document.querySelectorAll('.stat h3');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const countTo = parseInt(target.innerText);
            let count = 0;
            const timer = setInterval(() => {
                count++;
                target.innerText = count;
                if (count === countTo) {
                    clearInterval(timer);
                }
            }, 50);
            observer.unobserve(target);
        }
    });
}, observerOptions);

stats.forEach(stat => {
    observer.observe(stat);
});
