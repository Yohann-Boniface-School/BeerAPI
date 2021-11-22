angular.module('beerAPI').component(
    'hw', {
        templateUrl: 'hw/hw.template.html',
        controller: [
            '$http', function hw($http) {
                console.log($http)
            }
        ]
    }
);
