
angular.module("myApp").directive("productDirective",["$compile","$templateRequest",function($compile,$templateRequest){
return{
  restrict:"A",
  scope:{},
  link:function(scope,element,attr){ 
     var newTemplate=$templateRequest("https://1cloudmini.github.io/angularjspostdemo/directives/ProductDirective.html");
      var content = $compile(newTemplate)(scope);
            element.append(content);
  }
};
}]);
