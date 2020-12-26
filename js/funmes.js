function message(){
	document.getElementById("send-message").innerHTML = "Message sent, we will attend you shortly";
	document.getElementById("txt1").value = "";
	document.getElementById("txt2").value = "";
	document.getElementById("txt3").value = "";
}

function clean(){
	document.getElementById("send-message").innerHTML = "";
}