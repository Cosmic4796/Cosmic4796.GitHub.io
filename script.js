document.addEventListener('DOMContentLoaded', () => {
    const eightBall = document.getElementById('eight-ball');
    const answerText = document.getElementById('answer');

    const responses = [
        "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.",
        "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.",
        "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
        "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
        "Don't count on it.", "My reply is no.", "My sources say no.",
        "Outlook not so good.", "Very doubtful."
    ];

    eightBall.addEventListener('click', () => {
        // Prevent multiple clicks while animating
        if (eightBall.classList.contains('shake')) {
            return;
        }

        // Add shake animation class
        eightBall.classList.add('shake');

        // Reset text appearance for the "thinking" phase
        answerText.textContent = "Asking the cosmos...";
        answerText.style.fontSize = '14px';
        answerText.style.color = '#fff'; // White text during "thinking"

        // Wait for the shake animation to finish (0.8s) before revealing the answer
        setTimeout(() => {
            // Remove the shake class to allow it to be re-triggered
            eightBall.classList.remove('shake');

            // Select a random response
            const randomIndex = Math.floor(Math.random() * responses.length);
            const response = responses[randomIndex];
            
            // Display the final answer
            answerText.textContent = response;
            answerText.style.fontSize = '14px';
            answerText.style.color = '#333'; // Darker color for readability on white background
        }, 800); // Match this timeout to the CSS animation duration (0.8s)
    });
});
