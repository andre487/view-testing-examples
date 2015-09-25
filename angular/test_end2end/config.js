/**
 * @file
 * Config for the Protractor end to end tests
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8080',

    specs: ['*.spec.js'],

    capabilities: { 'browserName': 'chrome' }
};
