
angular.module("myApp").directive("productDirective",["$compile",function($compile){
return{
  restrict:"A",
  scope:{},
  templateUrl:"../directives/ProductDirective.html",
  link:function(scope,element,attr){ 
      var content = $compile(element)(scope);
            element.append(content);
  }
};
}]);
