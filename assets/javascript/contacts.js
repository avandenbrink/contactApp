(function(angular) {
	var app = angular.module('contacts', ['ngRoute', 'controllers']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	  $routeProvider
		.when('/contact/:firstname&:lastname', {
			templateUrl: 'contact-detail.html',
			controller: 'DetailController',
			controllerAs: 'detail',
		});
	}]);

	app.directive('format', ['$filter', function ($filter) {
		return {
			require: 'ngModel',
			link: function (scope, elem, attrs, ctrl) {
				if (!ctrl) return;

				ctrl.$formatters.unshift(function (a) {
					return $filter(attrs.format)(ctrl.$modelValue)
				});

				ctrl.$parsers.unshift(function (viewValue) {
					var plainNumber = viewValue.replace(/[\ |\-+|\(|\)]/g, '');
					elem.val($filter(attrs.format)(plainNumber));
					return plainNumber;
				});
			}
		};
	}]);

	app.filter('telephone', function(index) {
		return function (tel) {

			if (!tel) { return ''; }

			var value = tel.toString().trim().replace(/^\+/, '');
			var output;

			if (value.length > 1) {
				var max = 3;
				if (value.length < max) {
					max = value.length;
				}
				output = '('+value.slice(0, max);

				if (value.length > 3) {
					max = 6;
					output += ') '+value.slice(3, max);

					if (value.length > 6) {
						max = 10;
						output += '-'+value.slice(6, max);
						}
				}
			}
			return output;
		};
	});

})(window.angular);