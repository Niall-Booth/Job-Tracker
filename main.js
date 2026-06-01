const request = indexedDB.open("jobTracker", 1);

request.onupgradeneeded = function(event){
    const db = event.target.result;
    const store = db.createObjectStore("jobs", {
        keyPath: "id"
    })

    store.put({
        id: "job_001",
        jobTitle: "Office Administrator",
        company: "MMP Fire & Security",
        status: "applied",
        date: "Wed May 6 2026"
    })
}

