angular.module('ngTimeLine', [])
    .directive('lap',
    function() {
        return {
            scope: {
                Item: '=lapItem',
                minRange: '@',
                maxRange: '@',
                range: '@'
            },
            link: function(scope, element, attrs) {
                element.css('width', '40');
                element.css('left', '10%');
                console.log(scope.Item);
            }
        }
    })
    .directive('timeLap',
    function() {
        return {
            restrict: 'E',
            
            scope: {
                LapList: '=lapList',
                minRange: '@',
                maxRange: '@',
                range: '@',
                timeIndicator: '@'
            },
            template: function(scope, elem, attr) {
                return '<ul class="lap-list" class="time-lap-container">'
                    + '<li class="lap-line" ng-repeat="item in LapList">'
                    + '<lap lap-item="item" min-range="{{ minRange }}" max-range="{{ maxRange }}" range="{{ DifferenceRange }}" />'
                    + '</li>'
                    + '</ul>';
            },
            link: function(scope, element, attrs) {
                console.log(scope);
                
                if (scope.timeIndicator != null && scope.timeIndicator != undefined && scope.timeIndicator) {
                    element.append('<time-indicator />')
                }
            }
        }
    })
    .directive('timeLine',
    function() {
        return {
            restrict: 'E',
            scope: {
                TimeList: '=timeList',
                minRange: '@',
                maxRange: '@',
                timeIndicator: '@'
            },
            template: function(scope, elem, attr) {
                return '<ul class="time-lap-container">'
                    + '<li class="time-line" ng-repeat="item in TimeList">{{ item.Label }}'
                    + '<time-lap lap-list="item.TimesLap" min-range="{{ minRange }}" max-range="{{ maxRange }}" range="{{ DifferenceRange }}" time-indicator="{{ timeIndicator }}"  />'
                    + '</li>'
                    + '</ul>';
            },
            link: function(scope, element, attrs) {
                
                console.log(scope);
                
                if(scope.timeIndicator == undefined || scope.timeIndicator == null) 
                    scope.timeIndicator = false;
                
                if (scope.maxRange == null || scope.maxRange == undefined) {
                    scope.maxRange = getMaxRange();
                } else {
                    if (scope.maxRange > 24) {
                        scope.maxRange = 24
                    }
                }

                if (scope.minRange == null || scope.minRange == undefined) {
                    scope.minRange = getMinRange();
                } else {
                    if (scope.minRange < 0) {
                        scope.minRange = 0;
                    }
                }

                if (scope.minRange > scope.maxRange) {
                    throw 'Min range must be lower than max Range. (minRange < maxRange) Current value #MaxRange : ' + scope.maxRange + ' - #MinRange : ' + scope.minRange;
                }

                scope.DifferenceRange = Number((scope.maxRange - scope.minRange).toFixed(2));

                function getMaxRange() {
                    var tmpValue = 0;
                    for (var j = 0; j < scope.TimeList.length; j++) {
                        for (var i = 0; i < scope.TimeList[j].TimesLap.length; i++) {
                            if (scope.TimeList[j].TimesLap[i].End > tmpValue)
                                tmpValue = scope.TimeList[j].TimesLap[i].End;
                        }
                    }

                    return tmpValue;
                }

                function getMinRange() {
                    var tmpValue = 24;
                    for (var j = 0; j < scope.TimeList.length; j++) {
                        for (var i = 0; i < scope.TimeList[j].TimesLap.length; i++) {
                            if (scope.TimeList[j].TimesLap[i].Start < tmpValue)
                                tmpValue = scope.TimeList[j].TimesLap[i].Start;
                        }
                    }

                    return tmpValue;
                }
            }
        };
    });
