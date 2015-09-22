/**
 * @file
 * Some twiks for better presentation
 */
var old = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
    old.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(130);
    });
    return old.apply(browser.driver.controlFlow(), arguments);
};
