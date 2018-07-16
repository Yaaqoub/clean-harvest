let completed = 0;

const base = {

    all(configs) {
        this.harvest.list().then((results) => {
            if (configs.allowLogs) {
                console.log('- ' + this.name + ' found: ' + results[this.name].length);
            }

            results[this.name].forEach((res) => {
                this.harvest.delete(res.id).then(() => {
                    if (configs.allowLogs) {
                        ++completed;
                        console.log(`Deleted: ${completed}`);
                    }
                });
            });
        });
    }
};

module.exports = base;