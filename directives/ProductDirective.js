
angular.module("myApp").directive("productDirective",[function(){
return{
  restrict:"A",
  scope:{},
  templateUrl:"../directives/ProductDirective.html",
  link:function(scope,element,attr){ 
  }
};
}]);
