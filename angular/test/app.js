
angular.module("myapp",["ngRoute","ngAnimate","ctrls","sevices"])
.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "index.html",
        controller:"index"
    }).when("/list/:id", {
        templateUrl: "list.html",
        controller: "list"
    }).when("/show/:id", {
        templateUrl: "show.html",
        controller: "list"
    }).otherwise("/")
})