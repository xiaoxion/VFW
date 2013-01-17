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
        for (var i=0 , rl=radio.length; i<rl ; i++) {
            if (radio[i].checked) {
                priority = radio[i].value
            };
        };
    };
    function storeData() {
        getPriority ();
        var keyGen = Math.floor(Math.random()*1000000);
        var	userInput = {};
            userInput.location = ["Location:" , ids("location").value];
            userInput.worktype = ["Work Type:" , ids("typeOfWork").value];
            userInput.priority = ["Priority:" , priority ];
            userInput.people   = ["Workers Sent:" , ids("people").value];
            userInput.finishby = ["Finish By:" , ids("finishby").value];
            userInput.notes    = ["Notes:" , ids("notes").value];
            localStorage.setItem(keyGen , JSON.stringify(userInput));
            alert("Job Saved!");
            };
	
    // Display Data
    function getData() {
        switchControl("on")
        var makeDiv = document.createElement('div');
            makeList = document.createElement('ul');
        makeDiv.setAttribute('id', 'list');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        ids('list').style.display = 'block';
        for(var i=0, l=localStorage.length; i<l; i++) {
            var makeLi = document.createElement('li');
                key = localStorage.key(i);
                value = localStorage.getItem(key);
                parsed = JSON.parse(value);
                subUl = document.createElement('ul');
                makeBreak = document.createElement('br');
            makeList.appendChild(makeLi)
            makeLi.appendChild(subUl)
            for(var n in parsed) {
                var subLi = document.createElement('li');
                    text = parsed[n][0] + " " + parsed[n][1];
                subUl.appendChild(subLi);
                subLi.innerHTML = text;
            };
        makeLi.appendChild(makeBreak);
        };
    };
    
    function switchControl(n) {
        switch(n) {
            case "on":
                ids('mainform').style.display = 'none';
                ids('clear').style.display = "inline";
                ids('display').style.display = 'none';
                ids('reload').style.display = 'inline';
                break;
            case "off":
                ids('mainform').style.display = 'block';
                ids('clear').style.display = "inline";
                ids('display').style.display = 'inline';
                ids('reload').style.display = 'none';
                ids('list').style.display = 'none';
                break;
            default:
                return false
        };
    };    
    // Clear Data
    function clearData() {
        if (localStorage.length===0) {
            alert("No Jobs to clear!");
        } else {
            localStorage.clear();
            confirm("Are you sure you want to clear all Jobs??");
            alert("Jobs Cleared!");
            return false;
        };
    };

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
    clear.addEventListener( "click" , clearData );
    submit.addEventListener( "click" , storeData );
});