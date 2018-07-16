let base = require('../mixins/Base.js');

function Invoices(harvest) {
    this.harvest = harvest.invoices;
    this.name = 'invoices';
}

Object.assign(Invoices.prototype, base);

module.exports = Invoices;