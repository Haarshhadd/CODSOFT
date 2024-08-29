// script.js

document.getElementById('userInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent default Enter behavior
        sendMessage(); // Send the message
    } else if (event.key === 'Enter' && event.shiftKey) {
        // Move the cursor to the next line in the input box
        const cursorPosition = this.selectionStart;
        this.value = this.value.substring(0, cursorPosition) + '\n' + this.value.substring(cursorPosition);
        this.selectionStart = this.selectionEnd = cursorPosition + 1; // Move the cursor after the newline
        event.preventDefault(); // Prevent default action
    }
});

function sendMessage() {
    const userInputElement = document.getElementById('userInput');
    const userInput = userInputElement.value;
    
    if (userInput.trim() === "") return;

    // Append user's message to the chatbox
    const chatbox = document.getElementById('chatbox');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerText = userInput;
    chatbox.appendChild(userMessageDiv);

    // Scroll to the bottom
    chatbox.scrollTop = chatbox.scrollHeight;

    // Send the message to the backend
    fetch('https://ab7a-35-197-125-60.ngrok-free.app/chat', {  // Replace <your-ngrok-public-url> with the actual URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.response) {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'message bot-message';
            botMessageDiv.innerText = data.response;
            chatbox.appendChild(botMessageDiv);
        } else {
            console.error('Unexpected response format:', data);
        }

        // Scroll to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Clear the input field after sending the message
    userInputElement.value = '';
}

