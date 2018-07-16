let base = require('../mixins/Base.js');

function Clients(harvest) {
    this.harvest = harvest.clients;
    this.name = 'clients';
}

Object.assign(Clients.prototype, base);

module.exports = Clients;