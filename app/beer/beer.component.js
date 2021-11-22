angular.module('beerAPI').component(
    'beer', {
        templateUrl: 'beer/beer.template.html',
        controller: [
            '$scope', '$http', function beer($scope, $http) {
                $http.get('https://api.punkapi.com/v2/beers/random').then(
                    ($res) => {
                        $scope.randomBeer = $res.data[0];
                    }
                )
            }
        ]
    }
);
