app.controller('productDetailsCtrl', function ($scope, shopService, $stateParams){

  $scope.getProductDetails = function () {
    return shopService.getProductDetails($stateParams.id).then(function (response) {
      console.log(response);
      $scope.product = response;
    });
  }

  $scope.getProductDetails();
})
