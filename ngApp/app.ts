namespace mongoose {

    angular.module('mongoose', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/ngApp/views/home.html',
        controller: mongoose.Controllers.HomeController,
        controllerAs: 'controller'
    })
    .state('edit', {
        url: '/edit/:id',
        templateUrl: '/ngApp/views/edit.html',
        controller: mongoose.Controllers.EditController,
        controllerAs: 'controller'
    })
    .state('about', {
        url: '/about',
        templateUrl: '/ngApp/views/about.html',
        controller: mongoose.Controllers.AboutController,
        controllerAs: 'controller'
    })
    .state('notFound', {
        url: '/notFound',
        templateUrl: '/ngApp/views/notFound.html'
    });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
