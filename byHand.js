var JobObj_s = document.getElementsByClassName("info-container");

var text = "";

for (i = 0; i < JobObj_s.length; i++) {
    var JobReqr = JobObj_s[i].getElementsByClassName("pl-2");

    // Filter selection (changable)
    if (JobReqr[0].textContent == "經歷不拘" || JobReqr[0].textContent == "1年以上") {
        JobOK = JobObj_s[i].getElementsByClassName("info-job");

        JobName = JobObj_s[i].getElementsByClassName("info-name");
        JobURL = JobObj_s[i].getElementsByClassName("info-job");
        text += JobName[0].textContent + ",";
        text += "https:" + JobURL[0].getAttribute("href") + "\n";

    }
}

copy(text);