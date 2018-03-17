<!doctype html>
<html ng-app="app">
  <head>
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
<body ng-controller="tabsCtrl" >

  
  <div class="wrapper">
    <div class="sidebar">
      <h1>dairy app</h1>
      <p>Comment with no sense</p>
    </div>
    <div class="content">
      
      <uib-tabset>
      <h2>Items</h2>
      <form>
        <input type="text" placeholder="Type name here..." ng-model="message">
        <button class="btn btn-default" ng-click="addTab()">Add Tab</button>
      </form>
        <uib-tab ng-repeat="tab in tabs" >
          <uib-tab-heading class="tabs">
            <div class="list-item">{{tab.title}}</div>
            <div class="button" ng-click="removeTab($i)">Delete</div>
          </uib-tab-heading>
          <div compile-html="tab.content"></div>
        </uib-tab>
      </uib-tabset>
    </div>
  </div>

  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.js"></script>
  <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.3.js"></script>

  <script src="app/app.js"></script>
  <script src="app/controllers/commentsCtrl.js"></script>
  <script src="app/controllers/tabsCtrl.js"></script>
  <script src="app/directives/compileHtml.js"></script>

</body>
</html>
