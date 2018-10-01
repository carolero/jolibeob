$(document).ready(function() {
    $(".botao-registrar").click(function(event){
        event.preventDefault();

        var email = $(".sign-up-email").val();
        var password = $(".sign-up-password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (){
            
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    })

    $(".botao-entrar").click(function(event){
        event.preventDefault();

        var email = $(".sign-in-email").val();
        var password = $(".sign-in-password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(){

        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });

    })

    var app = angular.module("App", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/receitas", {
            templateUrl: "templates/receitas.html"
        })
        .otherwise({redirectTo : '/'});
    })


});

