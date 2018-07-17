let base = require('../mixins/Base.js'),
    fs = require('fs'),
    path = require('path'),
    camelCase = require('lodash/camelCase');

function Harvest(harvest) {
    let names = [];

    this.harvest = harvest.clients;

    fs.readdirSync(path.join(__dirname)).forEach(name => {
        let prop = camelCase(name.slice(0, -3));

        if (prop !== 'harvest') {
            names.push(prop);
        }
    });

    this.name = names;
}

//Object.assign(Harvest.prototype, base);

module.exports = Harvest;