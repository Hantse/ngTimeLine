var app = angular.module('demoApp', ['ngTimeLine']);

app.run(function($rootScope) {
    $rootScope.timesOfShop = [
        {
            MinRange: 6,
            MaxRange: 22,
            Label: 'Monday',
            TimesLap: [
                { Start: 7, End: 12 },
                { Start: 13.30, End: 16 },
                { Start: 18, End: 21.15 }
            ]
        }
    ]
});

