gamerGag.controller('UserCtrl', function($scope, $stateParams, User){
    $scope.user = {};

    User.data().then(function(item) {
        $scope.user = item.data;
    }),function(error){

    }
});
