var theatre_name = localStorage.getItem('lcl_theatre_name');
var movie_name = localStorage.getItem('lcl_movie_name');
var show_time = localStorage.getItem('lcl_show_time');
var today = localStorage.getItem('lcl_today');
var mm = Number(localStorage.getItem('lcl_mm'));
var dd = Number(localStorage.getItem('lcl_dd'));
var yyyy = Number(localStorage.getItem('lcl_yyyy'));
var status1 = localStorage.getItem('lcl_status');
var ticket1 = localStorage.getItem('lcl_t1');
var ticket2 = localStorage.getItem('lcl_t2');
var ticket3 = localStorage.getItem('lcl_t3');
var ticket4 = localStorage.getItem('lcl_t4');
var ticket5 = localStorage.getItem('lcl_t5');
var amnt = Number(localStorage.getItem('lcl_amnt'));
var ticket = localStorage.getItem('lcl_ticket');

window.onload = function () {
    document.getElementById("movie-name").innerHTML = movie_name;
    document.getElementById("theatre").innerHTML = theatre_name;
    
    if (status1 == "today") {
        document.getElementById("date").innerHTML = today;
    }else if (status1 == "tomorrow") {
        document.getElementById("date").innerHTML = `${dd+1}-${mm}-${yyyy}`;
    }else{
        document.getElementById("date").innerHTML = `${dd+2}-${mm}-${yyyy}`;
    }

    document.getElementById("time").innerHTML = show_time;


    document.getElementById("ticket-info").innerHTML = `${ticket1} ${ticket2} ${ticket3} ${ticket4} ${ticket5} (${ticket})`

    document.getElementById("ticket-price").innerHTML = `Rs. ${amnt}.00`

    document.getElementById("total-amount").innerHTML = `Rs. ${amnt+56}.00`

    document.getElementById("credit-card").style.display = "block";
    document.getElementById("net-banking").style.display = "none";
    document.getElementById("upi-payment").style.display = "none";
};

function hide1(){
    document.getElementById("credit-card").style.display = "block";
    document.getElementById("net-banking").style.display = "none";
    document.getElementById("upi-payment").style.display = "none";
}
function hide2(){
    document.getElementById("net-banking").style.display = "block";
    document.getElementById("credit-card").style.display = "none";
    document.getElementById("upi-payment").style.display = "none";
}
function hide3(){
    document.getElementById("upi-payment").style.display = "block";
    document.getElementById("credit-card").style.display = "none";
    document.getElementById("net-banking").style.display = "none";
}

