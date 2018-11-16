const os = require('os');

const cpus = os.cpus();
const system = os.platform();
const server = os.hostname();

module.exports.osData = {
    cpus,
    system,
    server
}

/*console.log(cpus)
console.log(system)
console.log(server)*/