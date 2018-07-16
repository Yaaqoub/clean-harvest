let base = require('../mixins/Base.js'),
    pick = require('lodash/pick.js');

function Estimates(harvest) {
    this.harvest = harvest.estimates;
    this.name = 'estimates';
}

Object.assign(Estimates.prototype, base);

module.exports = Estimates;