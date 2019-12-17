require('total.js');
const options = {};
// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];
const release = process.env.NODE_ENV === 'production';
const next = require('next');
const app = next({ dir: '.', dev: !release });
const handle = app.getRequestHandler();

app.prepare().then(function() {

	Controller.prototype.next = function(name, model) {
		// this.custom();
		// app.render(this.req, this.res, name, model);
		// const rendered = this.view(name, model);
		// app.sendHTML(this.req, this.res, "abc");
		//app.render(this.req, this.res, name, model);
		// return this.viewNext(name, model);
		//return this;
		this.custom();
		return app.render(this.req, this.res, '/b', this.req.query);
	};

	Controller.prototype.nextApp = app;

	ROUTE('/_next/*', function() {
		this.custom();
		handle(this.req, this.res);
	});

	FILE('/_next/*', function(req, res) {
		// this.custom();
		handle(req, res);
	});

	F.http(release ? 'release' : 'debug', options);
});