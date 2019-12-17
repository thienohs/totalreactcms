exports.install = function() {
	MERGE('/test/js/default.js', '=test/public/js/ui.js', '=test/public/js/default.js');
	MERGE('/test/css/default.css', '=test/public/css/ui.css', '=test/public/css/default.css');
	LOCALIZE('/test/widgets/*.html');
};