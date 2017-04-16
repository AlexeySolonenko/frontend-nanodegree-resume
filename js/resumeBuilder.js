/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append("Alexey Solonenko");
 var firstName = "Alexey", awesomeThought = "I am Alexey";
 var age = 32;
 console.log(firstName);
 console.log(awesomeThought);
 var funThoughts = awesomeThought.replace("I am","I have been, I am, and I will remain");
 /* var awesomeThought.replace("awesome","test"); */
 console.log(funThoughts);
 /* console.log(testThoughts); */
 console.log(awesomeThought);
 $("#main").append(funThoughts);
 var formattedName = HTMLheaderName.replace("%data%", "Alexey Solonenko");
 $("#header").append(formattedName);
 var role = "Front-End Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
 $("#header").append(formattedRole);
 var skills = ["HTML, ", "CSS, ", "Joomla, ", "JS" ];
 $("#main").append(skills);
 

 var sampleArray = [0,0,9];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    newArray = _array;
    var length = newArray.length;
    var lastElement = length - 1;
    newArray[lastElement] = newArray[lastElement] + 1;
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

var myName = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
	var firstName = oldName.slice(0, oldName.indexOf(" "));
    var lastName = oldName.slice((oldName.indexOf(" ")+1),(oldName.length));
	lastName = lastName.toUpperCase();
	firstName = firstName.toLowerCase();
	// firstName[0] = firstName[0].toUpperCase();
	someChar = firstName[0].toUpperCase();
	firstName = someChar + firstName.substring(1, firstName.length);
    finalName = firstName + " " + lastName;
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(myName));

 