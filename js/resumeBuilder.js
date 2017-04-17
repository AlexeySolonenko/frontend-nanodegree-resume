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

for (var i = 0; i < 9; i++) {console.log(i);}

function displayWork(){
	work.employment.forEach(function(record){
		$("#workExperience").append(HTMLworkStart);
		var formattedWork = HTMLworkEmployer.replace("%data%",record.employer);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkTitle.replace("%data%",record.position);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkDates.replace("%data%",record.years);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkLocation.replace("%data%",record.location);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkDescription.replace("%data%",record.status);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		
		var formattedEmployerTitle = HTMLworkEmployer.replace("%data%",record.employer) +
		" " + HTMLworkTitle.replace("%data%",record.position);
		console.log(formattedEmployerTitle);
		$(".work-entry:last").append(formattedEmployerTitle);
		
	});
}

$(document).click(function(loc) {
  // your code goes here
  console.log('X : ',loc.pageX,'; Y : ',loc.pageY)
});



var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
	var locationsArray = [];
	work_obj.jobs.forEach(function(job)
		{
			locationsArray.push(job.location);
		});
		
	return locationsArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

	