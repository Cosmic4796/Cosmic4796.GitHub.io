document.addEventListener('DOMContentLoaded', () => {
    const eightBall = document.getElementById('eight-ball');
    const answerText = document.getElementById('answer');
    let isShaking = false; // Add a flag to prevent rapid clicking issues

    const responses = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes, definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    eightBall.addEventListener('click', () => {
        if (isShaking) return; // If currently shaking, ignore further clicks
        isShaking = true;

        // 1. Start the shake animation
        eightBall.classList.add('shake');

        // Reset text appearance immediately
        answerText.textContent = "thinking...";
        answerText.style.fontSize = '18px';
        answerText.style.color = '#000';

        // 2. Wait for the shake animation to finish (0.5s duration)
        // and a bit extra time to show the result
        setTimeout(() => {
            // Remove the shake class after the animation finishes
            eightBall.classList.remove('shake');
            
            // 3. Display the answer
            const randomIndex = Math.floor(Math.random() * responses.length);
            const response = responses[randomIndex];
            answerText.textContent = response;
            answerText.style.fontSize = '14px';
            answerText.style.color = '#333';
            isShaking = false; // Reset the flag
        }, 500); // 500ms delay matches the CSS animation duration
    });
});
