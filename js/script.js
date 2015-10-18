(function() {

	var app = angular.module('myQuiz', []);

	app.controller('QuizController',['$scope','$http','$sce', function($scope,$http,$sce) {

		$scope.score = 0;
		$scope.activeQuestion = -1;
		$scope.activeQuestionAnswered = 0;
		$scope.percentage = 0;
		$scope.welcome = "hello all";

		$http.get('js/quiz_data.json').then(function(quiz){
			$scope.myQuestions = quiz.data; //all data inside myQuestions
			$scope.totalQuestions = $scope.myQuestions.length;

		});


	}]);



})();