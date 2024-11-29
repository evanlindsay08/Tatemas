// Countdown Timer
function updateCountdown() {
    const launchDate = new Date('December 25, 2024 00:00:00 GMT+0000').getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    if (distance > 0) {
        document.getElementById('countdown').innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdown').innerHTML = "Merry Christmas! 🎄";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Snow Effect
function createSnowflakes() {
    const snowflakesCount = 50;
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.top = '0';
    container.style.left = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1000';
    
    // Add keyframe animation to head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(styleSheet);
    
    for(let i = 0; i < snowflakesCount; i++) {
        let snowflake = document.createElement('div');
        snowflake.innerHTML = '❄';
        snowflake.style.position = 'absolute';
        snowflake.style.color = 'white';
        snowflake.style.opacity = '0.8';
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(snowflake);
    }
    
    document.body.appendChild(container);
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    setInterval(updateCountdown, 1000);
    initSmoothScrolling();
});
