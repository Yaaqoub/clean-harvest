let Harvest = require('harvest-v2');

module.exports = class Authentication {
    constructor (config) {
        this.headers = {
            account_ID: config.account_ID,
            access_token: config.access_token,
            user_agent: config.user_agent
        };
    }

    harvest() {
        return new Harvest(this.headers);
    }
};