gamerGag.service('recentPosts', function($http, $q) {
    this.posts = function(){
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: '/recent-posts.json'
        }).then(function successCallback(response) {
            deferred.resolve(response);
            console.log('success')
        }, function errorCallback(response) {
            console.log('error');
        });

        return deferred.promise;
    }
});
