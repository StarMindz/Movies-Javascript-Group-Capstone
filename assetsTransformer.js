/* eslint-disable prefer-template */
const path = require('path');

module.exports = {
  process(src, filename) {
    return 'modules.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
