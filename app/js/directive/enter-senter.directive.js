angular.module('cbsChat')
	.directive('enterSenter', [enterSenter])

function enterSenter () {
	return function (scope, element, attrs) {
		element.bind('keydown keypress', function (event) {
			if( event.which === 13 ) {
				scope.$apply(function () {
					scope.$eval( attrs.enterSenter )
				})
				event.preventDefault();
			}
 		})
	}
}
