async function startCamera() {
    const video = document.getElementById("video");
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error("Camera access denied or unavailable: ", error);
        alert("Could not access the camera. Please check your browser permissions.");
    }
}
// --- Chatbot Logic ---

// 1. Open and Close the Chat Window
function toggleChat() {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.classList.toggle("active");
}

// 2. Handle Sending a Message
function sendMessage() {
    const inputField = document.getElementById("chatInput");
    const messageText = inputField.value.trim();
    
    // Don't send empty messages
    if (messageText === "") return;

    const chatBody = document.getElementById("chatBody");

    // Create the User's Message Bubble
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = messageText;
    chatBody.appendChild(userMessage);

    // Clear the input box
    inputField.value = "";

    // Auto-scroll to the newest message
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate the Bot "Typing" and Responding
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerText = "Thanks for asking! I am currently a front-end demo. Once my backend is connected, I'll be able to give you specific advice on hemophilia joint care.";
        chatBody.appendChild(botMessage);
        
        // Auto-scroll again
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000); // Waits 1 second before replying
}

// 3. Allow pressing "Enter" to send a message
function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}