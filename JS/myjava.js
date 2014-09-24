// function readMouseMove(e){
// 	var result_x = document.getElementById('x_result');
// 	var result_y = document.getElementById('y_result');
// 	result_x.innerHTML = e.clientX - 233;
// 	result_y.innerHTML = e.clientY - 10;
// }
// document.onmousemove = readMouseMove;




// function myFunction() {
//     var w = window.innerWidth;
//     var h = window.innerHeight;
//     x = document.getElementById("demo");
//     x.innerHTML = "Width: " + w + " Heigth: " + h;
// }


var winwid = $(window).width();
var winhei = $(window).innerHeight();
var hafmar = (winwid - 800) / 2;
var limit = winwid - hafmar;
var res = 0;
var passNum = Math.floor((Math.random() + 1) * 1000);
var papPos = Math.random();

$('#reload1').click(function() {
    location.reload();
});

if (winhei >= 800) {
	$("#framey").css("margin-top","30px" );
} else {
	$("#framey").css("margin-top","5px");
};


//// menu function

$("#result").css("margin-left", "769px");

var spc = true;
$(document).bind('keydown', function(e) {
	if (spc === true) {
		if (e.which == 32 && e.type == "keydown"){
			e.preventDefault();
			$("#result").css({"margin-left":"830px", "transition": "margin-left 1s"});
          spc  = false;
		}
	} else {
		if (e.which == 32 && e.type == "keydown"){
			e.preventDefault();
			$("#result").css("margin-left", "769px");
			spc = true;
		}
	}
});



// Sofa 1 movement
var pos1 = $("#sofa1").offset().left;
var sofa1box = $("#sofa1").width();

$("#sofa1").click(function(i) {
	if (res >= 4) {
		if (pos1+sofa1box < limit - 50) {
			$("#sofa1" ).animate({ "marginLeft": "+=50px" }, "slow" );
			pos1 = pos1 + 50; 
		};
		// if (i.shiftKey) {
  //       	$("#sofa1" ).css({ "marginLeft": "295px" }, "slow");
  //       	pos1 = pos1 - 150;
  //   	}; 
	}; 
});

// Sofa 2 movement
var pos2 = $("#sofa2").offset().left;
var sofa2box = $("#sofa2").width();

$("#sofa2").click(function(e) {
	if (res >= 2) {
		if (pos2+sofa2box < limit - 450) {
			$("#sofa2" ).animate({ "marginLeft": "+=50px" }, "slow" );
			pos2 = pos2 + 50; 
		}; 

		// if (e.shiftKey) {
  //       	$("#sofa2" ).animate({ "marginLeft": "-=50px" }, "Fast" );
  //       	pos2 = pos2 - 50;
  //   	};
		if (e.shiftKey) {
        	$("#sofa2" ).css({ "margin-left": "7px", "-webkit-transition-duration" : "2s" });
        	pos2 = pos2 - 100;
    	};  
	};	 
});



// Frames
if (papPos < 0.3) {
	$("#code1").css({"margin-left":"507px", "margin-top":"133px"});
} else if (papPos > 0.6) {
	$("#code1").css({"margin-left":"348px", "margin-top":"133px"});
} else {
	$("#code1").css({"margin-left":"414px", "margin-top":"200px"});
};


$("#frame1").click(function() {
	if (res === 1) {
		$(this).hide();
		$("#frame2").show();
		$("#frame3").show();
	};
});

$("#frame2").click(function() {
	if (res === 1) {
		$(this).hide();
		$("#frame1").show();
		$("#frame3").show();
	};
});

$("#frame3").click(function() {
	if (res === 1) {	
		$(this).hide();
		$("#frame2").show();
		$("#frame1").show();
	};
});

//Frame 4

$("#frame4").click(function() {
		$(this).animate({ "marginTop": 300 }, 200 );
		res = 1;
		document.getElementById('dialog').innerHTML = 'Yes! You need Passcode, It sould be somewhere behind other frames.';
});


// Rug

$("#rug").click(function() {
	i = $("#sofa2").offset().left;
	j = $("#rug").offset().left;
	if (j-i != 161) {
		document.getElementById('dialog').innerHTML = 'First move the sofa! hold Shift key and click it.';
	};
	if (j-i === 161 && res >= 4) {
		$(this).fadeOut(300);
		$("#door1").show();

	};
	//$(this).css("-webkit-transform","scale(0.01,1) translate(-100px, 0px)");
});


// turn the light on
$("#lamp2").click(function(){
	$("#night").hide();
	$("#night > p ").hide();
	$(this).hide();
});

// find key

$("#key").click(function() {
	$(this).fadeOut();
	$("#key2").fadeIn();
	res = 5
});

/// find paper
$("#code1").click(function() {
	$(this).fadeOut();
	$("#code2").fadeIn().css("display","block");
	res = 2;
	document.getElementById('dialog').innerHTML = 'I know, it is too small. <br> find Magnification! Last time, I used to read books!';

});

// glasses and passcode
	
	var t1 = Math.floor(passNum/100);
	var t2 = passNum - (t1*100);
	if (t2 < 10) {
		var t2 = "0" + t2;
	};


$("#glass").click(function() {
	$(this).fadeOut();
	$("#glass2").fadeIn().css("display","block");
	res = 3;
	document.getElementById('dialog').innerHTML = 'You found it! Open the Safebox!';
	Alert.render("PassCode:", passNum);

	$("#codenum").delay(1400).fadeIn().css("display","block").append(t1, "<br>", t2);

});

// safe box
$("#safe1").click(function() {
	Prom.render();
	// Alert.render("Ok! <br> Now, find the key. there is a secret door under the rug.", " ");

	// if (res === 3  && pass == passNum) {
	// 	$(this).hide();
	// 	$("#safe2").show();
	// 	$("#nuttela").show();
	// 	res = 4;
	// };
});

// Hidden door
$("#door1").click(function() {
	if (res != 5) {
		document.getElementById('dialog').innerHTML = 'you need key!';
	}

	if (res === 5) {
		$(this).hide();
		$("#door2").show();
		document.getElementById('dialog').innerHTML = 'Congratulations!';

		$("#night").empty().delay(800).slideDown().css({"opacity": "1", "text-align":"center"}).append('<br><br><br>Interactive II /First Project <br><br> <span style="color:#FFD700;font-size:20px">Zahra Zolfaghari! <br> 2014</span>');

	};
});


/// Alert customization
function CustomAlert () {
	this.render = function(title, dialog){
          // var dialogoverlay = document.getElementById('dialogoverlay');
          var dialogbox = document.getElementById('dialogbox');
          // dialogoverlay.style.display = "block";
          // dialogoverlay.style.height = 600 +"px";
          dialogbox.style.left = ((winwid/2)-150)+"px";
          dialogbox.style.top = ((winhei/2)-250)+"px";
          dialogbox.style.display = "block";
          document.getElementById('dialogboxhead').innerHTML = title;
          document.getElementById('dialogboxbody').innerHTML = dialog;
          document.getElementById('dialogboxfoot').innerHTML = '<button class="messbutt" onclick="Alert.ok()">OK</button>';
	};
	this.ok = function () {
          document.getElementById('dialogbox').style.display = "none";
          // document.getElementById('dialogoverlay').style.display = "none";
	};
}  
var Alert = new CustomAlert();
/// End of Alert

//// Prompt Customization
function CustomPromp() {
	this.render = function(){
          var dialogbox = document.getElementById('dialogbox');
          dialogbox.style.left = ((winwid/2)-150)+"px";
          dialogbox.style.top = ((winhei/2)-250)+"px";
          dialogbox.style.display = "block";
          document.getElementById('dialogboxhead').innerHTML = "The PassCode is";
          document.getElementById('dialogboxbody').innerHTML = '<input type="text" id="myText">';
          document.getElementById('dialogboxfoot').innerHTML = '<button class="messbutt" onclick="Prom.ok()">OK</button> <button class="messbutt" onclick="Prom.Cansel()">Cancel</button> ';
	};

	this.ok = function() {
		var x = document.getElementById("myText").value;
		if (x == passNum) {
			$("#safe1").hide();
			$("#safe2").show();
			$("#nuttela").show();
			res = 4;
			document.getElementById('dialogbox').style.display = "none";
			Alert.render('You did it! <br> What! Ofcourse it is Nuttela! What do you expexted! Tiara <br> <img id = "nuttela" style="center" src="images/nuttela.png" >', " ");
			document.getElementById('dialog').innerHTML = 'Hurry up, find the key. there is a secret door under the rug.';

		} else {
			if (res < 3) {
				document.getElementById('dialog').innerHTML = 'Find Passcode!';
			} else {
				document.getElementById('dialog').innerHTML = 'It is on the Menu! <br> Press Space bar.';
				document.getElementById('dialogbox').style.display = "none";
				Alert.render("Wrong!"," ");
			}
		}; 

};
	this.Cansel = function () {
          document.getElementById('dialogbox').style.display = "none";
	};
}  

var Prom = new CustomPromp();



//// End of Prompt

// $("#man").html("winwid: " + winhei);
// $("#too").html("hafmar: " + hafmar);
// $("#uoo").html("pos2: " + pos2 + " " + (pos2+sofa1box));
// $("#ma").html("sofa1box: " + sofa1box);
// $("#shoma").html("limit: " + limit); 
