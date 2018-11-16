const http = require("http");
const info = require('./os');

const handler = (request, response) => {
    console.log('Recibimos peticion');
    response.end(`  <p>CPUS</br> ${JSON.stringify(info.osData.cpus)}</p>
                    <p>SYSTEM</br> ${JSON.stringify(info.osData.system)}</p>
                    <p>SERVER</br> ${JSON.stringify(info.osData.server)}</p>
                `);
}
const server = http.createServer(handler);
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');