gamerGag.controller('PostCtrl', function($scope, $stateParams){
    $scope.postName = $stateParams.postId;

    console.log($scope.postName);
});
