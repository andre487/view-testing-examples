/**
 * @file
 * Утилиты - в основном костыли, чтобы как-то связать
 * остальные компоненты с минимальным количеством кода
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
 * Извлечь строку шаблона по ID
 * @param {String} id
 * @returns {String}
 */
function getTemplateString(id) {
    return document.getElementById(id).innerHTML;
}
