var exports = module.exports = {};

let Harvest = require('harvest-v2'),
    config = require('./config'),
    harvest = new Harvest(config.harvest_auth);

const random_number = Math.floor(Math.random() * 10000) + 1;


exports.generateRandomNames = function(name) {
    return 'HARVEST_TEST_' + name + '_NAME_' + random_number;
};

exports.createNewExample = function (api_name, params) {
    harvest[api_name].create(params);
};