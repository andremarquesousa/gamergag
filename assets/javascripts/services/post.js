gamerGag.service('Post', function($http, $q) {

    this.data = function(){
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: '/data/post.json'
        }).then(function successCallback(response) {
            deferred.resolve(response);
            console.log('success')
        }, function errorCallback(response) {
            console.log('error');
        });

        return deferred.promise;
    }
});
