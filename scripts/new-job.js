function closeDiv(){
    $("main").css("filter", "blur(0px)");
    $("#new-job").css("display", "none");
}

$("#add-button").on("click", function(){
    $("main").css("filter", "blur(5px)");
    $("#new-job").css("display", "flex")
});

$("#submit-button").on("click", function(){
    const jotTitle = $("#job-title").val();
    const companyName = $("#company-name").val();
    const status = $("#status").val();
    const location = $("#location").val();

    if (jotTitle === '' || companyName === '' || status === '' || location === ''){return}

    const request = window.indexedDB.open("jobTrackerDB",1);

    request.onerror = (event) =>{
        console.log(`Error connecting to database! Error code: ${event.target.error?.message}`);
    }

    request.onsuccess = (event) =>{
        console.log("Success");
        let db = event.target.result;

        const transaction = db.transaction("jobTrackerDB", "readwrite");

        transaction.oncomplete = (event)=> {
            console.log("Complete");
        }

        transaction.onerror = (event)=> {
            console.log("Error writing to db");
        }

        const date = new Date().toDateString();

        const data = {
            "job-title" : jotTitle,
            "company-name" : companyName,
            "status" : status,
            "date" : date,
            "location" : location
        }

        const objectStore = transaction.objectStore("jobTrackerDB");
        const request = objectStore.add(data);
        request.onsuccess = (event)=> {
            console.log("job sucessfully added");
        }
    }
});

$("#cancel-button").on("click", function(){
    closeDiv();
});