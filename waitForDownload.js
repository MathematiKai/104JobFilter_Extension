var JobObj_s = document.getElementsByClassName("info-container");

var text = "";
var filename = document.getElementsByTagName("h1");
filename = filename[0].textContent + ".csv";

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

/*
urlMain = window.location.href;
urlMain = urlMain.substring(0, urlMain.lastIndexOf('/'));
//*/


var Pages = document.getElementsByClassName("paging__link");

var nxtPage = Pages[Pages.length - 1];

nxtPage.addEventListener('click', function (event) {
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
});

var getText = setInterval(() => {

    var preLocation = window.location.href.toString();
    nxtPage.click();
    setTimeout(() => {
        var nxtLocation = window.location.href.toString();
        if (preLocation == nxtLocation) {
            clearInterval(getText);
            download(filename, text);
        }
    }, 1500);

}, 3000);

