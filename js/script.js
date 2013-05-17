var screen_height = $(window).height();
screen_height = screen_height - 10;

var screen_width = $(window).width();
screen_width = screen_width / 2;

function onDeviceReady()
{
	$('#sms_value').css({'height':screen_height+'px','width':screen_width+'px'})
}

function sendSMS()
{
	var sms_text = escape($('#sms_value').val());
	var ajax_url = 'http://piyushgaur.com/sms/sms.php?api=way2sms&number=8438107012&password=creative&to=9894905156&msg='+sms_text;
	$.get(ajax_url,function(data){
		alert(data)
	});
}

function clearSMS()
{
	$('#sms_value').val('');
}

//document.addEventListener("deviceready", onDeviceReady, false);
$(document).ready(function(){
	onDeviceReady();
});