/*
This is empty on purpose! Your code to build the resume will go here.
 */
 function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%


	function removeArrowsFromHtml(someHtml){
		var newString = someHtml.replace(/</g,'');
		var newString = newString.replace(/>/g,'');
		
		return newString;
	}
	
var testHtmlFunc = removeArrowsFromHtml('<div> </div> <div> </div>');
console.log(testHtmlFunc);	

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};
console.log(weirdObject.property);
console.log(weirdObject["8property"]);

var toggle = false;
var result = "true";
bio.skills[0] != null ? (
			HTMLheaderName = HTMLheaderName.replace('%data%',bio.name),
			$("#header").prepend(HTMLheaderName),
			$("#header").append(HTMLskillsStart),
			HTMLskills = HTMLskills.replace('%data%',bio.skills[0].name),
			$("#skills").append(HTMLskills),
			HTMLskills = HTMLskills.replace(bio.skills[0].name,bio.skills[1].name),
			$("#skills").append(HTMLskills),
			HTMLskills = HTMLskills.replace(bio.skills[1].name,bio.skills[2].name),
			$("#skills").append(HTMLskills)
		)
	:
		(
			console.log("Sorry, you did not list any skills, bro.")
		);
console.log(result);

console.log(bio.metrics);

	