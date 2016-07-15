angular.module('angularQueryParserModule')
    .factory('queryParser', [function () {
        var q = {
            getQueryString: function () {
                return window.location.search || window.location.hash;
            }
        };

        q.get = function (query, key) {
            if (arguments.length === 1) {
                key = query;
                query = q.getQueryString();
            }

            var index = query.search(new RegExp(key, 'i'));

            if (query[index - 1] && query[index - 1] !== '?' && query[index - 1] !== '&') {
                index = -1;
            }

            if (index >= 0) {
                var end = query.indexOf('&', index + key.length);

                if (end < 0) {
                    end = query.length;
                }

                return query.substring(index + key.length + 1, end);
            } else {
                return '';
            }
        };

        q.parse = function (query) {
            if (arguments.length === 0) {
                query = query || q.getQueryString();
            }

            query = query.substr(1);

            var pairs = query.split('&');
            var result = {};

            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                if (pair) {
                    var parts = pair.split('=');

                    result[parts[0]] = decodeURIComponent(parts[1]);
                }
            }

            return result;
        };

        return q;
    }]);