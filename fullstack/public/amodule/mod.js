var mod = angular.module('restmod',[]);

mod.controller("rest",['httpservice','$scope',function(httpservice,$scope)
{
$scope.pattern="";

$scope.companies=[]; 
 
$scope.readpattern=function()
{
  console.log($scope.pattern);
    httpservice.getCompanies($scope.pattern).then(
        (data)=>{
            $scope.companies=data;
            $scope.digest;

        },
        (error)=>{
            $scope.companies=[];
            $scope.digest;
        }
        
    )
    
}
}]);

mod.service('httpservice',['$http',function($http)
{
    this.getCompanies=function(pattern)
    {
        return new Promise(function(resolve,reject)
        {
 $http.get("http://localhost:4780/mongo-api/cnames/"+pattern).then(
         (response)=>{resolve(response.data);},
         (error)=>{reject([]);}
        );
    
        });
    }
 }]);
