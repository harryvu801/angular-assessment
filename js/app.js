var app = angular.module('shopApp',['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){


    $urlRouterProvider.when('','/')

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:'views/home.html'
      })

    $stateProvider
      .state('shop', {
        url:'/shop',
        templateUrl:'views/shop.html',
        controller: 'shopCtrl'
      })

    $stateProvider
      .state('about', {
        url:'/about',
        templateUrl:'views/about.html'
      })

    $stateProvider
      .state('blog', {
        url:'/blog',
        templateUrl:'views/blog.html'
      })

    $stateProvider
      .state('products', {
        url:'/products/:id',
        templateUrl:'views/product-details.html',
        controller: 'productDetailsCtrl'
      })
  })
