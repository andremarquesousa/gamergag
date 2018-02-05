gamerGag.directive('listPost', function() {
    return {
        restrict: 'A',
        controller: function ($element, $scope) {
            var itemsLength;

            $scope.limit = 15;

            if (itemsLength <= $scope.limit) {
                $scope.hideButton = true;
            }

            $scope.loadMore = function(items) {
                var increased;

                itemsLength = items.length;

                increased = $scope.limit + 15;

                if (increased > itemsLength) {
                    $scope.limit = itemsLength;
                    $scope.hideButton = true;
                } else {
                    $scope.limit = increased;
                    $scope.hideButton = false;
                }

                if (itemsLength <= $scope.limit) {
                    $scope.hideButton = true;
                } else {
                    $scope.hideButton = false;
                }
            };
        }
    };
});
