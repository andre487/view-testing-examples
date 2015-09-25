/**
 * @file
 * Some utils for reduce code
 */
var templatesDocument = document.getElementById('templates').import;

/**
 * Get template string by element ID
 * @param {String} templateName
 * @returns {String}
 */
function getTemplateString(templateName) {
    var id = templateName + '-template';
    return templatesDocument.getElementById(id).innerHTML;
}
