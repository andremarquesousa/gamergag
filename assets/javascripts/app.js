var gamerGag = angular.module('gamerGag', ['ui.router']);

gamerGag.config(function($stateProvider, $locationProvider, $urlRouterProvider,) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'HomeCtrl',
            data: {
               bodyClasses: 'home'
            }
        })
        .state('register', {
            url: '/cadastro',
            templateUrl: '/templates/register.html',
            controller: 'RegisterCtrl',
            data: {
               bodyClasses: 'register'
            }
        })
        .state('user', {
            url: '/usuario/:userId',
            templateUrl: '/templates/user.html',
            controller: 'UserCtrl',
            data: {
               bodyClasses: 'user'
            }
        })
        .state('post', {
            url: '/post/:postId',
            templateUrl: '/templates/post.html',
            controller: 'PostCtrl',
            data: {
               bodyClasses: 'post'
            }
        })
        .state('create-meme', {
            url: '/criar-meme',
            templateUrl: '/templates/create-meme.html',
            controller: 'CreateMemeCtrl',
            data: {
               bodyClasses: 'create-meme'
            }
        })
        .state('contact', {
            url: '/contato',
            templateUrl: '/templates/contact.html',
            controller: 'ContactCtrl',
            data: {
               bodyClasses: 'contact'
            }
        });


    $urlRouterProvider.otherwise('/home');
    $locationProvider.hashPrefix('');

    //$locationProvider.html5Mode(true);
});
