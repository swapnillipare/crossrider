var loggedInUser = '';
var b = function(){
	alert('main js loaded now...');
	
	var UIObj = UIHandlerObj();
	loggedInUser = UIObj.get.user_email();
	console.log("In main Function :: "+UIHandlerObj().get.user_email());
	alert(UIObj.get.user_email()+"  Main Js");
	
};
