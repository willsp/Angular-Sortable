/*global angular*/

(function() {
    'use strict';

    var myApp = angular.module('myApp', ['willsp.pwSortable']);

    var myCtrl = myApp.controller('myCtrl', function myCtrl($scope) {
        $scope.solarSystem = [
            'Earth',
            'Mars',
            'Mercury',
            'Jupiter',
            'Saturn',
            'Uranus',
            'Neptune',
            'Venus'
        ];

        $scope.horizontal = 'JUPITER'.split('').reverse();

        function check(arr, correct) {
            var missed = 0;

            for (var i = 0, max = correct.length; i < max; i++) {
                if (correct[i] !== arr[i]) {
                    missed++;
                }
            }

            return missed;
        }

        $scope.$watchCollection('solarSystem', function() {
            var correct = [
                'Mercury',
                'Venus',
                'Earth',
                'Mars',
                'Jupiter',
                'Saturn',
                'Uranus',
                'Neptune'
            ];

            $scope.incorrect = check($scope.solarSystem, correct);
        });

        $scope.$watchCollection('horizontal', function() {
            var correct = 'JUPITER'.split('');
            
            $scope.hincorrect = check($scope.horizontal, correct);
        });
    });

}());
