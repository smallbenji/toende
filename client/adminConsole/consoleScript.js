socket = new WebSocket('ws://localhost:8080');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paswd = urlParams.get('paswd');
if(paswd != 'exodust'){
    document.location.href = './index.html';
}

socket.addEventListener('open', function (event) {
    socket.send(`admin connected`);
});