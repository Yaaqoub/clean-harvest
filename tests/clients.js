let assert = require('assert'),
    config = require('./config'),
    factory = require('./factory');

let cleaner = config.cleaner;

let clientData = {};

describe('Clients API Cleaner', function() {
    before((done) => {
        clientData.CLIENT_NAME = factory.generateRandomNames('CLIENT');

        factory.createNewExample('clients', {
            name: clientData.CLIENT_NAME,
            currency: 'EUR'
        });

        done();
    });

    after((done) => {
        done();
    });

    describe('Remove all clients', function() {
        it('should implement Remove all clients method', (done) => {
            assert.equal(typeof cleaner.clients.all, 'function');
            done();
        });

        it('should Remove all clients', async() => {

            const removedClients = await cleaner.clients.all({
                allowLogs: false
            });



            //clientData.CLIENT_ID = factory.getID(client);
            console.log(removedClients);
            //assert.equal(typeof clientData.CLIENT_ID, 'number', 'The response body should contain a id');
        });
    });
});