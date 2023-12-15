function updateTime(){
    var dateTime = new Date();
    var hr = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sc = dateTime.getSeconds();

    var am_pm = document.getElementById("am-pm");

    if(hr >= 12){
        am_pm.innerHTML = "PM";
    }else{
        am_pm.innerHTML = "AM";
    }

    if(hr > 12){
        hr = hr - 12;
    }

    document.getElementById("hr").innerHTML = hr;
    document.getElementById("mins").innerHTML = min;
    document.getElementById("secs").innerHTML = sc;
}

setInterval(updateTime, 1000);