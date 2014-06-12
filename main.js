var b = function(){
	alert('main js loaded now...');
	
	var gmail = Gmail();
	gmail.get.user_email();
	console.log(Gmail().get.user_email());
	alert(gmail.get.user_email());
	
};
