var work = {
    "jobs": [{
        "employer": "US Army",
        "title": "Battalion Intelligence Officer",
        "dates": "July 2015 - Present",
        "location": "Seoul, South Korea",
        "url": "http://www.goarmy.com/careers-and-jobs/browse-career-and-job-categories/combat/field-artillery-officer.html",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor justo nisi, id lacinia turpis fermentum eu. Duis ut sem quis urna maximus porta. Proin a metus leo. Maecenas maximus venenatis orci in ornare. In iaculis aliquet nisi, volutpat bibendum erat consectetur eget. Duis quis mattis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam convallis tristique ullamcorper. Aliquam ultricies, ipsum a aliquam feugiat, lorem purus vulputate nisl, vitae commodo tortor sem id mauris. Curabitur hendrerit malesuada libero sed tempus."
    }, {
        "employer": "US Army",
        "title": "Fire Support Officer",
        "dates": "April 2012 - December 2014",
        "location": "Vicenza, Italy",
        "url": "http://www.goarmy.com/careers-and-jobs/browse-career-and-job-categories/combat/field-artillery-officer.html",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem magna, vehicula ac convallis vel, ornare ut lectus. Ut dapibus urna sed mauris rutrum aliquet at sit amet libero. Nullam sapien libero, fringilla eu hendrerit eget, condimentum et est. Nulla id augue vel ex sagittis ultricies. Nulla congue iaculis pellentesque. Praesent maximus, libero nec egestas viverra, nisl magna egestas nulla, vitae venenatis ligula magna in lectus. Aliquam placerat auctor pharetra. Nullam at leo elementum, hendrerit nulla a, egestas nibh. Praesent non magna sed massa gravida dapibus."
    }]
}

var projects = {
    "projects": [{
        "title": "Portfolio Mockup",
        "dates": "March 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem magna, vehicula ac convallis vel, ornare ut lectus. Ut dapibus urna sed mauris rutrum aliquet at sit amet libero. Nullam sapien libero, fringilla eu hendrerit eget, condimentum et est. Nulla id augue vel ex sagittis ultricies. Nulla congue iaculis pellentesque. Praesent maximus, libero nec egestas viverra, nisl magna egestas nulla, vitae venenatis ligula magna in lectus. Aliquam placerat auctor pharetra. Nullam at leo elementum, hendrerit nulla a, egestas nibh. Praesent non magna sed massa gravida dapibus.",
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
    "welcomeMessage" : "I am currently a transitioning US Army Captain and will be leaving the Army in the summer of 2016.  Over the last five years I have performed primarily as an analyst for the military.  Working in 5-15 person teams, I have been heavily involved in deliberate problem solving, resource allocation, and management at the US Army Battalion and Brigade organizational levels (400 persons and 2500 persons, respectively).  Outside of the military I have focused on ensuring my STEM skillset has stayed current by pursuing my Masters in Computer Science at Georgia Tech.",
    "skills"  : ["Python", "Java", "HTML/CSS", "javaScript", "Machine Learning"],
    "bioPic": "images/me.jpg"
}

var education = {
    "schools": [{
        "name": "United States Military Academy",
        "location": "West Point, United States",
        "degree": "Bachelor's of Science",
        "majors": ["Electrical Engineering with Honors"],
        "dates": "2011",
        "url": "http://www.usma.edu/SitePages/Home.aspx"
    }, {
        "name": "Georgia Institute of Technology",
        "location": "Atlanta, United States",
        "degree": "Masters",
        "majors": ["Computer Science"],
        "dates": "Dec 2016",
        "url": "http://www.gatech.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "date": "Ongoing",
        "url": "https://www.udacity.com"
    }]
}

/**
* Formats and displays all of the information in the bio JSON
*/
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#bio").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#bio").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#bio").append(HTMLskillsStart);
        for (i in bio.skills){
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}
/**
* Formats and displays all of the information in the projects JSON
*/
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
/**
* Formats and displays all of the information in the education JSON
*/
education.display = function() {
    for (i in education.schools){
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        schoolName = schoolName.replace("#", education.schools[i].url);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(schoolName + schoolDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        var majorsString = "";
        for (j in education.schools[i].majors){
            majorsString = majorsString + education.schools[i].majors[j];
            if (j+1 != education.schools[i].majors.length){
                majorsString = majorsString + ", ";
            }
        }
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majorsString));
    }
    for (i in education.onlineCourses){
        $(".education-entry:last").append(HTMLonlineClasses);
        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        onlineTitle = onlineTitle.replace("#", education.onlineCourses[i].url);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(onlineTitle + onlineSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
    }
}
/**
* Formats and displays all of the information in the work JSON
*/
work.display = function() {
    for (i in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        workEmployer = workEmployer.replace("#", work.jobs[i].url);
        var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(workEmployer + workTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));

    }
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

