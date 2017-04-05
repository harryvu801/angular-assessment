app.controller('shopCtrl',function ($scope, shopService,$stateParams) {

  $scope.getProducts = function () {
    return shopService.getProducts().then(function (response) {
      console.log(response);
      $scope.products = response;
    });
  }

  $scope.getProducts();

  // $scope.getProductDetails = function ($stateParams) {
  //   console.log('fn started');
  //   return shopService.getProductDetails($stateParams).then(function (response) {
  //     console.log(response);
  //     $scope.product = response;
  //   });
  // }

  $scope.displayBool = true;

})
