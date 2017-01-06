"use strict";

module.exports = ["$scope", "$modalInstance", "options", function ($scope, $modalInstance, options) {
	$scope.bulletins = options.bulletins;
	$scope.reloadLink = options.reloadLink;

	if (options.getPromise) {
		// If another getNotifications request is being made, show loading mask
		$scope.loading = true;

		options.getPromise.then(function (bulletins) {
			// After getNotifications response comes back, hide mask, and if response was successful,
			// show bulletins in modal
			$scope.$apply(function () {
				$scope.loading = false;

				if (bulletins) {
					$scope.bulletins = bulletins;
				}
			});
		}).done();
	}
}];