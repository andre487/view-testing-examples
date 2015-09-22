/**
 * @file
 * Some utils for reduce code
 */
(function() {
    // Для простоты мы получаем шаблоны из DOM с помощью костыля и такой-то матери,
    // но в production-решении их нужно было бы инлайнить при сборке
    var templatesDocument = document.getElementById('templates').import;
    var templates = templatesDocument.querySelectorAll('script[type="text/template"]');
    [].slice.call(templates).forEach(function(node) {
        node = node.cloneNode(true);
        node.style.display = 'none';
        document.body.appendChild(node);
    });
})();

/**
 * Get template string by element ID
 * @param {String} id
 * @returns {String}
 */
function getTemplateString(id) {
    return document.getElementById(id).innerHTML;
}
