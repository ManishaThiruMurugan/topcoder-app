import angular from 'angular'

(function () {
  'use strict'

  angular.module('tc.services').factory('GroupService', GroupService)

  GroupService.$inject = ['ApiService']

  function GroupService(ApiService) {
    var service = ApiService.restangularV3

    // Retrieves the registration status of the member for the given program
    service.getMembers = function(userId, programId) {
      return service.one('groups',programId).one('members').get()
    }

    // Registers the given member for the given program.
    service.addMember = function(userId, programId) {
      return service.one('groups', programId).one('members').customPOST({
        memberId : userId +'', membershipType : 'user'
      })
    }

    return service
  }
})()
