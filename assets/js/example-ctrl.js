/**
* Created by Erik Woitschig.
* http://www.bnz-power.com
*/

(function(){

var Controllers = angular.module('Controllers', []);

// project defaults
Controllers.value('project', {
  title: 'Angular-Github-Insights',
  user: 'iambnz',
});

Controllers.controller('HomeCtrl', ['$scope', '$routeParams', '$location', 'project',
function($scope, $routeParams, $location, project) {

  $scope.project = { title: project.title };

  $scope.milestones = [
        {     id    :   1,
              body  : "project started",
              date  : "2015-03-17"
        },
        {     id    :   2,
              body  : "github release",
              date  : "2015-09-20"
        }
        ];
}
]);

Controllers.controller('UserCtrl', ['$scope', '$routeParams', 'GithubInsights', '$location', 'project', '$timeout',
function($scope, $routeParams, GithubInsights, $location, project, $timeout) {

  $scope.project = { title: project.title };

  GithubInsights.getUser(project.user)
        .then(
              function( resp ) {
              //  console.log(resp);
                $scope.user = resp;
              }
            );

  GithubInsights.getUserRepos(project.user)
                  .then(
                        function( resp ) {
                          console.log(resp);
                          $scope.repos = resp;
                        }
                      );
}]);

})();
