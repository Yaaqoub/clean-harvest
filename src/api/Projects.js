let base = require('../mixins/Base.js');

function Projects(harvest) {
    this.harvest = harvest.projects;
    this.name = 'projects';
}

Object.assign(Projects.prototype, base);

module.exports = Projects;