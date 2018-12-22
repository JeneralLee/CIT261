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

/*----- Current Date -----*/
var d = new Date(),
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct',
    'Nov','Dec'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var n = days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()
document.getElementById("currentDate").innerHTML = n;

/*----- Pull JSON data -----*/
var myDiv = document.getElementById("closures")
var JSONrequestURL = "https://github.com/JeneralLee/CIT261/blob/master/mobile-web-app/files/closures.json";
var JSONrequest = new XMLHttpRequest();

JSONrequest.open("GET", JSONrequestURL);
JSONrequest.responseType = "json";
JSONrequest.send();
JSONrequest.onload = function() {
	var x = JSONrequest.response;
	populateHeader(x);
	showDates(x);
}

function populateHeader(jsonObj) {
	var myH3 = document.createElement("h3");
	myH3.textContent = "2018";
	myDiv.appendChild(myH3);
	console.log(jsonObj);
}

function showDates(jsonObj) {
	var dates = jsonObj["2018"];
	for (var i = 0; i < dates.length; i++) {
		var myPara = document.createElement("p");
		myPara.textContent += dates[i] + "<br>"
	}
}
/*----- Local Storage -----*/

/*----- Submit Button 
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", thankYou);

function thankYou() {
	var p = document.getElementById("booking");
	var newSection = document.createElement("section");
	var myH2 = document.createElement("h2");
	var myDiv = document.createElement("div");
	p.appendChild(mySection);


}
-----*/	