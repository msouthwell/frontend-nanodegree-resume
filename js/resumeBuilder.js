var work = {
    "jobs": [{
        "employer": "US Army",
        "title": "Battalion Intelligence Officer",
        "dates": "July 2015 - Present",
        "location": "Seoul, South Korea",
        "description": "TODO: Write the description"
    }, {
        "employer": "US Army",
        "title": "Fire Support Officer",
        "dates": "April 2012 - December 2014",
        "location": "Vicenza, Italy",
        "description": "TODO: Write the description"
    }]
}

var projects = {
    "projects": [{
        "title": "Portfolio Mockup",
        "dates": "March 2016",
        "description": "TODO: write description",
        "images": ["https://placehold.it/300x200"]
    }]
}

var bio = {
    "name" : "Matt Southwell",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "+82-010-2989-2737",
        "email" : "matt.g.southwell@gmail.com",
        "github": "msouthwell",
        "twitter": "mg_southwell",
        "location": "Seoul, South Korea"
    },
    "welcomeMessage" : "This is my welcome Message",
    "skills"  : ["Python", "Java", "HTML/CSS", "javaScript", "Machine Learning"],
    "bioPic": "images/me.jpg"
}

var education = {
    "schools": [{
        "name": "United States Military Academy",
        "location": "West Point, United States",
        "degree": "Bachelor's of Science",
        "major": "Electrical Engineering with Honors",
        "graduationDate": "2011"
    }, {
        "name": "Georgia Institute of Technology",
        "location": "Atlanta, United States",
        "degree": "Masters",
        "major": "Computer Science",
        "graduationDate": "Dec 2016"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "date": "Ongoing",
        "url": "https://www.udacity.com"
    }]
}

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i in bio.skills){
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    } 
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title))
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates))
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description))
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]))
            }
        }
    }
}

education.display = function() {
    for (i in education.schools){
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(schoolName + schoolDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].graduationDate));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
    }  
    for (i in education.onlineCourses){
        $(".education-entry:last").append(HTMLonlineClasses);
        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(onlineTitle + onlineSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }  
}

work.display = function() {
    for (i in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(workEmployer + workTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));

    }
}

footerContacts = function() {
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}
// function locationizer(work_obj) {
//     var locationArray = [];

//     for (job in work_obj.jobs) {
//         var newLocation = work_obj.jobs[job].location;
//         locatoinArray.push(newLocation);
//     }

//     return locationArray;
// }
// locationArray = locationizer(work);
bio.display();
work.display();
projects.display();
education.display();
footerContacts();
$("#mapDiv").append(googleMap);

