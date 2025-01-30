async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (userInput.value.trim() === "") return;

    // Display user message
    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Send request to backend
    const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_message: userInput.value })
    });

    const data = await response.json();

    // Display AI response
    const botMessage = document.createElement("p");
    botMessage.className = "bot-message";
    botMessage.textContent = data.response;
    chatBox.appendChild(botMessage);

    // Clear input field
    userInput.value = "";

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
