(function(){
  var app = angular.module( "Trangular", [] );

  app.controller( 'MainController', function( $scope ){

    $scope.currentStory;

    $scope.setCurrentStory = function( story ) {
      $scope.currentStory = story;
    };

    $scope.createStory = function() {
      $scope.stories.push({
          title: 'New Story',
          description: 'Description pending'
      });
    };

    $scope.stories = [
      { title:'Story 00', description: 'Description pending.'},
      { title:'Story 01', description: 'Description pending.'},
      { title:'Story 02', description: 'Description pending.'},
      { title:'Story 03', description: 'Description pending.'},
      { title:'Story 04', description: 'Description pending.'},
      { title:'Story 05', description: 'Description pending.'}
    ];
  });

})();
