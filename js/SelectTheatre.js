let temp_status;
let temp_status1;
let temp_status2;

function seat(cls) {
    let t1 = document.getElementById(cls.className).innerHTML
    let t2 = document.getElementById(cls.id).innerHTML
    let t3 = document.getElementById("movie-name").innerHTML

    localStorage.setItem('lcl_theatre_name', t1);
    localStorage.setItem('lcl_show_time', t2);
    localStorage.setItem('lcl_movie_name', t3);
};

window.onload = function () {
    document.getElementById("date1").style.backgroundColor = "#2D7CFF";
    document.getElementById("date1").style.color = "White";


    temp_status = "today";
    localStorage.setItem('lcl_status', temp_status);

    let temp_today = new Date();
    let temp_dd0 = String(temp_today.getDate()).padStart(2, '0');
    let temp_mm0 = String(temp_today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let temp_yyyy0 = temp_today.getFullYear();

    temp_dd = Number(temp_dd0);
    temp_mm = Number(temp_mm0);
    temp_yyyy = Number(temp_yyyy0);

    temp_today = temp_dd + '-' + temp_mm + '-' + temp_yyyy;

    localStorage.setItem('lcl_today', temp_today);
    localStorage.setItem('lcl_dd', temp_dd);
    localStorage.setItem('lcl_mm', temp_mm);
    localStorage.setItem('lcl_yyyy', temp_yyyy);

    if (temp_mm == 1) {
        document.getElementById("d1").innerHTML = `${temp_dd} Jan`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Jan`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Jan`;
    } else if (temp_mm == 2) {
        document.getElementById("d1").innerHTML = `${temp_dd} Feb`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Feb`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Feb`;
    } else if (temp_mm == 3) {
        document.getElementById("d1").innerHTML = `${temp_dd} March`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} March`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} March`;
    } else if (temp_mm == 4) {
        document.getElementById("d1").innerHTML = `${temp_dd} Apr`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Apr`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Apr`;
    } else if (temp_mm == 5) {
        document.getElementById("d1").innerHTML = `${temp_dd} May`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} May`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} May`;
    } else if (temp_mm == 6) {
        document.getElementById("d1").innerHTML = `${temp_dd} Jun`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Jun`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Jun`;
    } else if (temp_mm == 7) {
        document.getElementById("d1").innerHTML = `${temp_dd} July`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} July`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} July`;
    } else if (temp_mm == 8) {
        document.getElementById("d1").innerHTML = `${temp_dd} Aug`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Aug`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Aug`;
    } else if (temp_mm == 9) {
        document.getElementById("d1").innerHTML = `${temp_dd} Sept`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Sept`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Sept`;
    } else if (temp_mm == 10) {
        document.getElementById("d1").innerHTML = `${temp_dd} Oct`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Oct`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Oct`;
    } else if (temp_mm == 11) {
        document.getElementById("d1").innerHTML = `${temp_dd} Nov`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Nov`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Nov`;
    } else if (temp_mm == 12) {
        document.getElementById("d1").innerHTML = `${temp_dd} Dec`;
        document.getElementById("d2").innerHTML = `${temp_dd + 1} Dec`;
        document.getElementById("d3").innerHTML = `${temp_dd + 2} Dec`;
    } else {
        document.getElementById("d1").innerHTML = `Tod`;
        document.getElementById("d2").innerHTML = `Tom`;
        document.getElementById("d3").innerHTML = `Next`;
    }

    // let hide_tomorrow = document.getElementsByClassName("hide-tomorrow");
    // for(i=0; i<hide_tomorrow.length;i++)
    // {
    //     hide_tomorrow[i].style.visibility = "hidden";
    // }

    // let hide_next = document.getElementsByClassName("hide-next");
    // for(i=0; i<hide_next.length;i++)
    // {
    //     hide_next[i].style.visibility = "hidden";
    // }

    let hide_today = document.getElementsByClassName("hide-today");
    for (i = 0; i < hide_today.length; i++) {
        hide_today[i].style.visibility = "hidden";
    }

};

function change_tom() {
    document.getElementById("date1").style.backgroundColor = "#ffffff9a";
    document.getElementById("date1").style.color = "Black";

    let hide_today = document.getElementsByClassName("hide-today");
    for (i = 0; i < hide_today.length; i++) {
        hide_today[i].style.visibility = "visible";
    }

    let hide_next = document.getElementsByClassName("hide-next");
    for (i = 0; i < hide_next.length; i++) {
        hide_next[i].style.visibility = "visible";
    }

    let hide_tomorrow = document.getElementsByClassName("hide-tomorrow");
    for (i = 0; i < hide_tomorrow.length; i++) {
        hide_tomorrow[i].style.visibility = "hidden";
    }


    temp_status = "tomorrow";
    localStorage.setItem('lcl_status', temp_status);
};

function change_next() {
    document.getElementById("date1").style.backgroundColor = "#ffffff9a";
    document.getElementById("date1").style.color = "Black";

    let hide_today = document.getElementsByClassName("hide-today");
    for (i = 0; i < hide_today.length; i++) {
        hide_today[i].style.visibility = "visible";
    }

    let hide_tomorrow = document.getElementsByClassName("hide-tomorrow");
    for (i = 0; i < hide_tomorrow.length; i++) {
        hide_tomorrow[i].style.visibility = "visible";
    }

    let hide_next = document.getElementsByClassName("hide-next");
    for (i = 0; i < hide_next.length; i++) {
        hide_next[i].style.visibility = "hidden";
    }
    

    temp_status = "next";
    localStorage.setItem('lcl_status', temp_status);
};

function change_self() {
    document.getElementById("date1").style.backgroundColor = "#2D7CFF";
    document.getElementById("date1").style.color = "White";

    let hide_tomorrow = document.getElementsByClassName("hide-tomorrow");
    for (i = 0; i < hide_tomorrow.length; i++) {
        hide_tomorrow[i].style.visibility = "visible";
    }

    let hide_next = document.getElementsByClassName("hide-next");
    for (i = 0; i < hide_next.length; i++) {
        hide_next[i].style.visibility = "visible";
    }

    let hide_today = document.getElementsByClassName("hide-today");
    for (i = 0; i < hide_today.length; i++) {
        hide_today[i].style.visibility = "hidden";
    }

    temp_status = "today";
    localStorage.setItem('lcl_status', temp_status);
};