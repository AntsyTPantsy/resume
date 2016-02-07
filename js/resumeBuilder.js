

var work = {
    "jobs": [
    {
        "employer": "Elan IT/IKEA Communications AB",
        "title": "3D Coordinator",
        "location": "Älmhult, Swe",
        "dates": "2010-2011",
        "description": "I was hired to place orders for 3D models when IKEA decided to create 3D models for every global product they had on market. 6 months into the role I started leading production meetings and got recruited over to IKEA Communications AB as a production leader after 1 year positioned as a 3D coordinator. I managed to create a system for the ordering process that greatly reduced the expenses for the supplier costs, shortened the proudction time and raised the quality of our deliveries."
    },
    {
        "employer": "IKEA Communications AB",
        "title": "Production Leader",
        "location": "Älmhult, Swe",
        "dates": "2011-2013",
        "description": "Created a factory rendering setup for product images for the a kitchen range in Europe, that was launched on the 1st of June 2013. Kept control over cost, quality and time for making 1100 3D models that were used to produce 15 000 main product images of kitchen combinations. We also replaced the manual process of indexing images together with Cap Gemini in a way that made it possible for me alone to manage the indexing and delivery of the 15 000 images back to our customers at IKEA of Sweden. I’ve worked extensively with the development of a workflow based production tool that IKEA Communications AB uses to distribute and keep track of jobs in-house and at external suppliers."
    },
    {
        "employer": "IKEA Communications AB",
        "title": "Project Leader",
        "location": "Älmhult, Swe",
        "dates": "2011-2015",
        "description": "Leading the production of the In-Package communication, the graphical guides needed to assist the IKEA customer in assembling the famous flat packs of their favor, giving them advice in on how to take care of their product or if there are any laws and warnings they need to know about in relation to their purchased product. My team consists of 12 Informative Communicators, consultants/freelance illustrators/communicators and external suppliers. Still giving the IKEAs kitchen range special attention, managing the timelines agreed with IKEA of Sweden and costs throughout the different carriers of my department (Assembly Instructions, 3D, Main Product Pictures, Store Communication)."
    }
    ]
}

var bio = {
    "contact":
    {
        "name" : "Antonia Pehrson",
        "role" : "Project Leader, Developer & Industrial Designer",
        "bioPic" : "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/0ef/227/23804de.jpg",
        "skills" : ["Focused", "Driven", "Honest", "Ambitious"],
        "welcomeMessage" : "Welcome to my CV",
        "adress" : "Spånehusvägen 49a, 211 58 Malmö, Sweden",
        "email" : "antonia.pehrson@gmail.com",
        "mobile" : "+46(0)733941288",
        "github" : "https://github.com/AntsyTPantsy",
        "twitter" : "@AntsyTPantsy",
        "location" : "Malmö"
    }
}

var projects = {
    "projects":
    [
    {
        "title" : "Main product images for IKEA METOD kitchen launch",
        "dates" : "2012-1013",
        "description" : "Produced 15 000 images to support the launch of IKEAs launch of the kitchen cabinet system METOD and SEKTION",
        "images" : ["http://www.ikea.com/PIAimages/0181967_PE332648_S2.JPG",
                    "http://www.ikea.com/PIAimages/0181972_PE332463_S2.JPG",
                    "http://www.ikea.com/PIAimages/0193393_PE345715_S2.JPG"]
    },
    {
                "title" : "Animated Assembly Instruction",
        "dates" : "2012-1013",
        "description" : "An animated assembly instruction for IKEA STUVA childrens loft bed",
        "images" : ["https://i.ytimg.com/vi/l5BMXttGHi0/mqdefault.jpg",""]
    }
    ]

}

var education =     {
    "schools": 
        [
        {
            "name": "Malmö University",
            "location": "Malmö",
            "degree": "30pt Course",
            "graduactionYear": "2004",
            "majors": ["Design Theory", "Imaginary Futures"],
            "dates" : "Jan 2003-June 2003",
            "url": "http://edu.mah.se/sv/Course/KK3042#Syllabus"
        },
        {
            "name" : "Lund University",
            "location" : "Lund",
            "degree" : "Master",
            "graduactionYear" : "2009",
            "majors": ["Industrial Design"],
            "dates" : "Aug 2003-June 2009",
            "url": "http://www.industrialdesign.lth.se/"
        },
        {
            "name" : "Lund University",
            "location" : "Lund",
            "degree" : "30pt Course",
            "graduactionYear" : "2010",
            "majors": ["Information systems"],
            "dates" : "Aug 2009-Dec 2009",
            "url": "http://www.ics.lu.se/en"
        }
        ],
    
    "onlineCourses":
        [
        {
            "title" : "JavaScrip Basics",
            "school" : "Udacity",
            "dates" : "October 2015",
            "URL" : "https://www.udacity.com/course/viewer#!/c-ud000/l-4108828652/m-4131358774"
        },
        {
            "title": "JavaScript Basics",
            "school" : "SoloLearn",
            "dates" : "December 2015",
            "URL" : "http://www.sololearn.com/Profile/375420"
        },
        {
            "title": "ScrumMaster Certificate",
            "school" : "Scrum Alliance",
            "dates" : "November 2014",
            "URL" : "https://www.scrumalliance.org/community/profile/apehrson"
        }
        ]
}

//for (var i = 0; i < work.jobs.length; i++) {
//    console.log(work.jobs[i]);
//}

//add name and role to header

var formattedName = HTMLheaderName.replace("%data%", bio.contact.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.contact.role);
$("#header").append(formattedRole);
var formattedImage = HTMLbioPic.replace("%data%", bio.contact.bioPic);
$("#header").append(formattedImage);

if (bio.contact.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    for(skill in bio.contact.skills) {
        var formattedSkill = HTMLskills.replace("%data%",bio.contact.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

var formattedContactDetails = HTMLcontactGeneric.replace("%contact%", "E-mail:   ").replace("%data%", bio.contact.email) 
+ HTMLcontactGeneric.replace("%contact%","Adress: ").replace("%data%", bio.contact.adress) 
+ HTMLcontactGeneric.replace("%contact%","Mobile: ").replace("%data%", bio.contact.mobile);
$("#header").append(formattedContactDetails);
//add skills to header




function displayWork() {

    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart); 
        //create new div for Work sektion
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        }
    }

displayWork();

projects.display = function() {
    
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace ("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
            }
        }   
    }
}

projects.display();

education.display = function () {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    if(education.onlineCourses.length > 0){
        var onlineClasses = HTMLonlineClasses;
        $(".education-entry:last").append(onlineClasses);
            for(onlineCourse in education.onlineCourses) {
            var formattedOnlineClasses = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            var formattedOnlineSchools = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            $(".education-entry:last").append(formattedOnlineClasses + formattedOnlineSchools);
            }    
    }
}

education.display();

//loging x and y in the console
/*
projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});*/

//function that makes "name nameson" = "Name NAMESON"
function inName(name)  {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function getRelationship(x, y) {
    var firstNr = x;
    var secondNr = y;    

    if(isNaN(firstNr) && isNaN(secondNr)){
        var message = "Can't compare relationships because " + firstNr + " and " + secondNr + " are not numbers.";
    }else if(isNaN(firstNr)) {
        var message = "Can't compare because " + firstNr + " is not a number.";
    }else if(isNaN(secondNr)) {
        var message = "Can't compare because " + secondNr + " is not a number.";
    }else {

        if (x == y){
            var message = " = ";
        }else if(x > y) {
            var message = " > ";
        }else {
            var message = " < ";
        }
    }
return message;
}


var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var newNames = names.sort();
    return newNames;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship(3,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));



// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    var result = [];
    for (var i in results.formattedResults.ruleResults){
        result.push(results.formattedResults.ruleResults[i].localizedRuleName);
    }
    // Your code goes here!
    return result;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var result = 0;
    for(var j in results.pageStats) {
      if(j.match(/Bytes/g)) {
        result += Number(results.pageStats[j]); 
      }
    }
  return result;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!


psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
 
