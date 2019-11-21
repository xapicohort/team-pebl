var globalPebl = window.top.PeBL;

var config = {};

globalPebl.extension.config = config;

window.Configuration = {}
window.Configuration.lrsUrl = 'https://trial-lrs.yetanalytics.io/xapi'; //TODO: CHANGE ME
window.Configuration.lrsCredential = '5dd5f673-7415-4105-bc58-5ce49f740ab6'; //TODO: CHANGE ME
window.Configuration.useLinkedIn = false;
window.Configuration.favicon = 'images/eXtension-icon_small.png';

var config = {};

globalPebl.extension.config = config;

// These functions run when the page is loaded.
config.onLoadFunctions = {

}
// Data Entry extension config
config.dataEntry = {

}
// lowStakes Quiz extension config
config.lowStakesQuiz = {

}

$(document).ready(function() {
    if (config.onLoadFunctions) {
        Object.values(config.onLoadFunctions).forEach(function(value) {
            if (typeof value === "function") {
                value();
            }
        });
    }
});
