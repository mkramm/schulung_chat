function User() {
	var username, password, login = false;
	this.login = function() {
		username = $('#username').val();
		password = $('#password').val();

		$.post('/login', {
			username: username,
			password: password
		}, function(user){
			if(user.username)
				login = true;
			$('#login').hide();
			$('#chat').show();
		});
    };

	$('#loginButton').click(function(){
		Client.User.login();
	});

	this.getUser = function(){
		return {username:username};
	}
}

