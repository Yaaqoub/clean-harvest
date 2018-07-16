let base = require('../mixins/Base.js');

function Estimates(harvest) {
    this.harvest = harvest.estimates;
    this.name = 'estimates';
}

Object.assign(Estimates.prototype, base);

module.exports = Estimates;