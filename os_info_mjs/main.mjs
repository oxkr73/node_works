import http from 'http';
import {osCpus, osSystem, osServer} from './os.mjs';

const handler = (request, response) => {
    console.log('Recibimos peticion');
    response.end(`  <p>CPUS</p> ${JSON.stringify(osCpus)}
                    <p>SYSTEM</p> ${JSON.stringify(osSystem)}
                    <p>SERVER</p> ${JSON.stringify(osServer)}

    `);
}
const server = http.createServer(handler);
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');