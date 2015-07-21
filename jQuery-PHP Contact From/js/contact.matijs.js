/*
 - list of inputs:
	name
	email
	subject
	message
*/

$( document ).ready(function() {

var formName = "#contactform";
var inputID = formName + " input#";
var textareaID = formName + " textarea#";
var isValidatedName = false;
var isValidatedEmail = false;
//var isValidatedSubject = false;
var isValidatedMessage = false;
var messageHasBeenSent = false;

$(formName).submit(function(event) {
	
	event.preventDefault();
	
	checkVoorNaam();
	checkVoorEmail();
	//checkVoorSubject();
	checkVoorMessage();
	 
	/* Check voor Naam */
	function checkVoorNaam(){
		if ($(inputID + "name").val()) {
			changeColor(inputID + "name", "green");
			isValidatedName = true;
			isValidated();
		}else{	  	  
			showErrorMessage();
			changeColor(inputID + "name", "red");
		}
	}
	/* Check voor Email */
	function checkVoorEmail(){		
		if ($(inputID + "email").val()) {
			changeColor(inputID + "email", "green");
			isValidatedEmail = true;
			isValidated();
		}else{	  	  
			showErrorMessage();
			changeColor(inputID + "email", "red");
		}		
	}
	/* Check voor Subject 
	function checkVoorSubject(){		
		if ($(inputID + "subject").val()) {
			changeColor(inputID + "subject", "green");
			isValidatedSubject = true;
			isValidated();
		}else{	  	  
			showErrorMessage();
			changeColor(inputID + "subject", "red");
		}		
	}*/
	
	/* Check voor Message */
	function checkVoorMessage(){		
		if ($(textareaID + "message").val()) {
			changeColor(textareaID + "message", "green");
			isValidatedMessage = true;
			isValidated();
		}else{	  	  
			showErrorMessage();
			changeColor(textareaID + "message", "red");
		}		
	}
	
	function isValidated(){
		console.log("Name: " + isValidatedName + " // Email: " + isValidatedEmail + " // Message: " + isValidatedMessage); /*" // Subject: " + isValidatedSubject + */
		if(isValidatedName && isValidatedEmail /*&& isValidatedSubject*/ && isValidatedMessage){
			if(messageHasBeenSent === false){
			$.post( "php/submitcontact.php", $( formName).serialize(), function(formresponse){
				if(formresponse === "ok"){
					messageHasBeenSent = true;
					showSuccessMessage();
				}else if(formresponse === "error"){
					showErrorMessage(1);
				}
			});
			}
		}
	}
  
  function showSuccessMessage(){
	  $("#formalert").fadeOut("slow", function(){
		$("#formsuccess").fadeIn("fast", function(){
		$(formName).fadeOut();
		$("#formsuccess span").text( "Je bericht is zonder problemen verzonden!" ).show();
	  }); 		  
	  });
	   
  }
  
  function showErrorMessage(a){
	  $("#formsuccess").fadeOut();
	  if(a === 1){
		  $("#formalert").fadeIn("fast", function(){
			$("#formalert span").text( "Er is een fout opgetreden, probeer het later opnieuw." ).show();
		  });
	  }else{
		  $("#formalert").fadeIn("fast", function(){
			$("#formalert span").text( "Gelieve alle velden in te vullen." ).show();
		  });
	  }
	  
  }
  
  function changeColor(id, color){
	  $(id).css({"border-color": color});	  
  }
 
});
});