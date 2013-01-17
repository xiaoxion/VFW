// Project 2 : WOrkganizer
// Author: Esau Rubio
// VFW 0113
// 1/15/13

// DOM Loaded
window.addEventListener( "DOMContentLoaded" , function() {
    // Optimizations
    function ids(x) {
        var element = document.getElementById(x);
        return element;
    };
    
    // Save Data
    function getPriority() {
        var radio = document.forms[0].priorit;
        console.log(radio);
        console.log(radio.checked);
        for (var i=0 rl=radio.length; i<rl ; i++) {
            if (radio[i].checked) {
                priority = radio[i].value
            };
        };
    };
    function storeData() {
        getPriority ();
        var keyGen = Math.floor(Math.random()*1000000);
        var	userInput = {};
            userInput.location = ["Location" , ids("location").value];
            userInput.worktype = ["Work Type" , ids("typeOfWork").value];
            userInput.priority = ["Priority" , priority ];
            userInput.people   = ["Workers Sent" , ids("people").value];
            userInput.finishby = ["Finish By" , ids("finishby").value];
            userInput.notes    = ["Notes" , ids("notes").value];
            localStorage.setItem(keyGen , JSON.stringify(userInput));
            alert("Job Saved!");
            alert(localStorage.length)
            };
	
    // Display Data
    function getData() {
        var makeDiv = document.createElement('div');
            makeList = document.createElement('ul');
        makeDiv.setAttribute('id', 'input');
        makeDiv.appendChild(makeList);
        for(var i=0, l=localStorage.length; i<l; i++) {
            var makeLi = document.createElement('li');
                key = localStorage.key[i]
                value = localStorage.getItem(key);
                parsed = JSON.parse(value)
        };
    };    
    // Clear Data

    // Dynamic Options
    function addCat() {
        var selectForm = document.getElementsByTagName("form"),
            selectLi = ids("worktype");
        selection = document.createElement("select");
        selection.setAttribute( "id" , "typeOfWork" );
        for(var i=0, n=maintenanceTypes.length ; i<n ; i++ ) {
            var makeOption = document.createElement("option"),
                text = maintenanceTypes[i];
                makeOption.setAttribute("value", text);
                makeOption.innerHTML = text;
                selection.appendChild(makeOption);
        };
        selectLi.appendChild(selection)
    };
	
    // Default Values
    var maintenanceTypes = [ "-Maintenance-", "Maintenace: House Keeping" , "Maintenace: Painting", "Maintenace: Electric" , "Maintenace: Plumbing"],
        priority;
		
    addCat ()
    //Clear and Display Data
    var display = ids("display");
        clear = ids("clear");
        submit = ids("submit");
    display.addEventListener( "click" , getData );
    //clear.addEventListener( "click" , clearData );
    submit.addEventListener( "click" , storeData );
});