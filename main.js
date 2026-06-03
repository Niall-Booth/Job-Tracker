import { createPieChart } from "./pie-chart.js";

const jobData = [
    {
        
        "job-title" : "IT Technician",
        "company-name" : "Recycle IT",
        "status" : "Rejected",
        "date": "Wed Jan 07 2026",
        "location": "Burnley"
    },
    {
        
        "job-title" : "IT Hardware Technician - Consumer",
        "company-name" : "1st Technologies Ltd",
        "status" : "Rejected",
        "date": "Tue Jan 13 2026",
        "location": "Preston"
    },
    {
        
        "job-title" : "IT Hardware Technician - Enterprise",
        "company-name" : "1st Technologies Ltd",
        "status" : "Rejected",
        "date": "Tue Jan 27 2026",
        "location": "Preston"
    },
    {
        
        "job-title" : "IT Technician",
        "company-name" : "The GIGA Group",
        "status" : "Rejected",
        "date": "Tue Jan 27 2026",
        "location": "Manchester"
    },
    {
        
        "job-title" : "IT & Office Support Assistant",
        "company-name" : "Uniroute UK LTD",
        "status" : "Applied",
        "date": "Fri Jan 30 2026",
        "location": "Bury"
    },
    {
        
        "job-title" : "Office Administrator",
        "company-name" : "Pickup Systems Ltd",
        "status" : "Rejected",
        "date": "Fri Jan 30 2026",
        "location": "Burnley"
    },
    {
        
        "job-title" : "Administration Assistant",
        "company-name" : "Healthcare Recruiters Ltd",
        "status" : "Applied",
        "date": "Mon Feb 02 2026",
        "location": "Preston"
    },
    {
        
        "job-title" : "Call Centre Operator/ Administrator",
        "company-name" : "E&S Services (DAR) Limited",
        "status" : "Rejected",
        "date": "Tue Feb 10 2026",
        "location": "Rossendale"
    },
    {
        
        "job-title" : "Office Junior/Administrator",
        "company-name" : "Manchester Electrical",
        "status" : "Rejected",
        "date": "Tue Feb 10 2026",
        "location": "Manchester"
    },
    {
        
        "job-title" : "Client care Administrator",
        "company-name" : "Ecotect Engineering Limited",
        "status" : "Rejected",
        "date": "Sat Feb 14 2026",
        "location": "Rossendale"
    },
    {
        
        "job-title" : "Admin Clerk",
        "company-name" : "AHS (Site Services) Ltd",
        "status" : "Rejected",
        "date": "Sun Feb 15 2026",
        "location": "Rossendale"
    },
    {
        
        "job-title" : "Office Administrator",
        "company-name" : "SJF Electrics Ltd",
        "status" : "Rejected",
        "date": "Sun Feb 15 2026",
        "location": "Darwen"
    },
    {
        
        "job-title" : "Junior Developer",
        "company-name" : "SoloProtect Ltd",
        "status" : "Rejected",
        "date": "Mon Feb 16 2026",
        "location": "Sheffield"
    },
    {
        
        "job-title" : "Warehouse Administrator",
        "company-name" : "Giavani Bathrooms",
        "status" : "Applied",
        "date": "Wed Feb 18 2026",
        "location": "Colne"
    },
    {
        
        "job-title" : "Administration Assistant",
        "company-name" : "WarrantyWise Ltd",
        "status" : "Rejected",
        "date": "Tue Feb 24 2026",
        "location": "Blackburn"
    },
    {
        
        "job-title" : "Temp Sales Administrator",
        "company-name" : "XLCR Group",
        "status" : "Rejected",
        "date": "Thur Feb 26 2026",
        "location": "Colne"
    },
    {
        
        "job-title" : "Office Administrator",
        "company-name" : "Aintree Medical",
        "status" : "Applied",
        "date": "Fri Feb 27 2026",
        "location": "Blackburn"
    },
    {
        
        "job-title" : "Office Administrator",
        "company-name" : "UK Restoration Services",
        "status" : "Applied",
        "date": "Tue Mar 03 2026",
        "location": "Burnley"
    },
    {
        
        "job-title" : "Trainee Technologies Advisor",
        "company-name" : "fufilmentcrowd Limited",
        "status" : "Rejected",
        "date": "Tue April 03 2026",
        "location": "Buckshaw Village"
    },
    {
        
        "job-title" : "Data Entry Administrator",
        "company-name" : "Ben Rose Estate Agents",
        "status" : "Applied",
        "date": "Thu Apr 16 2026",
        "location": "Chorley"
    },
    {
        
        "job-title" : "Trainee Office Administrator",
        "company-name" : "Ramsey Timber Ltd",
        "status" : "Applied",
        "date": "Thu Apr 16 2026",
        "location": "Wigan"
    },
    {
        
        "job-title" : "Sales Administrator",
        "company-name" : "XLCR Vehicle Management Ltd",
        "status" : "Rejected",
        "date": "Thu Apr 16 2026",
        "location": "Colne"
    },
    {
        
        "job-title" : "Sales Administration",
        "company-name" : "Contact Solar Ltd/ EDF solar",
        "status" : "Applied",
        "date": "Thu Apr 16 2026",
        "location": "Chorley"
    },
    {
        
        "job-title" : "Sales Administrator",
        "company-name" : "Orisec Ltd",
        "status" : "Applied",
        "date": "Wed May 06 2026",
        "location": "Rossendale"
    },
    {
        
        "job-title" : "Office Administrator",
        "company-name" : "Monks Contractors Ltd",
        "status" : "Applied",
        "date": "Wed May 06 2026",
        "location": "Blackburn"
    },
    {
        
        "job-title" : "Administrator",
        "company-name" : "Construction Sites Web",
        "status" : "Applied",
        "date": "Wed May 06 2026",
        "location": "Burnley"
    },
    {
        
        "job-title" : "Office Administrator/ Customer Service",
        "company-name" : "WSR Medical Solutions Limited",
        "status" : "Applied",
        "date": "Wed May 06 2026",
        "location": "Rossendale"
    },
    {
        
        "job-title" : "Office Administrator",
        "company-name" : "MMP Fire and Security Ltd",
        "status" : "Rejected",
        "date": "Wed May 06 2026",
        "location": "Blackburn"
    },
    {
        
        "job-title" : "Customer Support Coordinator",
        "company-name" : "Energy Assets",
        "status" : "Applied",
        "date": "Thu May 14 2026",
        "location": "Darwen"
    },
    {
        
        "job-title" : "Ecommerce Supply Assistant",
        "company-name" : "Coachhouse",
        "status" : "Rejected",
        "date": "Thu May 14 2026",
        "location": "Clayton le Moors"
    },
    {
        
        "job-title" : "Administrative Assistant",
        "company-name" : "EG Group",
        "status" : "Applied",
        "date": "Wed May 20 2026",
        "location": "Blackburn"
    },
    {
        
        "job-title" : "Sales Administrator",
        "company-name" : "UK Shutters and Doors Ltd",
        "status" : "Rejected",
        "date": "Wed May 20 2026",
        "location": "Burnley"
    },
    {
        
        "job-title" : "eCommerce Sales Assistant",
        "company-name" : "Balmers GM Ltd",
        "status" : "Rejected",
        "date": "Fri May 22 2026",
        "location": "Burnley"
    },
    {
        
        "job-title" : "Repairs Administrator",
        "company-name" : "Hamilton Woods",
        "status" : "Applied",
        "date": "Tue May 26 2026",
        "location": "Burnley"
    },
    {
        
        "job-title" : "Administrator",
        "company-name" : "Finlay Jude Associates Ltd",
        "status" : "Applied",
        "date": "Tue May 26 2026",
        "location": "Rossendale"
    },
    {
        
        "job-title" : "No-code Developer",
        "company-name" : "UniqueX & Real Big Group",
        "status" : "Applied",
        "date": "Wed May 27 2026",
        "location": "Burnley"
    }
]

function GetJobStats(jobDB){
    let applied = 0;
    let interview = 0;
    let offer = 0;
    let rejected = 0;
    jobDB.forEach(job => {
        switch(job.status){
            case "Applied":
                applied = applied + 1;
                break;
            case "Interview":
                interview = interview + 1;
                break;
            case "Offer":
                offer = offer + 1;
                break;
            case "Rejected":
                rejected = rejected + 1;
                break;
        }
    });
    $("#applied-stat").text(applied);
    $("#interview-stat").text(interview);
    $("#offer-stat").text(offer);
    $("#rejected-stat").text(rejected);
    $("#pie-chart-div h2").text(applied+interview+offer+rejected);
    createPieChart([applied, interview, offer, rejected]);
}

const request = window.indexedDB.open("jobTrackerDB",1);

request.onupgradeneeded = (event) =>{
    const readDB = event.target.result;
    const objectStore = readDB.createObjectStore("jobTrackerDB", {keyPath: "id", autoIncrement:true});
    objectStore.createIndex("id", "id", {unique: true});
    objectStore.transaction.oncomplete = (event) =>{
        const jobObjectStore = readDB
        .transaction("jobTrackerDB", "readwrite")
        .objectStore("jobTrackerDB");
        jobData.forEach((job) => {
            jobObjectStore.add(job)
        });
    };
};

request.onerror = (event) =>{
    console.log(`Error connecting to database! Error code: ${event.target.error?.message}`);
}
request.onsuccess = (event) =>{
    console.log("Success");
    let db = event.target.result;

    const transaction = db.transaction("jobTrackerDB", "readonly");
    const store = transaction.objectStore("jobTrackerDB");

    const getRequest = store.getAll();

    getRequest.onsuccess = (event) =>{
        const jobs = getRequest.result;
        GetJobStats(jobs)
        for(let x = jobs.length - 1; x > jobs.length - 4; x--){
            let title = jobs[x]["job-title"];
            let company = jobs[x]["company-name"];
            let status = jobs[x]["status"];
            let date = jobs[x]["date"]
            let location = jobs[x]["location"];

            let extDiv = $("<div>").addClass("div-styles application-display");
            let subDiv1 = $("<div>").css("width", "70%")
            let subdDiv2 = $("<div>")
            let jobTitleHeading = $("<h4>")
            let companyNameHeading = $("<h4>")
            let locationheading = $("<h4>")
            let statusSpan = $("<span>").addClass("status")
            let strongTag = $("<strong>");
            let dateHeading = $("<h5>")
            let selectSpan = $("<span>");

            if(status === "Applied"){
                statusSpan.css("background-color", "#388DF8");
            }
            else if(status === "Interviewing"){
                statusSpan.css("background-color", "#FBBF24");
            }
            else if(status === "Offer"){
                statusSpan.css("background-color", "#4ADE80")
            }
            else if(status === "Rejected"){
                statusSpan.css("background-color", "#F87171");
            }

            jobTitleHeading.text(title);
            companyNameHeading.text(company);
            strongTag.text(status);
            dateHeading.text(date);
            selectSpan.text("❯");
            locationheading.text(location);

            subDiv1.append(jobTitleHeading);
            subDiv1.append(companyNameHeading);
            subDiv1.append(locationheading);
            statusSpan.append(strongTag);
            subdDiv2.append(statusSpan);
            subdDiv2.append(dateHeading);
            extDiv.append(subDiv1);
            extDiv.append(subdDiv2);
            extDiv.append(selectSpan);

            $("#recent-applications").append(extDiv);
        }
    }

    getRequest.onerror = (event) =>{
        console.log("Error reading database");   
    }
}

