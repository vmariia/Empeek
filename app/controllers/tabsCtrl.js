app.controller('tabsCtrl', function($scope, $window) {
  $scope.tabs = [{
    title: 'First item with custom name',
    content:  '<div ng-controller = "commentsCtrl" class="comments">'+
                '<h2>' +'Comments #2'+ '</h2>'+
                '<ul>'+
                  '<li ng-repeat = "comment in comments" class = "comments-list">'+                 
                    '<div class="block"></div>'+
                    '<div>{{comment.text}}</div>'+
                  '</li>'+
                '</ul>'+
                '<form>'+
                  '<div class="block"></div>'+
                  '<textarea ng-model="text" ng-keyup="$event.keyCode == 13 && submit()"></textarea>'+
                '</form>'+
              '</div>'
  }];

  $scope.addTab = function() {
    var title = $scope.message;
    $scope.tabs.push({
      title: title,
      content: '<div ng-controller = "commentsCtrl" class="comments">'+
                  '<h2>' +'Comments #2'+ '</h2>'+
                  '<ul>'+
                    '<li ng-repeat = "comment in comments" class = "comments-list">'+                 
                      '<div class="block"></div>'+
                      '<div>{{comment.text}}</div>'+
                    '</li>'+
                  '</ul>'+
                  '<form>'+
                    '<div class="block"></div>'+
                    '<textarea ng-model="text" ng-keyup="$event.keyCode == 13 && submit()"></textarea>'+
                  '</form>'+
                '</div>'
    });
  };
    
  $scope.removeTab = function(i) {
    $scope.tabs.splice(i, 1);
  };
});