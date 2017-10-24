app.factory('dataFactory',["$http","$q",function ($http,$q) {
	
	var oCalFactory = {};
	oCalFactory.getData = function (){
		var deferred = $q.defer();
		$http.get('https://medrx.in/api/roles').success(function(data){
			if(data.status == "success"){
				deferred.resolve(data);
			}else{
				deferred.reject(data.message);
			}
		}).error(function(err){
			deferred.reject(err);
		})
		return deferred.promise;
	} 
	 return oCalFactory;
}]);