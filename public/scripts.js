const socket = io(); // Connects & knocks on the door to the server.

socket.on('connect', () => {
    console.log('Connected to server with ID:', socket.id);
});

socket.on('newClient', (data) => {
    console.log('Message to all clients: A new socket has joined', data);
    // socket.emit('message', `Welcome to the chat ${data}`);
});



















const form = document.getElementById('message-form');
const input = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
            socket.emit('message', input.value);
            input.value = '';
        }
    });
}

// Listen for messages broadcast by the server
socket.on('message', (msg) => {
    if (messagesContainer) {
        const item = document.createElement('div');
        item.textContent = typeof msg === 'string' ? msg : JSON.stringify(msg);
        item.className = 'bg-blue-100 text-blue-800 p-2 rounded-md text-sm';
        messagesContainer.appendChild(item);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
