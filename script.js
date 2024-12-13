const answers = [
    "Yes",
    "No",
    "Yes, definitely!",
    "Without a doubt",
    "Most likely",
    "Error 404 Try again",
    "Server Overload",
    "Very doubtful",
    "NO! NO! AND NO!",
    "I can't tell you right now",
    "Don't count on it",
    "Signs point to yes",
    "Absolutely",
    "I stole your answer",
    "Better not tell you now",
    "...",
    "Leave me alone please",
    "Get out",
    "It is certain",
    "Without a doubt",
    ];

    function askQuestion() {
        const question = document.getElementById("question").value.trim();
        const answerDisplay = document.getElementById("answer");
    
        if (question) {
            const randomIndex = Math.floor(Math.random() * answers.length);
            answerDisplay.textContent = answers[randomIndex];
            answerDisplay.style.display = "block";
    
            setTimeout(() => {
                answerDisplay.style.display = "none";
            }, 3000);
        } else {
            alert("Please ask a question!");
        }
        document.getElementById("question").value = "";
}
    