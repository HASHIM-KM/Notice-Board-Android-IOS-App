// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app=angular.module('starter', ['ionic']);
app.controller('home',function($scope,$http){
  $scope.names=[];
 $http({
  methord:"GET",
  url:"http://www.eassahollidays.com/new/get1.php"
 }).then(function (response) {
  $scope.names = response.data;
  console.log(response);
});
});
app.controller('detail',function($scope,$http,$stateParams){ 
 $scope.names=[];
  var id=$stateParams.ID;
     
      $scope.id = $stateParams.ID;
 $http({
  methord:"GET",
  url:"http://www.eassahollidays.com/new/get1.php"
 }).then(function (response) {
  $scope.names = response.data;
  console.log(response);
});
});
app.controller('LoginCtrl', function($scope,$location) {
   $scope.login=function(){
    var username=$scope.username;
    var password=$scope.password;
    if ($scope.username=='admin' && $scope.password=='admin') {
      $location.path('app/add');
    }
    else{
      alert('wrong');
    }
   };
});
app.controller('per',function($scope,$http){
  $scope.names=[];
 $http({
  methord:"GET",
  url:"http://www.eassahollidays.com/new/get1.php"
 }).then(function (response) {
  $scope.names = response.data;
  console.log(response);
});
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    //controller: 'AppCtrl'
  })
    .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
       // controller:'HomeCtrl'
      }
    }
  })
 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })
.state('app.detail', {
    url: '/detail/:ID',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
   .state('app.add', {
    url: '/add',
    views: {
      'menuContent': {
        templateUrl: 'templates/add.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
      //    controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        //controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
