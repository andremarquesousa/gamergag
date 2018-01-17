gamerGag.controller('HomeCtrl', function($scope, recentPosts){
    $scope.posts = [];

    recentPosts.posts().then(function(posts) {
        $scope.posts = posts.data;
        
        console.log(posts);
    }),function(error){

    }
});
