'use strict';

angular.module('idai.components')

    .factory('idaiSearchService',
            function() {

                var subscribers=[];

                return {

                    register: function(callback) {
                        subscribers.push(callback);
                    },

                    notify: function(term) {
                        for (var i in subscribers) {
                            subscribers[i](term);
                        }
                    }
                }
            }
    );