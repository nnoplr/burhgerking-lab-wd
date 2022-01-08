var qty = document.getElementById("qty");
qty.on
function validate(){

    var errorMsg = document.getElementsByClassName('errorMsg');
    for (i = 0; i < errorMsg.length; i++) {
        errorMsg[i].innerHTML = "";
    }

    var inputTag = document.getElementsByTagName('input');
    for (i = 0; i < inputTag.length; i++) {
        inputTag[i].classList.remove("errorInput");
    }
    document.getElementById('selectedBurger').classList.remove("errorInput");

    var x = document.getElementById("name");
    if(x.value == "" || x.value == null){
        // alert( "Please provide your name!" )
        document.getElementById('errorName').innerHTML = "Please input your name";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }
    else if(x.value.length < 3 || x.value.length > 25){
        // alert( "Please provide your name!" )
        document.getElementById('errorName').innerHTML = "Please input 3 to 25 characters";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }

    x = document.getElementById("email");
    if(x.value == "" || x.value == null){
        // alert( "Please provide your emai!" )
        document.getElementById('errorEmail').innerHTML = "Please input your email";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }
    else{
        var at = x.value.indexOf("@");
        var lastAt = x.value.indexOf("@");
        var dot = x.value.indexOf(".");
        var lastDot = x.value.lastIndexOf(".");
        console.log(at + ", "+ dot);
         
         if (at < 1 || dot - at < 2 || lastDot==x.value.length-1 || at!=lastAt) {
            document.getElementById('errorEmail').innerHTML = "Please input valid email";
            x.classList.add("errorInput");
            x.focus();
            return false;
         }
    }

    x = document.getElementById("selectedBurger");
     if(x.value == ""){
        // alert( "Please provide your order!" )
        document.getElementById('errorOrder').innerHTML = "Please choose your order";
        document.getElementById('selectedBurger').classList.add("errorInput");
        x.focus();
        return false;
    }

    x = document.getElementById("qty");
    if(x.value == "" || x.value == null){
        // alert( "Quantity available between 1 to 10" )
        document.getElementById('errorQty').innerHTML = "Please input the quantity";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }
    else if(x.value < 1 || x.value > 10){
        // alert( "Quantity available between 1 to 10" )
        document.getElementById('errorQty').innerHTML = "Please input quantity between 1 to 10";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }

    x = document.getElementById("address");
    if(x.value == "" || x.value == null){
        // alert( "Please provide your emai!" )
        document.getElementById('errorAddress').innerHTML = "Please input your address";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }
    else if(x.value.length < 3 || x.value.length > 50){
        // alert( "Please provide your name!" )
        document.getElementById('errorName').innerHTML = "Please input 3 to 50 characters";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }

    x = document.getElementById("agreement");
    if(!x.checked){
        // alert( "Please check the checkbox!" )
        document.getElementById('errorAgreement').innerHTML = "Please check the checkbox";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }

    // Muncul notifikasi kalau sudah sumbit form
    alert("Order proceed");
    return true;

}