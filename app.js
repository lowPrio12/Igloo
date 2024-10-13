const lineContainer = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const searchInput = document.getElementById('search-input');
const serviceItems = document.querySelectorAll('.service-item');

// Hamburger menu toggle
lineContainer.addEventListener("click", () => {
    const isActive = lineContainer.classList.toggle("active");
    menu.classList.toggle("active");
    lineContainer.setAttribute("aria-expanded", isActive);
});

// Search functionality with debounce
let timeout;
searchInput.addEventListener('input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const filter = searchInput.value.toLowerCase();

        // Show all items if search input is empty
        if (filter === '') {
            serviceItems.forEach(item => {
                item.style.display = 'block';
            });
            return;
        }

        serviceItems.forEach(item => {
            const title = item.textContent.toLowerCase();
            item.style.display = title.includes(filter) ? 'block' : 'none';
        });
    }, 300); // Delay in milliseconds
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated login process
    if (username === "admin" && password === "password123") {
        document.getElementById('loginMessage').innerText = "Login successful!";
        document.getElementById('loginMessage').style.color = "green";
        // Redirect or perform further actions here
    } else {
        document.getElementById('loginMessage').innerText = "Invalid username or password.";
        document.getElementById('loginMessage').style.color = "red";
    }
});

