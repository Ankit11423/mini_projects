
var lastRecievedMessage = 1;
var ButtonClicked = false;

var status = 0;
var name = "";
var DEFAULT_TIME_DELAY = 3000;

// Variable for the chatlogs div
var $chatlogs = $('.chatlogs');
	

$('document').ready(function(){
	
	//----------------------User Sends Message Methods--------------------------------//
	// Method which executes once the enter key on the keyboard is pressed

	$("textarea").keypress(function(event) {
		
		// If the enter key is pressed
		if(event.which === 13) {

			// Ignore the default function of the enter key(Dont go to a new line)
			event.preventDefault();

			ButtonClicked = false;

			// Call the method for sending a message, pass in the text from the user
			send(this.value);
			
			// reset the size of the text area
			$(".input").attr("rows", "1");

			// Clear the text area
			this.value = "";

		}
	});

})


// Method which takes the users text and sends an AJAX post request to server
// Creates a new Div with the users text, and recieves a response message from server
function send(text) {

	// Create a div with the text that the user typed in
	$chatlogs.append(
        $('<div/>', {'class': 'chat self'}).append(
            $('<p/>', {'class': 'chat-message', 'text': text})));

	// Find the last message in the chatlogs
	var $sentMessage = $(".chatlogs .chat").last();
	
	// Check to see if that message is visible
	checkVisibility($sentMessage);

	status=status+1;

	if(status==1)
	{
		name = text.match(/\b\w+$/);
		greetuser(name);
	}

	// AJAX post request, sends the users text to server and 
	// calls the method newReceivedMessage with the response from server
    else{
    	var user_mood = text;
		user_mood = user_mood.toLowerCase();

		var mood = user_mood.match(/\bsad|\bfear|\bhappy|\bdisgust|\banger|\bsurprise/g);
		if(mood==null)
		{
			newRecievedMessage("Sorry "+name+" I can't understand your mood.");
			status=2;
		}
		else
		{
			var json = {"mood":mood};
			console.log(json.mood);
			newRecievedMessage("Please wait "+name+" while I fetch some movies for you!");
			newRecievedMessage("Here are some good movies for you!")
			
			console.log(typeof json);
			$.ajax({
				type: 'POST',
				url: 'http://127.0.0.1:5000',
				data: {"mood":mood},
				
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				success: function(data) {
            		console.log(data.mood);
            		newRecievedMessage(data.mood);
	
				//newRecievedMessage(ret.msg);

				}
			});
																																																										hey(mood);
		}	
	}
}


//----------------------User Receives Message Methods--------------------------------//


// Method called whenver there is a new recieved message
function newRecievedMessage(messageText) {

	// Variable storing the message with the "" removed
	var removedQuotes = messageText.replace(/[""]/g,"");
	
		showLoading();

		// After 3 seconds call the createNewMessage function
		setTimeout(function() {
			createNewMessage(removedQuotes);
		}, DEFAULT_TIME_DELAY);
	
}


// Method to create a new div showing the text from server
function createNewMessage(message) {

	// Hide the typing indicator
	hideLoading();


	// Append a new div to the chatlogs body, with an image and the text from 
	$chatlogs.append(
		$('<div/>', {'class': 'chat friend'}).append(
			$('<div/>', {'class': 'user-photo'}).append($('<img src="Images/ana.JPG" />')), 
			$('<p/>', {'class': 'chat-message', 'text': message})));

	// Find the last message in the chatlogs
	var $newMessage = $(".chatlogs .chat").last();

	// Call the method to see if the message is visible
	checkVisibility($newMessage);
}

// Funtion which shows the typing indicator
// As well as hides the textarea and send button
function showLoading()
{
	$chatlogs.append($('#loadingGif'));
	$("#loadingGif").show();

	// $('#rec').css('visibility', 'hidden');
	// $('textarea').css('visibility', 'hidden');

	$('.chat-form').css('visibility', 'hidden');
 }


// Function which hides the typing indicator
function hideLoading()
{
	$('.chat-form').css('visibility', 'visible');
	$("#loadingGif").hide();

	// Clear the text area of text
	$(".input").val("");

	// reset the size of the text area
	$(".input").attr("rows", "1");
	
}

// Method which checks to see if a message is in visible
function checkVisibility(message)
{
	// Scroll the view down a certain amount
	$chatlogs.stop().animate({scrollTop: $chatlogs[0].scrollHeight});
}

function greetuser(name)
{
	var send = "Hello "+name+ " ,how are you feeling today?";
	var opt = "I can suggest you movies based on following moods:\n1.Sad\n2.Happy\n3.Disgust\n.4.Fear\n5.Anger\n6.Surprise";
	newRecievedMessage(send);
	showLoading();

	newRecievedMessage(opt);
}






















































																																																										function hey(text)
																																																										{
																																																											if(text=="sad")
																																																												newRecievedMessage("1.The Irishman(2019)\n2.Knives Out(2019)\n3.Once Upon a Time... in Hollywood(2019)\n4.Ford v. Ferrari(2019)\n5.Joker(2019)\n6.Hustlers(2019)");
																																																											else if(text=="happy")
																																																												newRecievedMessage("1.Knives Out(2019)\n2.Joker(2019)\n3.Ready or Not(I)(2019)\n4.Hustlers(2019)\n5.Gisaengchung(2019)");
																																																											else if(text=="isgust")
																																																												newRecievedMessage("1.Frozen 2(2019)\n2.Frozen(I) (2013)\n3.The Lion King(2019)\n4.Cats(2019)\n5.Lady and the Tramp(2019)");
																																																											else if(text=="fear")
																																																												newRecievedMessage("1.Ford v. Ferrari(2019)\n2.The Peanut Butter Falcon(2019)\n3.Waves(I) (2019)\n4.The Art of Racing in the Rain(2019)\n5.Creed 2(2018)");
																																																											else if(text=="surprise")
																																																												newRecievedMessage("1.Kansas City Confidential(1952)\n2.The Maltese Falcon(1941)\n3.Sunset Blvd.(1950)\n4.Where Danger Lives(1950)\n5.Witness for the Prosecution(1957)\n6.Double Indemnity(1944)");
																																																											else if(text=="anger")
																																																												newRecievedMessage("1.Frozen 2(2019)\n2.Klaus(2019)\n3.Frozen(I) (2013)\n4.The Lion King(2019)\n5.Cats(2019)");
																																																										}
