const path = require('path');

var Settings = function (localPath) {
  if (localPath) {
    this.localSettings = localPath;
  } else {
    this.localSettings = path.join(__dirname, 'settings.json');
  }
};

Settings.prototype.get = function (settingName) {
  if (process.env[settingName]) {
    return process.env[settingName];
  } else if (this.localSettings[settingName]) {
    return this.localSettings[settingName]
  } else {
    return undefined;
  }
};

module.exports = new Settings();