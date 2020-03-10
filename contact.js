//create an alert IF there are empty fields
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } 

    else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    //create console log to print form results
    //console.log ('form') ;//
    }
    //Function To Display Popup
    function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }