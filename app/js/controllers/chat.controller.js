angular.module('cbsChat')
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl]);

function chatCtrl(ChatService, $firebaseAuth) {
	var vm = this;
	var auth =  $firebaseAuth();

	vm.messages = ChatService.getMessages();
	vm.shownMessages = ChatService.shownMessages();

	vm.sendMassege = function () {
		if(vm.author != null) {
			var message = {
				authorName: vm.author.displayName,
				authorId: vm.author.uid,
				authorPhoto: vm.author.photoURL,
				text: vm.newMesssage
			} 
		} else {
			alert('Сначала зарег');
		}
		
		if(vm.newMesssage != '') {
			ChatService.sendMassege(message);
			vm.newMesssage = '';
		} else {
			alert("Введите сообщение!");
		}
	}

	vm.login = function(){
		auth.$signInWithPopup('google');
	}

	vm.logout = function () {
		auth.$signOut();
	}

	auth.$onAuthStateChanged(function (authData) {
		vm.author = authData;
	})
};
