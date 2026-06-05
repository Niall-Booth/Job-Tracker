let currentJobTitle;
let currentCompanyName;
let currentStatus;
let currentLocation;
let currentDate;
let currentId;

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
            let id = job["id"];

            let extDiv = $("<div>").addClass("div-styles application-display");
            let subDiv1 = $("<div>").css("width", "70%");
            let subDiv2 = $("<div>");

            let jobTitleHeading = $("<h4>").addClass("Job-Title");
            let companyNameHeading = $("<h4>").addClass("Company-Name");
            let locationHeading = $("<h4>").addClass("Location");

            let statusSpan = $("<span>").addClass("status");
            let strongTag = $("<strong>").addClass("Status-Text");
            let dateHeading = $("<h5>").addClass("Date");
            let selectSpan = $("<span>");

            let idHolder = $("<span>").css("display", "none");
            idHolder.addClass("id");
            idHolder.text(id);

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

            subDiv1.append(jobTitleHeading, companyNameHeading, locationHeading, idHolder);
            statusSpan.append(strongTag);

            subDiv2.append(statusSpan, dateHeading);

            extDiv.append(subDiv1, subDiv2, selectSpan);

            $("#recent-applications").append(extDiv);
        });

        function closeDiv(){
            $("main").css("filter", "blur(0px)");
            $("#new-job").css("display", "none");
        }

        $(".application-display").on("click", function(){
            currentJobTitle = $(this).find(".Job-Title").text();
            currentCompanyName = $(this).find(".Company-Name").text();
            currentStatus = $(this).find(".Status-Text").text();
            currentLocation = $(this).find(".Location").text();
            currentId = $(this).find(".id").text();
            currentDate = $(this).find(".Date").text();

            $("#job-title").val(currentJobTitle);
            $("#company-name").val(currentCompanyName);
            $("#status").val(currentStatus);
            $("#location").val(currentLocation);

            $("main").css("filter", "blur(5px)");
            $("#new-job").css("display", "flex");
        });

        $("#cancel-button").on("click", function(){
            closeDiv();
        });

        $("#delete-button").on("click", function(){
            const objectStore = db
            .transaction(["jobTrackerDB"], "readwrite")
            .objectStore("jobTrackerDB");
            const deleteRequest = objectStore.delete(Number(currentId));

            deleteRequest.onerror = (event) =>{
                console.log("No entry to delete");
            }

            deleteRequest.onsuccess = (event) =>{
                console.log("Entry sucessfully deleted");
            }

            closeDiv();
        });

        $("#submit-button").on("click", function(){
            currentJobTitle =  $("#job-title").val();
            currentCompanyName = $("#company-name").val();
            currentStatus = $("#status").val();
            currentLocation = $("#location").val();

            const objectStore = db
            .transaction(["jobTrackerDB"], "readwrite")
            .objectStore("jobTrackerDB");
            const request = objectStore.get(Number(currentId));
            
            request.onerror = (event) => {
                console.log("Unable to find entry");
            }

            request.onsuccess = (event) => {
                const retrievedData = event.target.result;
                retrievedData["job-title"] = currentJobTitle;
                retrievedData["company-name"] = currentCompanyName;
                retrievedData["status"] = currentStatus;
                retrievedData["location"] = currentLocation;

                const requestUpdate = objectStore.put(retrievedData);
                requestUpdate.onerror = (event) =>{
                    console.log("Error updating entry");
                }

                requestUpdate.onsuccess = (event) =>{
                    console.log("Successfully updated entry");
                }
            }
        });
    };

    getRequest.onerror = (event) => {
        console.log("Error reading database");
    };
};