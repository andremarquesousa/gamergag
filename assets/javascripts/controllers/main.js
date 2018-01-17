gamerGag.controller('MainCtrl', function($scope, $transitions){
    var self = this;

	self.bodyClasses = 'default';
	// this'll be called on every state change in the app

    $transitions.onStart( {}, function (trans) {
		if (trans.to().name) {
				self.bodyClasses = trans.to().name;
				return;
		}
		self.bodyClasses = 'default';
    });
});
