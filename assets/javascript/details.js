var app = angular.module('details', { });

	app.directive('contactDetail', ['$scope', '$routeParams', function($scope, $routeParams){
		// Runs during compile

		return {
			restrict: 'E',
			templateUrl: 'contact-detail.html',
			controller: function(){
				$scope.name = 'contactDetail';
				$scope.params = $routeParams;

				this.buttonText = "Edit";
				this.isEditing = false;	

				this.setEditing = function(){
					if (this.isEditing) {
						this.isEditing = false;
						this.buttonText = "Edit";
					} else {
						this.isEditing = true;
						this.buttonText = "Done";
					}
				}
			},
			controllerAs: 'details',

			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);