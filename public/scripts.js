console.log("Hello")

const socket = io("http://localhost:4000")



// const socket = io();

// const form = document.getElementById('message-form');
// const input = document.getElementById('message-input');
// const messagesContainer = document.getElementById('messages');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (input.value) {
//         Send message to the server
//         socket.emit('message', input.value);
//         input.value = '';
//     }
// });

// Listen for messages broadcast by the server
// socket.on('message', (msg) => {
//     const item = document.createElement('div');
//     item.textContent = msg;
//     item.className = 'bg-blue-100 text-blue-800 p-2 rounded-md text-sm';
//     messagesContainer.appendChild(item);
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
// });
