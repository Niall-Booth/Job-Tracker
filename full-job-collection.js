const request = window.indexedDB.open("jobTrackerDB", 1);

request.onerror = (event) => {
    console.log(`Error connecting to database! Error code: ${event.target.error?.message}`);
};

request.onsuccess = (event) => {
    console.log("Success");

    let db = event.target.result;

    const transaction = db.transaction("jobTrackerDB", "readonly");
    const store = transaction.objectStore("jobTrackerDB");

    const getRequest = store.getAll();

    getRequest.onsuccess = (event) => {
        const jobs = event.target.result;

        jobs.reverse().forEach(job => {
            let title = job["job-title"];
            let company = job["company-name"];
            let status = job["status"];
            let date = job["date"];
            let location = job["location"];

            let extDiv = $("<div>").addClass("div-styles application-display");
            let subDiv1 = $("<div>").css("width", "70%");
            let subDiv2 = $("<div>");

            let jobTitleHeading = $("<h4>");
            let companyNameHeading = $("<h4>");
            let locationHeading = $("<h4>");

            let statusSpan = $("<span>").addClass("status");
            let strongTag = $("<strong>");
            let dateHeading = $("<h5>");
            let selectSpan = $("<span>");

            if (status === "Applied") {
                statusSpan.css("background-color", "#388DF8");
            } else if (status === "Interviewing") {
                statusSpan.css("background-color", "#FBBF24");
            } else if (status === "Offer") {
                statusSpan.css("background-color", "#4ADE80");
            } else if (status === "Rejected") {
                statusSpan.css("background-color", "#F87171");
            }

            jobTitleHeading.text(title);
            companyNameHeading.text(company);
            locationHeading.text(location);
            strongTag.text(status);
            dateHeading.text(date);
            selectSpan.text("❯");

            subDiv1.append(jobTitleHeading, companyNameHeading);
            statusSpan.append(strongTag);

            subDiv2.append(statusSpan, dateHeading);

            extDiv.append(subDiv1, subDiv2, selectSpan);

            $("#recent-applications").append(extDiv);
        });
    };

    getRequest.onerror = (event) => {
        console.log("Error reading database");
    };
};