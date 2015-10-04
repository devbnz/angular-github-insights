/**
* Angular-Github-Insights
* AngularJS Service for Github
*
* Created by Erik Woitschig.
* http://bnz-power.com
* http://twitter.com/devbnz

*/

(function(){


  var insights = angular.module('bnz.githubInsights', []);

  insights.service("GithubInsights",
  function( $http, $q) {

    var baseUrl = 'https://api.github.com/';

    return({
            getUser                       : getUser,
            getUserRepos                  : getUserRepos,
            getRepoBranches               : getRepoBranches,
            getRepoLanguages              : getRepoLanguages,
            runUrl                        : runUrl
    });


function getUser(username) {

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + 'users/' + username
  });

  return( request.then( handleSuccess, handleError ) );

}

function getUserRepos(username) {

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + 'users/' + username + '/repos'
  });

  return( request.then( handleSuccess, handleError ) );

}

function getRepoBranches(url) {

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + 'repos/' + username + '/' + repo + '/branches'
  });

  return( request.then( handleSuccess, handleError ) );

}

function getRepoLanguages(url) {

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + 'repos/' + username + '/' + repo + '/languages'
  });

  return( request.then( handleSuccess, handleError ) );

}

function runUrl(url) {

  var request = $http({
    method: "get",
    cache: true,
    url: url
  });

  return( request.then( handleSuccess, handleError ) );

}

function handleError( response ) {

  if (
    ! angular.isObject( response.data ) ||
    ! response.data.message
  ) {

    return( $q.reject( "An unknown error occurred." ) );

  }

  return( $q.reject( response.data.message ) );

}

function handleSuccess( response ) {

  return( response.data );

}

}
);


})();
