angular.module('starter.services', ['ngResource'])

.factory('Session', function($resource) {
    //return $resource('http://localhost:5000/sessions/:sessionId');
    return $resource('http://jsonplaceholder.typicode.com/posts/:sessionId');
})
