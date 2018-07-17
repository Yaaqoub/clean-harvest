let Cleaner = require('../src/Cleaner');
require('dotenv').load();

const harvest_auth = {
    account_ID: process.env.ACCOUNT_ID || '',
    access_token: process.env.ACCESS_TOKEN || '',
    user_agent: process.env.USER_AGENT || ''
};

const cleaner = new Cleaner(harvest_auth);

module.exports = {
    harvest_auth,
    cleaner
};