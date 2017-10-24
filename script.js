var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope','dataFactory','dataService',function ($scope,dataFactory,dataService) {
	dataFactory.getData().then(function(data){
		$scope.roles = data.message;
		console.log($scope.roles);
	},function(err){
		if(err.message){
			$scope.errorMessage = err.message;
		}else{
			$scope.errorMessage = err;
		}
	});
	$scope.data = dataService.doSum(10,20);
	console.log($scope.data);          
}]);


