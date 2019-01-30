function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time-display').innerHTML = h + " : " + m + " : " + s;
    t = setTimeout(function () {
        startTime()
    }, 500);

    function showImage() {
        var image = document.getElementById("sun-moon");
        var desc = document.getElementById("descriptor");
        var editBody = document.getElementById("body");
        var editMain = document.getElementById("main");

        if (h >= 6 && h <= 11) {
            image.src = "assets/image/morning_sun.png"
            editBody.className = "morning-body";
            editMain.className = "morning-main";
            desc.innerHTML = "Good Morning!"
        } else if (h >= 12 && h <= 17) {
            image.src = "assets/image/afternoon_sun.png"
            editBody.className = "afternoon-body";
            editMain.className = "afternoon-main";
            desc.innerHTML = "Good Afternoon!"
        } else if (h >= 18 && h <= 23) {
            image.src = "assets/image/night_moon.png"
            editBody.className = "evening-body";
            editMain.className = "evening-main";
            desc.innerHTML = "Good Evening!"
        } else if (h >= 0 && h <= 5) {
            image.src = "assets/image/early_moon.png"
            editBody.className = "night-body";
            editMain.className = "night-main";
            desc.innerHTML = "Good Night!"
        } else {
            image.src = "assets/image/static.png"
            editBody.className = "static-body";
            editMain.className = "static-main";
            desc.innerHTML = "Someting went wrong!"
        }
    }
    showImage();
}

startTime();
