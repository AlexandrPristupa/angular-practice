angular.module('cbsChat')
	.factory('ChatService', ['$firebaseArray', chatServise])

function chatServise($firebaseArray) {

	var messagesRef = firebase.database().ref().child("messages");
	var chat = {}

	chat.getMessages = function () {
		return $firebaseArray(messagesRef);
	}

	chat.shownMessages = function () {
		return $firebaseArray(messagesRef.limitToLast(15));
	}

	chat.sendMassege = function (message) {
		chat.getMessages().$add(message);
	}
	return chat;
}