

angular.module("myApp").factory("ProductService",["$http","API_URI",function($http,apiUrl){
  
   return  {
                getList:function(paramter){
                    var para=angular.extend(paramter,{
                      service:"product",
                        crud:"list"});
                     return $http({
                             url: apiUrl, 
                             method: "Get",
                             data:{service:'product',crud:'list',filter:{textFilter:'',isActive:true,maxResult:10,skip:1}}
                            });
                }
          };
// //   return {product:[{
// //         id: 0,
// //         name: "Still Water",
// //         price: "1",
// //     },
// //     {
// //         id: 1,
// //         name: "Sparkling Water",
// //         price: "1.10",
// //     },
// //     {
// //         id: 2,
// //         name: "Espresso",
// //         price: "1.20",
// //     },
// //     {
// //         id: 3,
// //         name: "Cappuccino",
// //         price: "1.30",
// //     },
// //     {
// //         id: 4,
// //         name: "Tea",
// //         price: "1.90",
// //     },
// //     {
// //         id: 5,
// //         name: "Hot Chocolate",
// //         price: "2.10",
// //     },
// //     {
// //         id: 6,
// //         name: "Coke",
// //         price: "2.00",
// //     },
// //     {
// //         id: 7,
// //         name: "Orange Juice",
// //         price: "1.90",
// //     }],
// //           foods : [{
// //         id: 8,
// //         name: "Waffle",
// //         price: "1.50",
// //     },
// //     {
// //         id: 9,
// //         name: "Brioche",
// //         price: "1.30",
// //     },
// //     {
// //         id: 10,
// //         name: "Cheesecake",
// //         price: "1.70",
// //     },
// //     {
// //         id: 11,
// //         name: "Sandwich",
// //         price: "2.70",
// //     },
// //     {
// //         id: 12,
// //         name: "Donuts",
// //         price: "1.90",
// //     },
// //     {
// //         id: 13,
// //         name: "Tortilla",
// //         price: "1.90",
// //     }]
// };
}]);
