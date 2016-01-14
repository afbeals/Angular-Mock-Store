var angularCustomersModule = angular.module('angularCustomers', ['ngRoute']);

  angularCustomersModule.config(function($routeProvider){
    $routeProvider
      .when('/orders', {templateUrl: 'partials/orders_partial.html', controller: 'ordersController'})
      .when('/customers', {templateUrl: 'partials/customers_partial.html', controller: 'customersController'})
      .otherwise({redirectTo: '/'});
  });


  angularCustomersModule.controller('homeController', function ($scope, customersFactory)
  {
     $scope.customers=[];

      customersFactory.getCustomers(function(data){
        $scope.customers = data;
      })

      $scope.addCustomer = function (){
        $scope.customers.push($scope.add_customer);
        $scope.add_customer = {};
      }
  });

  angularCustomersModule.controller('ordersController', function ($scope, customersFactory)
    {
     $scope.customers=[];

      customersFactory.getCustomers(function(data){
        $scope.customers = data;
      })
    })

  angularCustomersModule.controller('customersController', function ($scope, customersFactory)
    {
     $scope.customers=[];

      customersFactory.getCustomers(function(data){
        $scope.customers = data;
      })
    });
  
  angularCustomersModule.factory('customersFactory', function()
  {
    var customers = [
                      {name: 'Michael Choi', product: 'Nike Shoes', quantity: '2', date: 'April 3rd, 2014'}, 
                      {name: 'John Supsupin', product: 'Black Belts', quantity: '3', date: 'April 3rd, 2014'}, 
                      {name: 'Trey Villafane', product: 'Ice Creams', quantity: '5', date: 'April 1st, 2014'}, 
                      {name: 'India Meisner', product: 'Candies', quantity: '15', date: 'March 15th, 2014'}
    ];
    var factory ={};
    factory.getCustomers = function (callback){
      callback(customers);
    } 
    return factory;
  })