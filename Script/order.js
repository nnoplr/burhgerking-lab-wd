function validate() {

    // clear all error message and red outline
    var errorMsg = document.getElementsByClassName('errorMsg');
    for (i = 0; i < errorMsg.length; i++) {
        errorMsg[i].innerHTML = "";
    }

    var inputTag = document.getElementsByTagName('input');
    for (i = 0; i < inputTag.length; i++) {
        inputTag[i].classList.remove("errorInput");
    }
    document.getElementById('promo').classList.remove("errorInput");


    // Name validation
    var x = document.getElementById("fname");
    var titleLength = 0;
    //Jenis validation 1: valueOf()
    if (x.value.valueOf() == "" || x.value.valueOf() == null) {
        // alert( "Please provide your name!" )
        document.getElementById('errorName').innerHTML = "Please input your name";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }
    //Jenis validation 2: startsWith()
    else if (!x.value.startsWith("Mr. ") && !x.value.startsWith("Mrs. ") && !x.value.startsWith("Ms. ")){
        document.getElementById('errorName').innerHTML = "Please input your titles \"Mr. /Mrs. /Ms. \" (use space)";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }else{
        titleLength = x.value.search(" ");
        //Jenis validation 3: length
        if (x.value.length-(titleLength+1) < 5 || x.value.length-(titleLength+1) > 30) {
            // alert( "Please provide your name!" )
            document.getElementById('errorName').innerHTML = "Please input 5 to 30 name characters";
            x.classList.add("errorInput");
            x.focus();
            return false;
        }
        //Jenis validation 4&5: lastIndexOf(), endsWith
        else if(x.value.lastIndexOf(" ")==titleLength || x.value.endsWith(" ")){
            document.getElementById('errorName').innerHTML = "Please input at least 2 words of name";
            x.classList.add("errorInput");
            x.focus();
            return false;
        }
    }
    
    

    // Email validation
    x = document.getElementById("email");
    if (x.value.valueOf() == "" || x.value.valueOf() == null) {
        // alert( "Please provide your emai!" )
        document.getElementById('errorEmail').innerHTML = "Please input your email";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }
    //Jenis validation 6: includes()
    else if(!x.value.includes("@")){
        document.getElementById('errorEmail').innerHTML = "Email must contain \"@\" character";
            x.classList.add("errorInput");
            x.focus();
            return false;
    }
    //endsWith
    else if(!x.value.endsWith(".com")&&!x.value.endsWith(".id")){
        document.getElementById('errorEmail').innerHTML = "Email must end with \".com\" or \".id\"";
            x.classList.add("errorInput");
            x.focus();
            return false;
    }
    else {
        //Jenis validation 7: indexOf()
        var at = x.value.indexOf("@");
        var lastAt = x.value.indexOf("@");
        var dot = x.value.indexOf(".");
        var lastDot = x.value.lastIndexOf(".");

        if (at < 1 || dot - at < 2 || lastDot == x.value.length - 1 || at != lastAt) {
            document.getElementById('errorEmail').innerHTML = "Please input valid email";
            x.classList.add("errorInput");
            x.focus();
            return false;
        }
    }

    // Validate at leats 1 qty inputted
    x = document.getElementsByClassName('Qty');
    var y = document.getElementsByClassName('errorMsg errorQty');
    var total = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i].value.valueOf() == "") {
            total+=0;
        }
        else if (x[i].value < 1 || x[i].value > 10) {
            // alert( "Please provide your order!" )
            y[i].innerHTML = "Please input quantity between 1 to 10";
            x[i].classList.add("errorInput");
            x[i].focus();
            return false;
        }
        else{
            total+=x[i].value;
        }
    }
    if(total<1){
        document.getElementById('errorOrder').innerHTML = "Please input quantity on your order";
        for (i = 0; i < x.length; i++) {
            x[i].classList.add("errorInput");
        }
        return false;
    }


    // Promo validation
    x = document.getElementById("promo");
    var qty = document.getElementsByClassName('Qty');
    y = document.getElementsByClassName('errorMsg errorQty');
    var totalBurger=0;
    if(x.value.valueOf() == "2mini"){

        if(qty[6].value<2){
            y[6].innerHTML = "Please input at least 2 quantity to redeem the promo";
            qty[6].classList.add("errorInput");
            qty[6].focus();
            return false;
        }
    }
    else if(x.value.valueOf() == "burgercola"){
        for (i = 0; i < 6; i++) {
            totalBurger += qty[i].value;
        }
        
        if(totalBurger<1){
            for (i = 0; i < 6; i++) {
                qty[i].classList.add("errorInput");
                y[i].innerHTML = "Please input at least 1 quantity on any burger to redeem the promo";
            }
            return false;
        }
        else if(qty[7].value<1){
            qty[7].classList.add("errorInput");
            y[7].innerHTML = "Please input at least 1 quantity on this item to redeem the promo";
            qty[7].focus();
            return false;
        }
    }
    else if(x.value=="3discount"){
        for (i = 0; i < 6; i++) {
            totalBurger += qty[i].value;
        }
        
        if(totalBurger<3){
            for (i = 0; i < 6; i++) {
                qty[i].classList.add("errorInput");
                y[i].innerHTML = "Please input at least 3 quantity on any burger to redeem the promo";
            }
            return false;
        }
    }

    // Address Validation
    x = document.getElementById("address");
    if (x.value.valueOf() == "" || x.value.valueOf() == null) {
        // alert( "Please provide your emai!" )
        document.getElementById('errorAddress').innerHTML = "Please input your address";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }
    else if (x.value.length < 5 || x.value.length > 50) {
        // alert( "Please provide your name!" )
        document.getElementById('errorAddress').innerHTML = "Please input 5 to 50 characters";
        x.classList.add("errorInput");
        x.focus();
        return false;
    }

    //Agreement Validation
    x = document.getElementById("agreement");
    if (!x.checked) {
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