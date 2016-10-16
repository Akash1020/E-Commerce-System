rapp.service('vendorService', ['$http', '$q', function ($http, $q) {

    this.getVendor = function (vendorId) {
        var deferred = $q.defer();
        // call http service to get vendor infromation
        $http({
            method: 'GET',
            url: '/estore/vendors/' + vendorId
        }).then(function (res) {
            deferred.resolve(res);
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
}]);