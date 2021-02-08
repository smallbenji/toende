const socket = new WebSocket('ws://localhost:8080');

//things...
var range;
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);
socket.addEventListener('open', function (event) {
    socket.send(`login: ${id}`);
});
window.onload = function(){
    range = document.getElementById('range');
    range.disabled = true;
}
function yourTurn(){
    var turn = 1;
    console.log(1);
    document.addEventListener('keypress', (e)=>{
        if(e.code == 32){
            turn = 0;
        }
    });
    console.log(2);
    while(turn==1){
        var value = 5
        range.value = value
        value++;
        if(value==10){
            value = 1;
        }
    }   
}