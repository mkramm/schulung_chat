function Chat() {

    var socket = io.connect('http://localhost:3001');
	var messages = [];
    socket.on('message', function(data){
		Client.Chat.add(data);
	});

	this.add = function (data) {
		messages.push(data);
		Client.Chat.render();
	};

	this.render = function(){
		var list = $('#messages');
		list.html('');
		for(var i = 0; i < messages.length; i++){
			list.append(
				$('<li>').text(messages[i].message)
			)
		}
	};

	$('#chatButton').click(function(){
		Client.Chat.send($('#chatText').val());
	});

	this.send = function(message){
		var messageObj = {
			user: Client.User.getUser(),
			message: message
		};
		Client.Chat.add(messageObj);
		socket.emit('send', messageObj);
	}
}