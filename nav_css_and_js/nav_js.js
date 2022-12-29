/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
		function myFunction() {
		  var x = document.getElementById("myTopnav");
		  if (x.className === "topnav") {
			x.className += " responsive";
		  } else {
			x.className = "topnav";
		  }
		};
		
		/* hide contacts developer */
		/* hide contacts developer */
		function hide_contact() {
			//document.getElementById("contactdeveloper").style.display = "none";
			location.replace("./index.html");
		};
		function show_contact() {
			document.getElementById("contactdeveloper").style.display = "block";
		};
		function hide_about() {
			//document.getElementById("contactdeveloper").style.display = "none";
			location.replace("./index.html");
		};
		function show_about() {
			document.getElementById("about").style.display = "block";
		};