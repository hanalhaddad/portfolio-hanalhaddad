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
        currentIndex = (currentIndex + 1) % textArray.length;
    }

    updateText();

    setInterval(updateText, 4000); // Adjust the timing to match your animations (4000 milliseconds)
});
