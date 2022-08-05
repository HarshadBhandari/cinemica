let CheckValue = 0;
let CheckStatus;
let amt = 0;
let id;
let temp_ticket_numb = "";
let ticket_numb1 = "";
let ticket_numb2 = "";
let ticket_numb3 = "";
let ticket_numb4 = "";
let ticket_numb5 = "";
let disable_count = 0;
let count = 0;
let temp_ticket;

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

function retrieve_id(ele) {
    id = ele.id;
    CheckStatus = document.getElementById(id);
    numb_of_ticket();
    if (ele.id == "checkbox10b" ||
        ele.id == "checkbox11b" ||
        ele.id == "checkbox12b" ||

        ele.id == "checkbox10c" ||
        ele.id == "checkbox11c" ||
        ele.id == "checkbox12c" ||

        ele.id == "checkbox10d" ||
        ele.id == "checkbox11d" ||
        ele.id == "checkbox12d" ||

        ele.id == "checkbox10e" ||
        ele.id == "checkbox11e" ||
        ele.id == "checkbox12e" ||

        ele.id == "checkbox10f" ||
        ele.id == "checkbox11f" ||
        ele.id == "checkbox12f" ||

        ele.id == "checkbox10g" ||
        ele.id == "checkbox11g" ||
        ele.id == "checkbox12g" ||

        ele.id == "checkbox10h" ||
        ele.id == "checkbox11h" ||
        ele.id == "checkbox12h" ||

        ele.id == "checkbox10i" ||
        ele.id == "checkbox11i" ||
        ele.id == "checkbox12i" ||

        ele.id == "checkbox10j" ||
        ele.id == "checkbox11j" ||
        ele.id == "checkbox12j" ||

        ele.id == "checkbox10k" ||
        ele.id == "checkbox11k" ||
        ele.id == "checkbox12k") {
        for (i = 4; i <= 6; i++) {
            temp_ticket_numb += String(document.getElementById(id).value)[i];
        }
    } else {
        for (i = 4; i <= 5; i++) {
            temp_ticket_numb += String(document.getElementById(id).value)[i];
        }
    }

    count +=1;
    if(count==1){
        ticket_numb1=temp_ticket_numb;
        temp_ticket_numb = ""
    }
    if(count==2){
        ticket_numb2=temp_ticket_numb;
        temp_ticket_numb = ""
    }
    if(count==3){
        ticket_numb3=temp_ticket_numb;
        temp_ticket_numb = ""
    }
    if(count==4){
        ticket_numb4=temp_ticket_numb;
        temp_ticket_numb = ""
    }
    if(count==5){
        ticket_numb5=temp_ticket_numb;
        temp_ticket_numb = ""
    }
    
    
    temp_ticket = document.getElementById("no-of-ticket").innerHTML

};


window.onload = function () {

    document.getElementById("movie-Name").innerHTML = movie_name;

    document.getElementById("show-time").innerHTML = show_time
    if (status1 == "today") {
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | Today, ${today}`;
    } else if (status1 == "tomorrow") {
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | Tomorrow, ${dd + 1}-${mm}-${yyyy}`;
    } else if (status1 == "next") {
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | ${dd + 2}-${mm}-${yyyy}`;
    }
    else {
        document.getElementById("theatre-Name").innerHTML = theatre_name + ` | Today, ${today} ok`;
    }
    

};


function numb_of_ticket() {
    if (CheckStatus.checked) {
        CheckValue += 1;
        document.getElementById("selected-tickets").innerHTML = CheckValue;
        pay_inc();
    } else {
        CheckValue -= 1;
        document.getElementById("selected-tickets").innerHTML = CheckValue;
        pay_dec();
    }
};

function pay_inc() {
    var amt_str = document.getElementById(id).value;
    amt += parseInt(amt_str)
    document.getElementById("total-pay").innerHTML = amt;
};

function pay_dec() {
    var amt_str = document.getElementById(id).value;
    amt -= parseInt(amt_str)
    document.getElementById("total-pay").innerHTML = amt;
};

function send(){
    localStorage.setItem('lcl_t1', ticket_numb1);
    localStorage.setItem('lcl_t2', ticket_numb2);
    localStorage.setItem('lcl_t3', ticket_numb3);
    localStorage.setItem('lcl_t4', ticket_numb4);
    localStorage.setItem('lcl_t5', ticket_numb5);
    
    var temp_amnt = document.getElementById("total-pay").innerHTML
    localStorage.setItem('lcl_amnt', temp_amnt);
    
    localStorage.setItem('lcl_ticket', temp_ticket);
    
}
