const path = require('path')

exports.install = function() {
	ROUTE('/*', view_cms);

	// Posts
	ROUTE('#posts', view_posts, ['*Post']);
	ROUTE('#post', view_posts_detail, ['*Post']);
	ROUTE('#notices', view_notices, ['*Notice']);
	ROUTE('/a', view_a);
	ROUTE('/b', view_b);
	ROUTE('/c', view_c);
	// Server static files
	// FILE('/_next/static/css/*.css', serve_next_files);
	// FILE('/_next/static/chunks/*.js', serve_next_files);
	// FILE('/_next/static/development/pages/*.js', serve_next_files);
	// FILE('/_next/static/development/dll/*.js', serve_next_files);
	// FILE('/_next/static/runtime/*.js', serve_next_files);
	// FILE('/_next/static/runtime/*.js', serve_next_files);
	// FILE('/_next/static/development/*.js', serve_next_files);
};

function serve_next_files(req, res){
	var pathname = req.uri.pathname;
	console.log("REQ.URL = " + pathname.replace('_next', '.next'));
	console.log("REQ.URL public = " + F.path.public(pathname));
	console.log("REQ.URL resolve = " + path.resolve(pathname.replace('/_next', '.next')));
	res.file(path.resolve(pathname.replace('/_next', '.next')));
}

function view_a() {
	var self = this;
	console.log('CALLING view_a');
	self.view('a', self.query);
}

function view_b() {
	var self = this;
	console.log('CALLING view_b');
	// self.next('b', self.query);
	self.view_next('/b');
}

function view_c() {
	var self = this;
	// self.next('c', self.query);
	console.log('CALLING view_c');
	self.view_next('/c');
}

function view_cms() {
	var self = this;
	var pathname = self.req.uri.pathname.replace(new RegExp('/', 'g'), '');;
	if (pathname.indexOf('react') != -1) {
		self.view_next('/' + pathname);
	} else {
		self.CMSpage();
	}
}

function view_posts() {
	var self = this;
	var options = {};

	options.page = self.query.page;
	options.published = true;
	options.limit = 10;
	// options.category = 'category_linker';

	self.sitemap();
	self.$query(options, self.callback('posts'));
}

function view_posts_detail(linker) {

	var self = this;
	var options = {};

	options.linker = linker;
	// options.category = 'category_linker';

	self.$workflow('render', options, function(err, response) {

		if (err) {
			self.throw404();
			return;
		}

		self.sitemap();
		self.sitemap_replace(self.sitemapid, response.name);
		self.view('cms/' + response.template, response);
	});
}

function view_notices() {
	var self = this;
	var options = {};

	options.published = true;

	self.sitemap();
	self.$query(options, self.callback('notices'));
}