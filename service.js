app.service('dataService', ["$http","$log",function ($http,$log) {
	this.doSum = function(a,b){
		return a*b;
	}
	
}]);