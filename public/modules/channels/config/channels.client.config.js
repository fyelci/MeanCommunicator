'use strict';

// Configuring the Articles module
angular.module('channels').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Channels', 'channels', 'dropdown', '/channels(/create)?');
		Menus.addSubMenuItem('topbar', 'channels', 'List Channels', 'channels');
		Menus.addSubMenuItem('topbar', 'channels', 'New Channel', 'channels/create');
	}
]);