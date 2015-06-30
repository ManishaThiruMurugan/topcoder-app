(function() {
  'use strict';

  angular.module('tc.sample').config([
    '$stateProvider',
    '$urlRouterProvider',
    routes
  ]);

  function routes($stateProvider, $urlRouterProvider) {
    var name, state, states;
    states = {
      sample: {
        parent: 'root',
        abstract: true,
        url: '/sample',
        template: '<div ui-view>Sample test code</div>',
        data: {
          authRequired: false,
          title: 'Sample page'
        }
      },
      'sample.child1': {
        url: '/child1',
        template: '<div>Sample child1</div>',
        data: {
          title: 'Child1'
        }
      }
    };
    for (name in states) {
      state = states[name];
      $stateProvider.state(name, state);
    }
  };
})();