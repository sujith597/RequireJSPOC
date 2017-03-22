require.config({
    paths: {
        "jquery": "bower_components/jquery/dist/jquery",
        "angular": "bower_components/angular/angular",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap",
        "knoctout": "bower_components/knockout/dist/knockout",
        "underscore": "bower_components/underscore/underscore-min",
        "main": "scripts/main",
        "myController":"scripts/Controllers/myController"
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require(['angular', 'main'], function () {
    angular.bootstrap(document, ['myApp']);
});
