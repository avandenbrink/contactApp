(function(angular) {
	var app = angular.module('controllers', [ ]);

	app.controller('ContactController', ['$http', '$rootScope', function($http, $rootScope){

		//preserve this for ajax request
		var list = this;
		list.names = [ ];
		$rootScope.focus = [ ];

		//collect data
		$http.get('contacts.JSON').success(function(data) { list.names = data['contacts']; $rootScope.names = list.names; });
	}]);

	app.directive('searchForm', function() {
		return {
			restrict: 'E',
			templateUrl: 'search-form.html',
			controllerAs: 'searchCtrl',
			controller: function() {
				this.searchString = "";

				this.searchName = function(string) {
					string = string.toLowerCase();
					var search = this.searchString.toLowerCase();

					if (this.searchString == "") {
						return true;
					} else if (string.indexOf(search) > -1) {
						return true;
					}
					return false;
				}

				this.isEmpty = function() {
					if (this.searchString === "") {
						return true;
					}
					return false;
				}

				this.clearSearch = function() {
					this.searchString = "";
				}
			}
		}
	});

	app.controller('DetailController', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {

		function findContact(element, index, array) {
			if (element.firstname == $routeParams.firstname && element.lastname == $routeParams.lastname) {
				return element;
			}
		}

		$scope.contact = $rootScope.names.find(findContact);
		
		$scope.buttonText = "Edit";
		$scope.isEditing = false;

		$scope.setEditing = function(){
			if ($scope.isEditing) {
				$scope.isEditing = false;
				$scope.buttonText = "Edit";
			} else {
				$scope.isEditing = true;
				$scope.buttonText = "Done";
			}
		}



	}]);


})(window.angular);
