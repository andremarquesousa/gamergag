gamerGag.directive('listPost', function() {
    return {
        restrict: 'A',
        controller: function ($element, $scope) {
            $scope.limit = 15;

            $scope.loadMore = function(items) {
                var increased,
                    itemsLength = items.length;

                increased = $scope.limit + 15;
                $scope.limit = increased > itemsLength ? itemsLength : increased;
            };
        }
    };
});
