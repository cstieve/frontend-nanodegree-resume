var bio = {
    "name": "Chad Stieve",
    "role": "Lead Developer",
    "contacts": {
        "mobile": "555-555-4444",
        "email": "cstieve@hotmail.com",
        "github": "cstieve",
        "twitter": null,
        "blog": null,
        "location": "Livonia, MI"
    },
    "welcomeMessage": "Thanks for visiting my resume!",
    "skills": [
        "Java",
        "Spring(WebMVC, Batch, Mobile)",
        "GWT",
        "JavaScript",
        "HTML",
        "CSS",
        "jQuery",
        "BackboneJS",
        "UnderscoreJS",
        "RequireJS"
    ],
    "biopic": "images/fry.jpg",
    display: function()
    {
		/* Name and Role */
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").prepend(formattedBiopic);


		/* Skills  and Welcome Msg*/
		var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);

		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}

		/* Contact Info */
		var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts, #footerContacts").append(formattedContactMobile);

		var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts, #footerContacts").append(formattedContactEmail);

		if(bio.contacts.twitter){
			var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#topContacts, #footerContacts").append(formattedContactTwitter);
		}

		var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts, #footerContacts").append(formattedContactGithub);

		if(bio.contacts.blog){
			var formattedContactBlog = HTMLblog.replace("%data%", bio.contacts.blog);
			$("#topContacts, #footerContacts").append(formattedContactBlog);
		}

		var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts, #footerContacts").append(formattedContactLocation);
    }
};

var work = {
    "jobs": [
        {
            "employer": "GE",
            "title": "Lead Developer",
            "location": "Van Buren Township, MI",
            "dates": "February 2014 - Current",
            "description": "Crazy fantastic Lead Developer on a super big customer facing self-service web application and a payment gateway web application."
        },
        {
            "employer": "GE",
            "title": "Software Developer",
            "location": "Van Buren Township, MI",
            "dates": "September 2012 - February 2014",
            "description": "Super cool full-stack web application developer on a payment gateway web application and a customer self-service web application."
        },
        {
            "employer": "MediaSpan",
            "title": "Software Developer",
            "location": "Ann Arbor, MI",
            "dates": "2008 - September 2012",
            "description": "Full-stack web application developer working on account receivables/advertising software."
        },
        {
            "employer": "MediaSpan",
            "title": "Customer Support",
            "location": "Ann Arbor, MI",
            "dates": "2004 - September 2008",
            "description": "Provide technical support for account receivables/advertising software."
        }
    ],
    display: function()
	{
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			
			var workContent = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			workContent = workContent + HTMLworkTitle.replace("%data%", work.jobs[job].title);
			workContent = workContent + HTMLworkDates.replace("%data%", work.jobs[job].dates);
			workContent = workContent + HTMLworkLocation.replace("%data%", work.jobs[job].location);
			workContent = workContent + HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(workContent);
		}
	}
};

var education = {
    "schools": [
        {
            "name": "Walsh College",
            "location": "Troy, MI",
            "degree": "Masters",
            "majors": [
                "MBA-Finance"
            ],
            "dates": 2008,
            "url": "http://www.walshcollege.edu"
        },
        {
            "name": "Western Michigan University",
            "location": "Kalamazoo, MI",
            "degree": "Bachelors",
            "majors": [
                "Computer Information Systems"
            ],
            "dates": 2004,
            "url": "http://www.wmu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nano-Degree",
            "school": "Udacity",
            "date": 2015,
            "url": "http://www.udacity.com"
        }
    ],
    display: function()
    {
		for(school in this.schools){
			$("#education").append(HTMLschoolStart);
			
			var educationContent = HTMLschoolName.replace("%data%", this.schools[school].name);
			educationContent = educationContent + HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			educationContent = educationContent + HTMLschoolDates.replace("%data%", this.schools[school].dates);
			educationContent = educationContent + HTMLschoolLocation.replace("%data%", this.schools[school].location);
			for(major in this.schools[school].majors){
				educationContent = educationContent + HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
			}
			$(".education-entry:last").append(educationContent);
		}

		$("#education").append(HTMLonlineClasses);
		for(course in this.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var courseContent = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
			courseContent = courseContent + HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
			courseContent = courseContent + HTMLonlineDates.replace("%data%", this.onlineCourses[course].date);
			courseContent = courseContent + HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
			$(".education-entry:last").append(courseContent);
		}
    }
};

var projects = {
	"projects": [
		{
			"title": "My Fantastic Project",
			"dates": "2014-2015",
			"description": "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.",
			"images": ["http://www.fillmurray.com/g/197/148"]
		},
		{
			"title": "My Other Fantastic Project",
			"dates": "2015-2016",
			"description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary stuff.",
			"images": ["http://www.placebear.com/g/197/148", "http://www.placecage.com/g/197/148"]
		}
	],
	display: function()
	{
		for(project in this.projects){
			$("#projects").append(HTMLprojectStart);
			
			var projectContent = HTMLprojectTitle.replace("%data%", this.projects[project].title);
			projectContent = projectContent + HTMLprojectDates.replace("%data%", this.projects[project].dates);
			projectContent = projectContent + HTMLprojectDescription.replace("%data%", this.projects[project].description);
			for(image in this.projects[project].images){
				projectContent = projectContent + HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
			}
			$(".project-entry:last").append(projectContent);
		}
	}
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
