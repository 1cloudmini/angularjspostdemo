// Code goes here
var app = angular.module('myApp', []);
app.constant('API_URI', 'https://script.google.com/macros/s/AKfycbwm2SdGaU8C8RqzSrKcbrr9yypO7zGmaYTvnv1EEmhWU3fGPrE/exec');
app.controller('PosController',["$scope","ProductService", function ($scope,ProductService) {
    function init(){
     var filterText={"textFilter":"","isActive":true,"maxResult":10,"skip":1}
    ProductService.getList(filterText).then(function(data){
     console.log(data);
        debugger;
           $scope.drinks=data;
    }); 
    }
    init();
   // $scope.drinks = ProductService;

    $scope.order = [];
    $scope.new = {};
    $scope.totOrders = 0;

    var url = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;

    $scope.getDate = function () {
        var today = new Date();
        var mm = today.getMonth() + 1;
        var dd = today.getDate();
        var yyyy = today.getFullYear();

        var date = dd + "/" + mm + "/" + yyyy

        return date
    };

    $scope.addToOrder = function (item, qty) {
        var flag = 0;
        if ($scope.order.length > 0) {
            for (var i = 0; i < $scope.order.length; i++) {
                if (item.id === $scope.order[i].id) {
                    item.qty += qty;
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                item.qty = 1;
            }
            if (item.qty < 2) {
                $scope.order.push(item);
            }
        } else {
            item.qty = qty;
            $scope.order.push(item);
        }
    };

    $scope.removeOneEntity = function (item) {
        for (var i = 0; i < $scope.order.length; i++) {
            if (item.id === $scope.order[i].id) {
                item.qty -= 1;
                if (item.qty === 0) {
                    $scope.order.splice(i, 1);
                }
            }
        }
    };

    $scope.removeItem = function (item) {
        for (var i = 0; i < $scope.order.length; i++) {
            if (item.id === $scope.order[i].id) {
                $scope.order.splice(i, 1);
            }
        }
    };

    $scope.getTotal = function () {
        var tot = 0;
        for (var i = 0; i < $scope.order.length; i++) {
            tot += ($scope.order[i].price * $scope.order[i].qty)
        }
        return tot;
    };

    $scope.clearOrder = function () {
        $scope.order = [];
    };

    $scope.checkout = function (index) {
        alert($scope.getDate() + " - Order Number: " + ($scope.totOrders+1) + "\n\nOrder amount: $" + $scope.getTotal().toFixed(2) + "\n\nPayment received. Thanks.");
        $scope.order = [];
        $scope.totOrders += 1;
    };

    $scope.addNewItem = function (item) {
        if (item.category === "Drinks") {
            item.id = $scope.drinks.product.length + $scope.foods.length
            $scope.drinks.product.push(item)
            $scope.new = []
            $('#myTab a[href="#drink"]').tab('show')
        } else if (item.category === "Foods") {
            item.id = $scope.drinks.product.length + $scope.foods.length
            $scope.foods.push(item)
            $scope.new = []
            $('#myTab a[href="#food"]').tab('show')
        }
    };

}]);
