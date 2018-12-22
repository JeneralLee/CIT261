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
    months = ['January','February','March','April','May','June','July','August','September','October',
    'November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var n = days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()
document.getElementById("currentDate").innerHTML = n;

/*----- Pull JSON data -----*/
var myHead1 = document.createElement("h3");
var myHead2 = document.createElement("h3");
var myHead3 = document.createElement("h3");
var myPara1 = document.createElement("p");
var myPara2 = document.createElement("p");
var myPara3 = document.createElement("p");
var myDiv = document.getElementById("closures")
var JSONrequestURL = "https://raw.githubusercontent.com/JeneralLee/CIT261/master/mobile-web-app/files/closures.json";
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
	myHead1.textContent = "2018";
	myHead2.textContent = "2019";
	myHead3.textContent = "2020";
	console.log(jsonObj);
}

function showDates(jsonObj) {
	var year1 = jsonObj["2018"];
	var year2 = jsonObj["2019"];
	var year3 = jsonObj["2020"];
	for (var i = 0; i < year1.length; i++) {
		myPara1.innerHTML += year1[i] + "<br>";
	}
	for (var j = 0; j < year2.length; j++) {
		myPara2.innerHTML += year2[j] + "<br>";
	}
	for (var k = 0; k < year3.length; k++) {
		myPara3.innerHTML += year3[k] + "<br>";
	}

	myDiv.appendChild(myHead1);
	myDiv.appendChild(myPara1);
	myDiv.appendChild(myHead2);
	myDiv.appendChild(myPara2);
	myDiv.appendChild(myHead3);
	myDiv.appendChild(myPara3);
	}
/*----- Local Storage -----*/
function storeForm() {
	const fname = document.getElementById("fname").value;
	const lname = document.getElementById("lname").value;
	const phone = document.getElementById("phone").value;
	const email = document.getElementById("email").value;

	const person = {
	fname: fname,
	lname: lname,
	phone: phone,
	email: email
}

window.localStorage.setItem("user", JSON.stringify(person));

document.getElementById("thanks").innerHTML = "Thank you. You will receive a phone call from our office shortly.";
}

/*----- Clear Storage -----*/
function clearData() {
	window.localStorage.clear();
}
