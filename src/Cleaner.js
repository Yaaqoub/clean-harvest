'use strict';

let Harvest = require('./auth/Authentication'),
    fs = require('fs'),
    path = require('path'),
    camelCase = require('lodash/camelCase');

module.exports = class Cleaner {
    constructor(config) {
        this.headerAuth = new Harvest(config);

        fs.readdirSync(path.join(__dirname, 'api')).forEach(name => {
            let prop = camelCase(name.slice(0, -3));
            let Resource = require(`./api/${name}`);

            this[prop] = new(Resource)(this.headerAuth.harvest());
        });
    }
};

