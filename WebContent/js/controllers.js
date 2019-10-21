var controllers=angular.module("controllers",[]);
controllers.controller('userCtrl', ['$scope', function ($scope) {
        $scope.mobile=1111111111;
        $scope.password="password";   
        $scope.getLength = function(){
        	return $scope.password.length;
        };
        $scope.getStrength =  function getStrength(){
        	if( $scope.password.length>5){
        		bootbox.alert("Good!");
        	}
        	else{
        		bootbox.alert("To short!");
        	}
        };
}]);

controllers.controller('anotherUserCtrl', ['$scope', function ($scope) {
	 $scope.mobile=22222222222;
}]);

controllers.controller('ApplicationHomeCtrl',['$scope','$rootScope', function($scope,$rootScope){
    $rootScope.items=[];
    $rootScope.username='';
    $rootScope.count=0;
$scope.viewLoaded=function(){
    $('#myCarousel').carousel({
       interval: 1000 * 2
         });
}      
$scope.logout=function(){
   bootbox.confirm("Are you sure you want to logout?", function(result) {
       if(result)
       {               
           $rootScope.username='';
           bootbox.alert("You have been successfully logged out!!");
       }       
   });
}
}]);

controllers.controller('SignUpCtrl',['$scope','$rootScope',function($scope,$rootScope){
$scope.signup=function(){  
     bootbox.alert("Registration details saved");
};
}]);


controllers.controller('LoginCtrl', ['$scope',   '$rootScope',
   function ($scope,  $rootScope) {
     
       
       $scope.validate=function(form)
       {
             if($scope.user.username!=$scope.user.password)
                   {       
                       $scope.message="Oops! Credentials given were wrong! Please Re-try with valid credentials..!";
                       angular.element("#loginform")[0].reset();
                   }
                   else
                   {                           
                      $rootScope.username=$scope.user.username;
                       bootbox.alert("Successful Login");
                       angular.element("#loginform")[0].reset();
                       $scope.message='';
                   }
       };
       

}]);