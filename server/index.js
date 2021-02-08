const WebSocket = require('ws');

var toende = { "hp": 0}
const wss = new WebSocket.Server({ port: 8080 });
let id = 1;

players = [];

wss.on('connection', function connection(ws) {
    console.log(`A new client connected...`);

    ws.on('message', function incomming(message) {
        console.log('received: %s', message);
        if(message.startsWith('!!')){
            console.log(true);
        }
        if(message.startsWith('user:')){
            message = message.split(" ");
            players.push({"name": message[1], "id": id});
            ws.send(`id: ${id}`);
            id++;
            toende.hp += 25;
            console.log(players);
        }
        
    });
});



function damage(id, damage) {

}