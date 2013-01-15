// Project 2 : WOrkganizer
// Author: Esau Rubio
// VFW 0113
// 1/15/13

// DOM Loaded
window.addEventListener( "DOMContentLoaded" , function(){
	// Optimizations
	function ids(x) {
		var element = document.getElementById(x);
		return element
	};
	// Dynamic Content
	function addCat () {
		var selectForm = document.getElementById()
	};
	
	// Clear and Display Data
	var display = ids("display"),
		clear = ids("clear"),
		submit = ids("submit");
	display.addEventListener( "click" , getData );
	clear.addEventListener( "click" , clearData );
	submit.addEventListener( "click" , storeData );
});