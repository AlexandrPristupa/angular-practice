(function () {

    function chatCtrl() {
        var vm = this;

        vm.test = 'Same text';
    }

    angular.module('cbsChat', [])
        .controller('chatCtrl', [chatCtrl]);
}());

