//Second function takes whatever is entered into textbox and prints it below

$(document).ready(function(){
	$('button').click(function(){
		var toAdd = $('input[name=message]').val();
			$('#messages').append("<p>" + toAdd+"</p>");
	});
});

$(document).ready(function(){
	$('button1').click(function(){
		var toAdd = $('input[name=message1]').val();
			$('#messages1').append("<p>" + toAdd+"</p>");
	});
});

//Third function highlights textbox in red when clicked. Updated to include additiona .val('') function with LESS code
// $().empty(); was the key to this app

$(document).ready(function(){
	$('input').focus(function(){
		$(this).css('outline-color', '#FF0000'), $(this).val(''), $('.messages2').empty(), $('.messages3').empty(), $('.messages4').empty();
	});
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//60s Pop
$(document).ready(function(){
	$('#link1').click(function(){
 		var toAdd = $('input[name=message2]').val();
 			$('.messages2').append("<p>" + toAdd+"</p>");
 	});
});

 // Retro Stereo Wide
$(document).ready(function(){
 	$('#link2').click(function(){
 		var toAdd = $('input[name=message2]').val();
 			$('.messages3').append("<p>" + toAdd+"</p>");
 	});
});

//Retro Gamer
$(document).ready(function(){
	$('#link3').click(function(){
 		var toAdd = $('input[name=message2]').val();
 			$('.messages4').append("<p>" + toAdd+"</p>");
 	});
});





