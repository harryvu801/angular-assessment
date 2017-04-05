app.service('shopService', function ($http) {

  var baseUrl = 'http://practiceapi.devmounta.in/products/';


  this.getProducts = function () {
    return $http.get(baseUrl).then(function(response) {
      return response.data
    })
  }

  this.getProductDetails = function (id) {
    return $http.get(baseUrl + id).then(function (details){
      console.log('got response');
      return details.data;
    })
  }

})
