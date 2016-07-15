## angularQueryParserModule
===========================================================
Parse the url query string like string to object

## Contribution Notice:
===========================================================
Run `gulp` before making `git commit`. So the `dist` folder will be updated.

## Install
```
bower install angular-query-parser --save
```

## Usage
```javascript
angular.module('yourModule', ['angularQueryParserModule'])
    .controller('yourCtrl', ['$scope', 'queryParser', function($scope, queryParser) {
        var result = queryParser.parse('?a=b&c=d');
        result.a;
        result.c;
    })
;
```