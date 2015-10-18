(function() {

	var app = angular.module('myQuiz', []);

	app.controller('QuizController',['$scope','$http','$sce', function($scope,$http,$sce) {

		$http.get('quiz_data.json').then(function(quiz) {
			$scope.myQuestions = quiz.data;

		});


	}]);



})();