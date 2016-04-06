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
        },
        {
            MinRange: 6,
            MaxRange: 22,
            Label: 'Tuesday',
            TimesLap: [
                { Start: 8, End: 11.30 },
                { Start: 13, End: 16 }
            ]
        },
        {
            MinRange: 6,
            MaxRange: 22,
            Label: 'Today',
            TimesLap: [
                { Start: 9, End: 12 },
                { Start: 13, End: 15 },
                { Start: 16, End: 22 }
            ]
        },{
            MinRange: 6,
            MaxRange: 22,
            Label: 'Monday',
            TimesLap: [
                { Start: 7, End: 12 },
                { Start: 13.30, End: 16 },
                { Start: 18, End: 21.15 }
            ]
        },
        {
            MinRange: 6,
            MaxRange: 22,
            Label: 'Tuesday',
            TimesLap: [
                { Start: 8, End: 11 },
                { Start: 15, End: 16 }
            ]
        }
    ]
});

