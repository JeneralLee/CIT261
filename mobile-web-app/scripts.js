/*----- Accordion Menu -----*/
$(function() {
	$('.toggle').click(function(e) {
		e.preventDefault();
	
	  var $this = $(this);
	
	  if ($this.next().hasClass('show')) {
		  $this.next().removeClass('show');
		  $this.next().slideUp(350);
	  } else {
		  $this.parent().parent().find('li .inner').removeClass('show');
		  $this.parent().parent().find('li .inner').slideUp(350);
		  $this.next().toggleClass('show');
		  $this.next().slideToggle(350);
	  }
  });
});

/*----- Houston Weather -----*/
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4699066&units=imperial&APPID=69d6a88fe18541eb0984a7492251747e";
var weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", apiURL);
weatherRequest.responseType = 'json';
weatherRequest.send();
weatherRequest.onload = function (){
var currentCond = weatherRequest.response;
document.getElementById("weather").innerHTML = currentCond.list[0].main.temp;
document.getElementById("sky").innerHTML = currentCond.list[0].weather[0].description;
}

/*----- Navigation Function -----*/
$(function() {
	$("#what-we-do").click(function(){
		$("#home").siblings().removeClass("reveal");
		$("#home").addClass("reveal");
	});
	$("#book-us-now").click(function(){
		$("#booking").siblings().removeClass("reveal");
		$("#booking").addClass("reveal");
	});
	$("#contact-us").click(function(){
		$("#contact").siblings().removeClass("reveal");
		$("#contact").addClass("reveal");
	});
	$("#temple-info").click(function(){
		$("#temple").siblings().removeClass("reveal");
		$("#temple").addClass("reveal");
	});
	$("#families-forever").click(function(){
		$("#video").siblings().removeClass("reveal");
		$("#video").addClass("reveal");
	});
});

/*----- Local Storage -----*/
