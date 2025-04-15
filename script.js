document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        let body = document.querySelector('body');
        let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPosition = window.scrollY;

        if (scrollPosition >= scrollHeight - 100) {
            body.classList.add('show-footer');
        } else {
            body.classList.remove('show-footer');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const rollingText = document.getElementById("rollingText");
    const textArray = [
        "Strategic Planner",
        "Learning Designer",
        "Problem-Solver",
        "Conceptual Creator",
        "Digital Doodler",
        "Pattern Searcher",
        "Growth Seeker",
    ];

    let currentIndex = 0;

    function updateText() {
        rollingText.textContent = textArray[currentIndex];
        rollingText.classList.add("show");
        setTimeout(function() {
            rollingText.classList.remove("show");
            currentIndex = (currentIndex + 1) % textArray.length;
        }, 3000); // Wait 3 seconds before changing the text
        setTimeout(updateText, 4000); // Wait 4 seconds before running the next text change
    }

    updateText(); // Start the rotation
});

// JavaScript functions for modal
function openModal(modalId, event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById(modalId).classList.add('active');
    setTimeout(function() {
        document.getElementById(modalId).style.display = 'block';
    }, 100); // Adjust the delay (in milliseconds) for the darkening effect
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    setTimeout(function() {
        document.getElementById(modalId).style.display = 'none';
    }, 300); // Adjust the delay (in milliseconds) for the closing effect
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModalWithEscape(); // Call the function to close modal
    }
});

function closeModalWithEscape() {
    // Get all the modal elements
    const modals = document.querySelectorAll('.modal');

    // Loop through each modal and close it
    modals.forEach(modal => {
        if (modal.classList.contains('active')) {
            const modalId = modal.getAttribute('id');
            closeModal(modalId);
        }
    });
}




