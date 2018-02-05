gamerGag.controller('PostCtrl', function($scope, $stateParams, Post){
    $scope.post = {};

    Post.data().then(function(item) {
        $scope.post = item.data;
    }),function(error){

    }
});
