document.addEventListener('DOMContentLoaded', () => {
    const eightBall = document.getElementById('eight-ball');
    const answerText = document.getElementById('answer');

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
        // Reset appearance
        answerText.textContent = "thinking...";
        answerText.style.fontSize = '18px';
        answerText.style.color = '#000';
        
        // Add a slight delay for dramatic effect
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * responses.length);
            const response = responses[randomIndex];
            answerText.textContent = response;
            answerText.style.fontSize = '14px'; // Smaller font for the text answers
            answerText.style.color = '#333'; // Slightly darker color for readability
        }, 500);
    });
});
