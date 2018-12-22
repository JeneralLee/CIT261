/*----- Card Flip -----*/
$(function(){
	$(".card").click(function() {
		$(this).toggleClass("is-flipped");
	});
});

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
function saveData() {
	var clear = document.getElementById("cleardata");
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var comments = document.getElementById("comments").value;
	var teen = document.getElementById("teen").value;
	var child = document.getElementById("child").value;
	var baby = document.getElementById("baby").value;
	var date = document.getElementById("date").value;
	
	localStorage.setItem("fname",JSON.stringify(fname));
	localStorage.setItem("lname",JSON.stringify(lname));
	localStorage.setItem("email",JSON.stringify(email));
	localStorage.setItem("phone",JSON.stringify(phone));
	localStorage.setItem("date",JSON.stringify(date));
	localStorage.setItem("age3",JSON.stringify(teen));
	localStorage.setItem("age2",JSON.stringify(child));
	localStorage.setItem("age1",JSON.stringify(baby));
	localStorage.setItem("comments",JSON.stringify(comments));

	clear.addEventListener("click", function() {
		localStorage.clear();
	});
}

/*----- Submit Button -----*/
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", thankYou);

function thankYou() {
	var p = document.getElementById("booking");
	var mySection = document.createElement("div");
	mySection.innerHTML = "Thank you for your submission.";
	p.appendChild(mySection);}

	