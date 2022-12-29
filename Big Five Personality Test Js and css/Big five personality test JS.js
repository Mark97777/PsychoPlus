// JS FOR THE BIG FIVE PERSONALITY TEST

/*
function save_result() {
     var rad_value = document.getElementsByName('qu-1');
	 
	 for (i = 0; i<rad_value.length; i++){
         if (rad_value[i].checked){
			 let qu_1_result = rad_value[i].value;
			 alert('value is '+qu_1_result);
		};
	};
};
*/


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
	 
	 // CODE FOR 22 QUESTION
	 
	 var qu_22_rad = document.getElementsByName('qu-22');

     for (i = 0; i<qu_22_rad.length; i++){
         if (qu_22_rad[i].checked){
	         var qu_22_result = qu_22_rad[i].value;
			 var qu_twentyTwo_result = Number(qu_22_result);
			 window.qu_twentyTwo_result;
		};
	 };
	 
	 // CODE FOR 23 QUESTION
	 
	 var qu_23_rad = document.getElementsByName('qu-23');

     for (i = 0; i<qu_23_rad.length; i++){
         if (qu_23_rad[i].checked){
	         var qu_23_result = qu_23_rad[i].value;
			 var qu_twentyThree_result = Number(qu_23_result);
			 window.qu_twentyThree_result;
		};
	 };
	 
	 // CODE FOR 24 QUESTION
	 
	 var qu_24_rad = document.getElementsByName('qu-24');

     for (i = 0; i<qu_24_rad.length; i++){
         if (qu_24_rad[i].checked){
	         var qu_24_result = qu_24_rad[i].value;
			 var qu_twentyFour_result = Number(qu_24_result);
			 window.qu_twentyFour_result;
		};
	 };
	 
	 // CODE FOR 25 QUESTION
	 
	 var qu_25_rad = document.getElementsByName('qu-25');

     for (i = 0; i<qu_25_rad.length; i++){
         if (qu_25_rad[i].checked){
	         var qu_25_result = qu_25_rad[i].value;
			 var qu_twentyFive_result = Number(qu_25_result);
			 window.qu_twentyFive_result;
		};
	 };
	 
	 // CODE FOR 26 QUESTION
	 
	 var qu_26_rad = document.getElementsByName('qu-26');

     for (i = 0; i<qu_26_rad.length; i++){
         if (qu_26_rad[i].checked){
	         var qu_26_result = qu_26_rad[i].value;
			 var qu_twentySix_result = Number(qu_26_result);
			 window.qu_twentySix_result;
		};
	 };
	 
	 // CODE FOR 27 QUESTION
	 
	 var qu_27_rad = document.getElementsByName('qu-27');

     for (i = 0; i<qu_27_rad.length; i++){
         if (qu_27_rad[i].checked){
	         var qu_27_result = qu_27_rad[i].value;
			 var qu_twentySeven_result = Number(qu_27_result);
			 window.qu_twentySeven_result;
		};
	 };
	 
	 // CODE FOR 28 QUESTION
	 
	 var qu_28_rad = document.getElementsByName('qu-28');

     for (i = 0; i<qu_28_rad.length; i++){
         if (qu_28_rad[i].checked){
	         var qu_28_result = qu_28_rad[i].value;
			 var qu_twentyEight_result = Number(qu_28_result);
			 window.qu_twentyEight_result;
		};
	 };
	 
	 // CODE FOR 29 QUESTION
	 
	 var qu_29_rad = document.getElementsByName('qu-29');

     for (i = 0; i<qu_29_rad.length; i++){
         if (qu_29_rad[i].checked){
	         var qu_29_result = qu_29_rad[i].value;
			 var qu_twentyNine_result = Number(qu_29_result);
			 window.qu_twentyNine_result;
		};
	 };
	 
	 // CODE FOR 30 QUESTION
	 
	 var qu_30_rad = document.getElementsByName('qu-30');

     for (i = 0; i<qu_30_rad.length; i++){
         if (qu_30_rad[i].checked){
	         var qu_30_result = qu_30_rad[i].value;
			 var qu_thirty_result = Number(qu_30_result);
			 window.qu_thirty_result;
		};
	 };
	 
	 // CODE FOR 31 QUESTION
	 
	 var qu_31_rad = document.getElementsByName('qu-31');

     for (i = 0; i<qu_31_rad.length; i++){
         if (qu_31_rad[i].checked){
	         var qu_31_result = qu_31_rad[i].value;
			 var qu_thirtyOne_result = Number(qu_31_result);
			 window.qu_thirtyOne_result;
		};
	 };
	 
	 // CODE FOR 32 QUESTION
	 
	 var qu_32_rad = document.getElementsByName('qu-32');

     for (i = 0; i<qu_32_rad.length; i++){
         if (qu_32_rad[i].checked){
	         var qu_32_result = qu_32_rad[i].value;
			 var qu_thirtyTwo_result = Number(qu_32_result);
			 window.qu_thirtyTwo_result;
		};
	 };
	 
	 // CODE FOR 33 QUESTION
	 
	 var qu_33_rad = document.getElementsByName('qu-33');

     for (i = 0; i<qu_33_rad.length; i++){
         if (qu_33_rad[i].checked){
	         var qu_33_result = qu_33_rad[i].value;
			 var qu_thirtyThree_result = Number(qu_33_result);
			 window.qu_thirtyThree_result;
		};
	 };
	 
	 // CODE FOR 34 QUESTION
	 
	 var qu_34_rad = document.getElementsByName('qu-34');

     for (i = 0; i<qu_34_rad.length; i++){
         if (qu_34_rad[i].checked){
	         var qu_34_result = qu_34_rad[i].value;
			 var qu_thirtyFour_result = Number(qu_34_result);
			 window.qu_thirtyFour_result;
		};
	 };
	 
	 // CODE FOR 35 QUESTION
	 
	 var qu_35_rad = document.getElementsByName('qu-35');

     for (i = 0; i<qu_35_rad.length; i++){
         if (qu_35_rad[i].checked){
	         var qu_35_result = qu_35_rad[i].value;
			 var qu_thirtyFive_result = Number(qu_35_result);
			 window.qu_thirtyFive_result;
		};
	 };
	 
	 // CODE FOR 36 QUESTION
	 
	 var qu_36_rad = document.getElementsByName('qu-36');

     for (i = 0; i<qu_36_rad.length; i++){
         if (qu_36_rad[i].checked){
	         var qu_36_result = qu_36_rad[i].value;
			 var qu_thirtySix_result = Number(qu_36_result);
			 window.qu_thirtySix_result;
		};
	 };
	 
	 // CODE FOR 37 QUESTION
	 
	 var qu_37_rad = document.getElementsByName('qu-37');

     for (i = 0; i<qu_37_rad.length; i++){
         if (qu_37_rad[i].checked){
	         var qu_37_result = qu_37_rad[i].value;
			 var qu_thirtySeven_result = Number(qu_37_result);
			 window.qu_thirtySeven_result;
		};
	 };
	 
	 // CODE FOR 38 QUESTION
	 
	 var qu_38_rad = document.getElementsByName('qu-38');

     for (i = 0; i<qu_38_rad.length; i++){
         if (qu_38_rad[i].checked){
	         var qu_38_result = qu_38_rad[i].value;
			 var qu_thirtyEight_result = Number(qu_38_result);
			 window.qu_thirtyEight_result;
		};
	 };
	 
	 // CODE FOR 39 QUESTION
	 
	 var qu_39_rad = document.getElementsByName('qu-39');

     for (i = 0; i<qu_39_rad.length; i++){
         if (qu_39_rad[i].checked){
	         var qu_39_result = qu_39_rad[i].value;
			 var qu_thirtyNine_result = Number(qu_39_result);
			 window.qu_thirtyNine_result;
		};
	 };
	 
	 // CODE FOR 40 QUESTION
	 
	 var qu_40_rad = document.getElementsByName('qu-40');

     for (i = 0; i<qu_40_rad.length; i++){
         if (qu_40_rad[i].checked){
	         var qu_40_result = qu_40_rad[i].value;
			 var qu_forty_result = Number(qu_40_result);
			 window.qu_forty_result;
		};
	 };
	 
	 // CODE FOR 41 QUESTION
	 
	 var qu_41_rad = document.getElementsByName('qu-41');

     for (i = 0; i<qu_41_rad.length; i++){
         if (qu_41_rad[i].checked){
	         var qu_41_result = qu_41_rad[i].value;
			 var qu_fortyOne_result = Number(qu_41_result);
			 window.qu_fortyOne_result;
		};
	 };
	 
	 // CODE FOR 42 QUESTION
	 
	 var qu_42_rad = document.getElementsByName('qu-42');

     for (i = 0; i<qu_42_rad.length; i++){
         if (qu_42_rad[i].checked){
	         var qu_42_result = qu_42_rad[i].value;
			 var qu_fortyTwo_result = Number(qu_42_result);
			 window.qu_fortyTwo_result;
		};
	 };
	 
	 // CODE FOR 43 QUESTION
	 
	 var qu_43_rad = document.getElementsByName('qu-43');

     for (i = 0; i<qu_43_rad.length; i++){
         if (qu_43_rad[i].checked){
	         var qu_43_result = qu_43_rad[i].value;
			 var qu_fortyThree_result = Number(qu_43_result);
			 window.qu_fortyThree_result;
		};
	 };
	 
	 // CODE FOR 44 QUESTION
	 
	 var qu_44_rad = document.getElementsByName('qu-44');

     for (i = 0; i<qu_44_rad.length; i++){
         if (qu_44_rad[i].checked){
	         var qu_44_result = qu_44_rad[i].value;
			 var qu_fortyFour_result = Number(qu_44_result);
			 window.qu_fortyFour_result;
		};
	 };
	 
	 // CODE FOR 45 QUESTION
	 
	 var qu_45_rad = document.getElementsByName('qu-45');

     for (i = 0; i<qu_45_rad.length; i++){
         if (qu_45_rad[i].checked){
	         var qu_45_result = qu_45_rad[i].value;
			 var qu_fortyFive_result = Number(qu_45_result);
			 window.qu_fortyFive_result;
		};
	 };
	 
	 // CODE FOR 46 QUESTION
	 
	 var qu_46_rad = document.getElementsByName('qu-46');

     for (i = 0; i<qu_46_rad.length; i++){
         if (qu_46_rad[i].checked){
	         var qu_46_result = qu_46_rad[i].value;
			 var qu_fortySix_result = Number(qu_46_result);
			 window.qu_fortySix_result;
		};
	 };
	 
	 // CODE FOR 47 QUESTION
	 
	 var qu_47_rad = document.getElementsByName('qu-47');

     for (i = 0; i<qu_47_rad.length; i++){
         if (qu_47_rad[i].checked){
	         var qu_47_result = qu_47_rad[i].value;
			 var qu_fortySeven_result = Number(qu_47_result);
			 window.qu_fortySeven_result;
		};
	 };
	 
	 // CODE FOR 48 QUESTION
	 
	 var qu_48_rad = document.getElementsByName('qu-48');

     for (i = 0; i<qu_48_rad.length; i++){
         if (qu_48_rad[i].checked){
	         var qu_48_result = qu_48_rad[i].value;
			 var qu_fortyEight_result = Number(qu_48_result);
			 window.qu_fortyEight_result;
		};
	 };
	 
	 // CODE FOR 49 QUESTION
	 
	 var qu_49_rad = document.getElementsByName('qu-49');

     for (i = 0; i<qu_49_rad.length; i++){
         if (qu_49_rad[i].checked){
	         var qu_49_result = qu_49_rad[i].value;
			 var qu_fortyNine_result = Number(qu_49_result);
			 window.qu_fortyNine_result;
		};
	 };
	 
	 // CODE FOR 50 QUESTION
	 
	 var qu_50_rad = document.getElementsByName('qu-50');

     for (i = 0; i<qu_50_rad.length; i++){
         if (qu_50_rad[i].checked){
	         var qu_50_result = qu_50_rad[i].value;
			 var qu_fifty_result = Number(qu_50_result);
			 window.qu_fifty_result;
		};
	 };
	 
	 
	 //--------------------------------------------------------------------------------
	 
	 
	 //  CALCULATIONS FOR EXTRAVERSION
	 // ADD A DEFAULT 20
	 
	 let extraversion_score = 20 +
						qu_one_result -
						qu_six_result +
						qu_eleven_result -
						qu_sixteen_result +
						qu_twentyOne_result -
						qu_twentySix_result +
						qu_thirtyOne_result -
						qu_thirtySix_result +
						qu_fortyOne_result -
						qu_fortySix_result;
	 
	 // Storing extraversion data into localStorage
	 let e_key = "e_s_key";
	 localStorage.setItem(e_key,extraversion_score);
	 
	 
	 //--------------------------------------------------------------------------------
	 
	 
	 // CALCULATIONS FOR AGREEABLENESS
	 // ADD A DEFAULT 14
	 
	 let agreeableness_score = 14 -
						qu_two_result +
						qu_seven_result -
						qu_twelve_result +
						qu_seventeen_result -
						qu_twentyTwo_result +
						qu_twentySeven_result -
						qu_thirtyTwo_result +
						qu_thirtySeven_result +
						qu_fortyTwo_result +
						qu_fortySeven_result;
	 
	 // Storing agreeableness data into localStorage
	 let a_key = "a_s_key";
	 localStorage.setItem(a_key,agreeableness_score);
	 
	 
	 //--------------------------------------------------------------------------------
	 
	 
	 // CALCULATIONS FOR CONSCIENTIOUSNESS
	 // ADD A DEFAULT 14
	 
	 let conscientiousness_score = 14 +
						qu_three_result -
						qu_eight_result +
						qu_thirteen_result -
						qu_eighteen_result +
						qu_twentyThree_result -
						qu_twentyEight_result +
						qu_thirtyThree_result -
						qu_thirtyEight_result +
						qu_fortyThree_result +
						qu_fortyEight_result;
	 
	 // Storing conscientiousness data into localStorage
	 let c_key = "c_s_key";
	 localStorage.setItem(c_key,conscientiousness_score);
	 
	 
	 //--------------------------------------------------------------------------------
	 
	 
	 // CALCULATIONS FOR NEUROTICISM
	 // ADD A DEFAULT 38
	 
	 let neuroticism_score = 38 -
						qu_four_result +
						qu_nine_result -
						qu_forteen_result +
						qu_nineteen_result -
						qu_twentyFour_result -
						qu_twentyNine_result -
						qu_thirtyFour_result -
						qu_thirtyNine_result -
						qu_fortyFour_result -
						qu_fortyNine_result;
	 
	 // Storing neuroticism data into localStorage
	 let n_key = "n_s_key";
	 localStorage.setItem(n_key,neuroticism_score);
	 
	 
	 //--------------------------------------------------------------------------------
	 
	 
	 // CALCULATIONS FOR OPENNESS
	 // ADD A DEFAULT 8
	 
	 let openness_score = 8 +
						qu_five_result -
						qu_ten_result +
						qu_fifteen_result -
						qu_twenty_result +
						qu_twentyFive_result -
						qu_thirty_result +
						qu_thirtyFive_result +
						qu_forty_result +
						qu_fortyFive_result +
						qu_fifty_result;
	 
	 // Storing openness data into localStorage
	 let o_key = "o_s_key";
	 localStorage.setItem(o_key,openness_score);
						
						
};


// -------------------------------DISPLAY RESULT ON NEXT PAGE-----------------------------------------
//-----------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function display_result() {
	
		 //  LOGICS FOR EXTRAVERSION RESULT
		 
	 // Client personality description on extraversion
	 let e_l = "<h2>Clients description on extraversion</h2><ul><li>Prefers solitude</li><li>Feels exhausted when having to socialize a lot</li><li>Finds it difficult to start a conversation</li><li>Dislikes making small talk</li><li>Carefully thinks things through before speaking</li><li>Dislikes being the center of attention</li></ul><hr />";
	 let e_h = "<h2>Clients description on extraversion</h2><ul><li>Enjoys being the center of attention.</li><li>Likes to start a conversation.</li><li>Enjoys meeting new people.</li><li>Has a wide social circle of friends and acquaintances.</li><li>Finds it easy to make new friends.</li><li>Feels energized when around other people.</li><li>Say things before thinking about them.</li></ul><hr />";
	
	
	 // Retrieving Saved data for extraversion
	 let extraversion_score_data = localStorage.getItem("e_s_key");
	 
	 // CONDITION FOR AN extremely low EXTRAVERSION
	 if (extraversion_score_data <= 18) {
		 document.getElementById('u-e-s').innerText = extraversion_score_data;
		 document.getElementById('u-pe').innerHTML = e_l;
		 document.getElementById('e-el').className = "bolder-bad";
	 // CONDITION FOR slightly low EXTRAVERSION
	 }else if(extraversion_score_data == 19 ) {
		 //  UPDATES USER SCORES
		 document.getElementById('u-e-s').innerText = extraversion_score_data;
		 document.getElementById('u-pe').innerHTML = e_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('e-sl').className = "bolder-good";
	 // CONDITION FOR moderate EXTRAVERSION
	 }else if(extraversion_score_data == 20 ){
		 document.getElementById('u-e-s').innerText = extraversion_score_data;
		 document.getElementById('u-pe').innerHTML = e_h;
		 document.getElementById('e-m').className = "bolder-good";
	 // CONDITION FOR slightly high EXTRAVERSION
	 }else if(extraversion_score_data == 21 ) {
		 document.getElementById('u-e-s').innerText = extraversion_score_data;
		 document.getElementById('u-pe').innerHTML = e_h;
		 document.getElementById('e-sh').className = "bolder-good";
	 // CONDITION FOR AN extremely high EXTRAVERSION
	 }else if(extraversion_score_data >= 22) {
		 document.getElementById('u-e-s').innerText = extraversion_score_data;
		 document.getElementById('u-pe').innerHTML = e_h;
		 document.getElementById('e-eh').className = "bolder-bad";
	 }else{
		 alert('Please you may have left some item(s) unanswered, please attempt all statements to get your test analyzed');
	 };
	 
	 
	 // LOGICS FOR AGREEABLENESS RESULT
	 
	 // Client personality description on agreeableness
	 let a_l = "<h2>Clients description on agreeableness</h2><ul><li>Takes little interest in others.</li><li>Doesn't care about how other people feel.</li><li>Has little interest in other people's problems.</li><li>Insults and belittles others.</li><li>Manipulates others to get what they want.</li></ul><hr />";
	 let a_h = "<h2>Clients description on agreeableness</h2><ul><li>Has a great deal of interest in other people.</li><li>Cares about others.</li><li>Feels empathy and concern for other people.</li><li>Enjoys helping and contributing to the happiness of other people.</li><li>Assists others who are in need of help.</li></ul><hr />";

	 
	 // Retrieving Saved data for agreeableness
	 let agreeableness_score_data = localStorage.getItem("a_s_key");
	 
	 // CONDITION FOR AN extremely low AGREEABLENESS
	 if (agreeableness_score_data <= 18){
		 //  UPDATES USER SCORES
		 document.getElementById('u-a-s').innerText = agreeableness_score_data;
		 document.getElementById('u-pa').innerHTML = a_l;
		 // TICKS THE RESULT STATUS
		 document.getElementById('a-el').className = "bolder-bad";
	 // CONDITION FOR slightly low AGREEABLENESS
	 }else if(agreeableness_score_data == 19 ){
		 //  UPDATES USER SCORES
		 document.getElementById('u-a-s').innerText = agreeableness_score_data;
		 document.getElementById('u-pa').innerHTML = a_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('a-sl').className = "bolder-good";
	 // CONDITION FOR moderate AGREEABLENESS
	 }else if(agreeableness_score_data == 20 ) {
		 //  UPDATES USER SCORES
		 document.getElementById('u-a-s').innerText = agreeableness_score_data;
		 document.getElementById('u-pa').innerHTML = a_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('a-m').className = "bolder-good";
	 // CONDITION FOR AN slightly high AGREEABLENESS
	 }else if(agreeableness_score_data == 21){
		 //  UPDATES USER SCORES
		 document.getElementById('u-a-s').innerText = agreeableness_score_data;
		 document.getElementById('u-pa').innerHTML = a_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('a-sh').className = "bolder-good";
	 // CONDITION FOR AN extremely high AGREEABLENESS
	 }else if(agreeableness_score_data >= 22){
		 //  UPDATES USER SCORES
		 document.getElementById('u-a-s').innerText = agreeableness_score_data;
		 document.getElementById('u-pa').innerHTML = a_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('a-eh').className = "bolder-good";
	 }else{
		 alert('Please you may have left some item(s) unanswered, please attempt all statements to get your test analyzed');
	 };
	 
	 
	 // LOGICS FOR CONSCIENTIOUSNESS
	 
	 // Client personality description on conscientiousness
	 let c_l = "<h2>Clients description on conscientiousness</h2><ul><li>Dislikes structure and schedules.</li><li>Makes messes and doesn't take care of things.</li><li>Fails to return things or put them back where they belong.</li><li>Procrastinates important tasks.</li><li>Fails to complete necessary or assigned tasks.</li></ul><hr />";
	 
	 let c_h = "<h2>Clients description on conscientiousness</h2><ul><li>Spends time preparing.</li><li>Finishes important tasks right away.</li><li>Pays attention to detail.</li><li>Enjoy having a set schedule.</li><li>Very organized and mindful.</li></ul><hr />";
	 
	 
	 // Retrieving Saved data for conscientiousness
	 let conscientiousness_score_data = localStorage.getItem("c_s_key");
	 
	  // CONDITION FOR AN extremely low CONSCIENTIOUSNESS
	 if (conscientiousness_score_data <= 18){
		 //  UPDATES USER SCORES
		 document.getElementById('u-c-s').innerText = conscientiousness_score_data;
		 document.getElementById('u-pc').innerHTML = c_l;
		 // TICKS THE RESULT STATUS
		 document.getElementById('c-el').className = "bolder-bad";
	 // CONDITION FOR slightly low CONSCIENTIOUSNESS
	 }else if(conscientiousness_score_data == 19 ){
		 //  UPDATES USER SCORES
		 document.getElementById('u-c-s').innerText = conscientiousness_score_data;
		 document.getElementById('u-pc').innerHTML = c_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('c-sl').className = "bolder-good";
	 // CONDITION FOR moderate CONSCIENTIOUSNESS
	 }else if(conscientiousness_score_data == 20){
		 //  UPDATES USER SCORES
		 document.getElementById('u-c-s').innerText = conscientiousness_score_data;
		 document.getElementById('u-pc').innerHTML = c_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('c-m').className = "bolder-good";
	 // CONDITION FOR slightly high CONSCIENTIOUSNESS
	 }else if(conscientiousness_score_data == 21){
		 //  UPDATES USER SCORES
		 document.getElementById('u-c-s').innerText = conscientiousness_score_data;
		 document.getElementById('u-pc').innerHTML = c_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('c-sh').className = "bolder-good";
	 // CONDITION FOR AN extremely high CONSCIENTIOUSNESS
	 }else if(conscientiousness_score_data >= 22){
		 //  UPDATES USER SCORES
		 document.getElementById('u-c-s').innerText = conscientiousness_score_data;
		 document.getElementById('u-pc').innerHTML = c_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('c-eh').className = "bolder-bad";
	 }else{
		 alert('Please you may have left some item(s) unanswered, please attempt all statements to get your test analyzed');
	 };
	 
	 
	 // LOGICS FOR NEUROTICISM
	 
	 // Client personality description on neuroticism
	 let n_l = "<h2>Clients description on neuroticism</h2><ul><li>Emotionally stable.</li><li>Deals well with stress.</li><li>Rarely feels sad or depressed.</li><li>Doesn't worry much.</li><li>Is very relaxed.</li></ul><hr />";
	 
	 let n_h = "<h2>Clients description on neuroticism</h2><ul><li>Experience a lot of stress.</li><li>Worries about many different things.</li><li>Experience dramatic shifts in mood.</li><li>Gets upset easily.</li><li>Feels anxious.</li><li>Struggles to bounce back after stressful events.</li></ul><hr />";
	 
	 
	 // Retrieving Saved data for neuroticism
	 let neuroticism_score_data = localStorage.getItem("n_s_key");
	 
	  // CONDITION FOR AN extremely low NEUROTICISM
	 if (neuroticism_score_data <= 18){
		 //  UPDATES USER SCORES
		 document.getElementById('u-n-s').innerText = neuroticism_score_data;
		 document.getElementById('u-pn').innerHTML = n_l;
		 // TICKS THE RESULT STATUS
		 document.getElementById('n-el').className = "bolder-bad";
	 // CONDITION FOR slightly low NEUROTICISM
	 }else if(neuroticism_score_data == 19 ){
		 //  UPDATES USER SCORES
		 document.getElementById('u-n-s').innerText = neuroticism_score_data;
		 document.getElementById('u-pn').innerHTML = n_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('n-sl').className = "bolder-good";
	 // CONDITION FOR moderate NEUROTICISM
	 }else if(neuroticism_score_data == 20){
		 //  UPDATES USER SCORES
		 document.getElementById('u-n-s').innerText = neuroticism_score_data;
		 document.getElementById('u-pn').innerHTML = n_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('n-m').className = "bolder-good";
	 // CONDITION FOR slightly high NEUROTICISM
	 }else if(neuroticism_score_data == 21){
		 //  UPDATES USER SCORES
		 document.getElementById('u-n-s').innerText = neuroticism_score_data;
		 document.getElementById('u-pn').innerHTML = n_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('n-sh').className = "bolder-good";
	 // CONDITION FOR AN extremely high NEUROTICISM
	 }else if(neuroticism_score_data >= 22){
		 //  UPDATES USER SCORES
		 document.getElementById('u-n-s').innerText = neuroticism_score_data;
		 document.getElementById('u-pn').innerHTML = n_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('n-eh').className = "bolder-bad";
	 }else{
		 alert('Please you may have left some item(s) unanswered, please attempt all statements to get your test analyzed');
	 };
	 
	 

	 
	 // LOGICS FOR OPENNESS
	 
	 // Client personality description on openess
	 let o_l = "<h2>Clients description on openness</h2><ul><li>Dislikes change.</li><li>Does not enjoy new things.</li><li>Resists new ideas.</li><li>Not very imaginative.</li><li>Dislikes abstract or theoretical concepts.</li></ul><hr />";
	 
	 let o_h = "<h3>Clients description on openness</h3><ul><li>Very creative.</li><li>Open to trying new things.</li><li>Focused on tackling new challenges.</li><li>Happy to think about abstract concepts.</li></ul><hr />";
	 
	 // Retrieving Saved data for openness
	 let openness_score_data = localStorage.getItem("o_s_key");
	 
	  // CONDITION FOR AN extremely low OPENNESS
	 if (openness_score_data <= 18){
		 //  UPDATES USER SCORES
		 document.getElementById('u-o-s').innerText = openness_score_data;
		 document.getElementById('u-po').innerHTML = o_l;
		 // TICKS THE RESULT STATUS
		 document.getElementById('o-el').className = "bolder-bad";
	 // CONDITION FOR slightly low OPENNESS
	 }else if(openness_score_data == 19 ){
		 //  UPDATES USER SCORES
		 document.getElementById('u-o-s').innerText = openness_score_data;
		 document.getElementById('u-po').innerHTML = o_l;
		 // TICKS THE RESULT STATUS
		 document.getElementById('o-sl').className = "bolder-good";
	 // CONDITION FOR moderate OPENNESS
	 }else if(openness_score_data == 20){
		 //  UPDATES USER SCORES
		 document.getElementById('u-o-s').innerText = openness_score_data;
		 document.getElementById('u-po').innerHTML = o_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('o-m').className = "bolder-good";
	 // CONDITION FOR slightly high OPENNESS
	 }else if(openness_score_data == 21){
		 //  UPDATES USER SCORES
		 document.getElementById('u-o-s').innerText = openness_score_data;
		 document.getElementById('u-po').innerHTML = o_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('o-sh').className = "bolder-good";
	 // CONDITION FOR AN extremely high OPENNESS
	 }else if(openness_score_data >= 22){
		 //  UPDATES USER SCORES
		 document.getElementById('u-o-s').innerText = openness_score_data;
		 document.getElementById('u-po').innerHTML = o_h;
		 // TICKS THE RESULT STATUS
		 document.getElementById('o-eh').className = "bolder-bad";
	 }else{
		 alert('Please you may have left some item(s) unanswered, please attempt all statements to get your test analyzed');
	 };
	 
	 
	 
};