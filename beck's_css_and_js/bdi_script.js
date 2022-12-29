

// SAMPLE CODE TO IDENTIFY THE SELECTED RADIO

/*
function testresult() {
     var rad_value = document.getElementsByName('qu-1');
	 
	 for (i = 0; i<rad_value.length; i++){
         if (rad_value[i].checked){
		document.getElementById('my-loaction').innerHTML = 'You scored '+rad_value[i].value;
		var qu_1_result = rad_value[i].value;
		alert('value is '+qu_1_result);
		};
	 };	
};
*/

// CODE FOR FINAL RESULT

function save_result() {
     
	 // CODE FOR FIRST QUESTION
	 
	 var qu_1_rad = document.getElementsByName('qu-1');
	 
	 for (i = 0; i<qu_1_rad.length; i++){
         if (qu_1_rad[i].checked){
		     var qu_1_result = qu_1_rad[i].value;
			 // CONVERT RESULT TO INTEGER
			 var qu_one_result = Number(qu_1_result);
			 // DECLARING RESULTS AS GLOBAL
			 window.qu_one_result;
		};
	 };
	 
	 qu_one_result;
	 
	 
	 // CODE FOR SECOND QUESTION

     var qu_2_rad = document.getElementsByName('qu-2');

     for (i = 0; i<qu_2_rad.length; i++){
         if (qu_2_rad[i].checked){
	         var qu_2_result = qu_2_rad[i].value;
			 // CONVERT RESULT TO INTEGER
			 var qu_two_result = Number(qu_2_result);
			 // DECLARING RESULTS AS GLOBAL
			 window.qu_two_result;
		};
	 };
	 
	 qu_two_result;
	 
	 // CODE FOR THIRD QUESTION
	 
	 var qu_3_rad = document.getElementsByName('qu-3');

     for (i = 0; i<qu_3_rad.length; i++){
         if (qu_3_rad[i].checked){
	         var qu_3_result = qu_3_rad[i].value;
			 // CONVERT RESULT TO INTEGER
			 var qu_three_result = Number(qu_3_result);
			 // DECLARING RESULTS AS GLOBAL
			 window.qu_three_result;
		};
	 };
	 
	 qu_three_result;
	 
	 
	 // CODE FOR FOUR QUESTION
	 
	 var qu_4_rad = document.getElementsByName('qu-4');

     for (i = 0; i<qu_4_rad.length; i++){
         if (qu_4_rad[i].checked){
	         var qu_4_result = qu_4_rad[i].value;
			 // CONVERT RESULT TO INT
			 var qu_four_result = Number(qu_4_result);
			 // DECLARE AS GLOBAL
			 window.qu_four_result;
		};
	 };
	 
	 // CODE FOR 5 QUESTION
	 
	 var qu_5_rad = document.getElementsByName('qu-5');

     for (i = 0; i<qu_5_rad.length; i++){
         if (qu_5_rad[i].checked){
	         var qu_5_result = qu_5_rad[i].value;
			 // CONVERT TO INT
			 var qu_five_result = Number(qu_5_result);
			 // GLOBAL
			 window.qu_five_result;
		};
	 };
	 
	 // CODE FOR 6 QUESTION
	 
	 var qu_6_rad = document.getElementsByName('qu-6');

     for (i = 0; i<qu_6_rad.length; i++){
         if (qu_6_rad[i].checked){
	         var qu_6_result = qu_6_rad[i].value;
			 var qu_six_result = Number(qu_6_result);
			 window.qu_six_result;
		};
	 };
	 
	 // CODE FOR 7 QUESTION
	 
	 var qu_7_rad = document.getElementsByName('qu-7');

     for (i = 0; i<qu_7_rad.length; i++){
         if (qu_7_rad[i].checked){
	         var qu_7_result = qu_7_rad[i].value;
			 var qu_seven_result = Number(qu_7_result);
			 window.qu_seven_result;
		};
	 };
	 
	 // CODE FOR 8 QUESTION
	 
	 var qu_8_rad = document.getElementsByName('qu-8');

     for (i = 0; i<qu_8_rad.length; i++){
         if (qu_8_rad[i].checked){
	         var qu_8_result = qu_8_rad[i].value;
			 var qu_eight_result = Number(qu_8_result);
			 window.qu_eight_result;
		};
	 };
	 
	 // CODE FOR 9 QUESTION
	 
	 var qu_9_rad = document.getElementsByName('qu-9');

     for (i = 0; i<qu_9_rad.length; i++){
         if (qu_9_rad[i].checked){
	         var qu_9_result = qu_9_rad[i].value;
			 var qu_nine_result = Number(qu_9_result);
			 window.qu_nine_result;
		};
	 };
	 
	 // CODE FOR 10 QUESTION
	 
	 var qu_10_rad = document.getElementsByName('qu-10');

     for (i = 0; i<qu_10_rad.length; i++){
         if (qu_10_rad[i].checked){
	         var qu_10_result = qu_10_rad[i].value;
			 var qu_ten_result = Number(qu_10_result);
			 window.qu_ten_result;
		};
	 };
	 
	 // CODE FOR 11 QUESTION
	 
	 var qu_11_rad = document.getElementsByName('qu-11');

     for (i = 0; i<qu_11_rad.length; i++){
         if (qu_11_rad[i].checked){
	         var qu_11_result = qu_11_rad[i].value;
			 var qu_eleven_result = Number(qu_11_result);
			 window.qu_eleven_result;
		};
	 };
	 
	 // CODE FOR 12 QUESTION
	 
	 var qu_12_rad = document.getElementsByName('qu-12');

     for (i = 0; i<qu_12_rad.length; i++){
         if (qu_12_rad[i].checked){
	         var qu_12_result = qu_12_rad[i].value;
			 var qu_twelve_result = Number(qu_12_result);
			 window.qu_twelve_result;
		};
	 };
	 
	 // CODE FOR 13 QUESTION
	 
	 var qu_13_rad = document.getElementsByName('qu-13');

     for (i = 0; i<qu_13_rad.length; i++){
         if (qu_13_rad[i].checked){
	         var qu_13_result = qu_13_rad[i].value;
			 var qu_thirteen_result = Number(qu_13_result);
			 window.qu_thirteen_result;
		};
	 };
	 
	 // CODE FOR 14 QUESTION
	 
	 var qu_14_rad = document.getElementsByName('qu-14');

     for (i = 0; i<qu_14_rad.length; i++){
         if (qu_14_rad[i].checked){
	         var qu_14_result = qu_14_rad[i].value;
			 var qu_forteen_result = Number(qu_14_result);
			 window.qu_forteen_result;
		};
	 };
	 
	 // CODE FOR 15 QUESTION
	 
	 var qu_15_rad = document.getElementsByName('qu-15');

     for (i = 0; i<qu_15_rad.length; i++){
         if (qu_15_rad[i].checked){
	         var qu_15_result = qu_15_rad[i].value;
			 var qu_fifteen_result = Number(qu_15_result);
			 window.qu_fifteen_result;
		};
	 };
	 
	 // CODE FOR 16 QUESTION
	 
	 var qu_16_rad = document.getElementsByName('qu-16');

     for (i = 0; i<qu_16_rad.length; i++){
         if (qu_16_rad[i].checked){
	         var qu_16_result = qu_16_rad[i].value;
			 var qu_sixteen_result = Number(qu_16_result);
			 window.qu_sixteen_result;
		};
	 };
	 
	 // CODE FOR 17 QUESTION
	 
	 var qu_17_rad = document.getElementsByName('qu-17');

     for (i = 0; i<qu_17_rad.length; i++){
         if (qu_17_rad[i].checked){
	         var qu_17_result = qu_17_rad[i].value;
			 var qu_seventeen_result = Number(qu_17_result);
			 window.qu_seventeen_result;
		};
	 };
	 
	 // CODE FOR 18 QUESTION
	 
	 var qu_18_rad = document.getElementsByName('qu-18');

     for (i = 0; i<qu_18_rad.length; i++){
         if (qu_18_rad[i].checked){
	         var qu_18_result = qu_18_rad[i].value;
			 var qu_eighteen_result = Number(qu_18_result);
			 window.qu_eighteen_result;
		};
	 };
	 
	 // CODE FOR 19 QUESTION
	 
	 var qu_19_rad = document.getElementsByName('qu-19');

     for (i = 0; i<qu_19_rad.length; i++){
         if (qu_19_rad[i].checked){
	         var qu_19_result = qu_19_rad[i].value;
			 var qu_nineteen_result = Number(qu_19_result);
			 window.qu_nineteen_result;
		};
	 };
	 
	 // CODE FOR 20 QUESTION
	 
	 var qu_20_rad = document.getElementsByName('qu-20');

     for (i = 0; i<qu_20_rad.length; i++){
         if (qu_20_rad[i].checked){
	         var qu_20_result = qu_20_rad[i].value;
			 var qu_twenty_result = Number(qu_20_result);
			 window.qu_twenty_result;
		};
	 };
	 
	 // CODE FOR 21 QUESTION
	 
	 var qu_21_rad = document.getElementsByName('qu-21');

     for (i = 0; i<qu_21_rad.length; i++){
         if (qu_21_rad[i].checked){
	         var qu_21_result = qu_21_rad[i].value;
			 var qu_twentyOne_result = Number(qu_21_result);
			 window.qu_twentyOne_result;
		};
	 };
	 
	 	/// TEST CALCULATOR
	 
	 var ans = 
	     qu_one_result + 
		 qu_two_result +
		 qu_three_result +
		 qu_four_result +
		 qu_five_result +
		 qu_six_result +
		 qu_seven_result +
		 qu_eight_result +
		 qu_nine_result +
		 qu_ten_result +
		 qu_eleven_result +
		 qu_twelve_result +
		 qu_thirteen_result +
		 qu_forteen_result +
		 qu_fifteen_result +
		 qu_sixteen_result +
		 qu_seventeen_result +
		 qu_eighteen_result +
		 qu_nineteen_result +
		 qu_twenty_result +
		 qu_twentyOne_result;
		 
		 // ---------------------SAVE RESULTS IN LOCALSTORAGE-------------------------------------
		 let depression = "depression_key";
		 let depression_value = ans;
		 localStorage.setItem(depression,depression_value);
		 
};

//--------------------DISPLAYS RESULTS ON NEXT PAGE-------------------------------------------------

function display_result() {
	
	// ----------------------------EXTRACTING DEPRESSION RESULTS-------------------------------------
	let depression_data = localStorage.getItem("depression_key");
	
	// LOGICAL ANALYSIS OF RESULTS	
		 
	
	 if (depression_data <= 10) {
		 //DISPLAYS TOTAL DEPRESSION SCORE
		 document.getElementById('u-d-r').innerText = depression_data;
		 //TICKS THE STATUS OF DEPRESSION ON THE TABLE
		 document.getElementById('d-n').className = "bolder-good";
		 // DISPLAYS ACTIONS TO BE TAKEN BY USER
		 document.getElementById('u-t').innerText = "You are doing great! Allow nothing to steal your joy.";
	}else if (depression_data == 11 || depression_data == 12 || depression_data == 13 || depression_data == 14 || depression_data == 15 || depression_data == 16){
		//DISPLAYS TOTAL DEPRESSION SCORE
		 document.getElementById('u-d-r').innerText = depression_data;
		 //TICKS THE STATUS OF DEPRESSION ON THE TABLE
		 document.getElementById('d-m').className = "bolder-btn";
		 // DISPLAYS ACTIONS TO BE TAKEN BY USER
		 document.getElementById('u-t').innerText = "Allow nothing to steal your joy. But please consider seeing a psychologist.";
	}else if (depression_data == 17 || depression_data == 18 || depression_data == 19 || depression_data == 20) {
		 //DISPLAYS TOTAL DEPRESSION SCORE
		 document.getElementById('u-d-r').innerText = depression_data;
		 //TICKS THE STATUS OF DEPRESSION ON THE TABLE
		 document.getElementById('d-bcd').className = "bolder-btn";
		 // DISPLAYS ACTIONS TO BE TAKEN BY USER
		 document.getElementById('u-t').innerText = "Please see a psychologist for mental assistance.";
	}else if 
	     (depression_data == 21 || 
	     depression_data == 22 || 
		 depression_data == 23 || 
		 depression_data == 24 || 
		 depression_data == 25 || 
		 depression_data == 26 || 
		 depression_data == 27 || 
		 depression_data == 28 ||
		 depression_data == 29 ||
		 depression_data == 30) {
			 //DISPLAYS TOTAL DEPRESSION SCORE
			 document.getElementById('u-d-r').innerText = depression_data;
			 //TICKS THE STATUS OF DEPRESSION ON THE TABLE
			 document.getElementById('d-md').className = "bolder-bad";
			 // DISPLAYS ACTIONS TO BE TAKEN BY USER
			 document.getElementById('u-t').innerText = "Please contact a psychologist, moderate depression diagnosis is not a good sign.";
		 }
	else if 
	     (depression_data == 31 ||
		 depression_data == 32 ||
		 depression_data == 33 ||
		 depression_data == 34 ||
		 depression_data == 35 ||
		 depression_data == 36 ||
		 depression_data == 37 ||
		 depression_data == 38 ||
		 depression_data == 39 ||
		 depression_data == 40) {
			 //DISPLAYS TOTAL DEPRESSION SCORE
			 document.getElementById('u-d-r').innerText = depression_data;
			 //TICKS THE STATUS OF DEPRESSION ON THE TABLE
			 document.getElementById('d-s').className = "bolder-bad";
			 // DISPLAYS ACTIONS TO BE TAKEN BY USER
			 document.getElementById('u-t').innerText = "Please speak with your psychologist, things will get better.";
		 }
	else if (depression_data > 40) {
		 //DISPLAYS TOTAL DEPRESSION SCORE
		 document.getElementById('u-d-r').innerText = depression_data;
		 //TICKS THE STATUS OF DEPRESSION ON THE TABLE
		 document.getElementById('d-es').className = "bolder-bad";
		 // DISPLAYS ACTIONS TO BE TAKEN BY USER
		 document.getElementById('u-t').innerText = "You appear to be very depressed, remember not to allow anything to steal your joy. Please consider seeing a psychologist.";
	}else{
	     alert('Your result is '+depression_data+' please you may have left a question or questions unanswered, please attempt all questions to get your depression status analyzed thank you.');
	};
	 
};	 