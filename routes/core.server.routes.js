'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/about').get(core.about);
	app.route('/profile').get(core.profile);
	//app.route('/ProfilePage').get(users.ProfilePageView);
	
};
