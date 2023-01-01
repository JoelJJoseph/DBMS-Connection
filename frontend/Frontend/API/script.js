function formValidation() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var pnumber = document.getElementById('phoneNumber').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('e-mail').value;
    var password = document.getElementById('password').value;
    var text = "";

    if (FirstName(fname)) {}
    if (LastName(lname)) {}
    if (PhoneNumber(pnumber)) {}
    if (Country(country)) {}
    if (Email(email)) {}
    if (Password(password)) {}
    return false;
}

/*first name input validation*/
function FirstName(fname) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if (fname == "" || fname.match(letters)) {
        text = "";
        message[0].innerHTML = text;
        return true;
    } else {
        text = "First name should contain only letters";
        message[0].innerHTML = text;
        return false;
    }
}

/*last name input validation*/
function LastName(lname) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if (lname == "" || lname.match(letters)) {
        text = "";
        message[1].innerHTML = text;
        return true;
    } else {
        text = "Last name should contain only letters";
        message[1].innerHTML = text;
        return false;
    }
}

/*email address input validation*/
function Email(email) {
    var message = document.getElementsByClassName("error-message");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (email == "" || email.match(mailformat) || atpos > 1 && (dotpos - atpos > 2)) {
        text = "";
        message[2].innerHTML = text;
        return true;
    } else {
        text = "Wrong email format";
        message[2].innerHTML = text;
        return false;
    }
}

/*phone number validation*/
function PhoneNumber(pnumber) {
    var message = document.getElementsByClassName("error-message");
    var numbers = /^[0-9]+$/;
    if (pnumber == "" || pnumber.match(numbers)) {
        text = "";
        message[3].innerHTML = text;
        return true;
    } else {
        text = "Phone number should contain only numbers";
        message[3].innerHTML = text;
        return false;
    }
}


/*country input validation*/
function Country(country) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if (country == "" || country.match(letters)) {
        text = "";
        message[4].innerHTML = text;
        return true;
    } else {
        text = "Country name should contain only letters";
        message[4].innerHTML = text;
        return false;
    }
}

/*validate password*/
function Password(password) {
    var message = document.getElementsByClassName("error-message");
    var illegalChars = /[\W_]/; // allow only letters and numbers
    if (illegalChars.test(password)) {
        text = "Password contains illegal characters";
        message[5].innerHTML = text;
        return false;
    } else if ((password.search(/[0-9]+/) == -1)) {
        text = "Password should contain at least one number";
        message[5].innerHTML = text;
        return false;
    } else {
        text = "";
        message[5].innerHTML = text;
        return true;
    }
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(document.cookie);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



if (user != "" && email != "" && phone != "") {
    alert("Welcome again " + user + " with email-id " + email + "and phone number " + phone);
    // sessionStorage.setItem("FirstName", user);
    localStorage.setItem("email", email);
    let personEmail = localStorage.getItem("email");
    document.getElementById("demo").innerHTML = personEmail;

    // deleteall();

    // document.cookie = "username=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    // document.cookie = "email=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    // document.cookie = "phone=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
} else {


    user = document.forms["myForm"]["fname"].value;
    email = document.forms["myForm"]["email"].value;
    phone = document.forms["myForm"]["phno"].value;
    // document.getElementById("demo").innerHTML = personEmail;
    //  let personEmail = localStorage.getItem("email");
    //  sessionStorage.setItem("FirstName", user);
    //  localStorage.setItem("email", email);
    //  let personEmail = localStorage.getItem("email");

    // Retrieve
    // document.getElementById("demo").innerHTML = localStorage.getItem("email");

    console.log("hey" + sessionStorage);
    if (user != "" && user != null) {
        setCookie("username", user, 30);
    }
    if (email != "" && email != null) {
        setCookie("email", email, 30);
    }
    if (phone != "" && phone != null) {
        setCookie("phone", phone, 30);
    }
}



function checkCookieonsubit() {
    console.log("hello00");
    deleteall();
    var color = readCookie("backgroundColor");
    if (color) {
        document.body.style.backgroundColor = color;
    }
    var user = getCookie("username");
    var email = getCookie("email");
    var phone = getCookie("phone");
    console.log(document.cookie);

    if (user != "" && email != "" && phone != "") {
        alert("Welcome again " + user + " with email-id " + email + "and phone number " + phone);
        sessionStorage.setItem("FirstName", user);
        sessionStorage.setItem("FirstName", user);
        localStorage.setItem("email", email);
        let personEmail = localStorage.getItem("email");
        // deleteall();

        // document.cookie = "username=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
        // document.cookie = "email=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
        // document.cookie = "phone=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    } else {


        user = document.forms["myForm"]["fname"].value;
        email = document.forms["myForm"]["email"].value;
        phone = document.forms["myForm"]["phno"].value;

        sessionStorage.setItem("FirstName", user);
        sessionStorage.setItem("FirstName", user);
        localStorage.setItem("email", email);
        let personEmail = localStorage.getItem("email");

        console.log("hey" + sessionStorage);
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
        if (email != "" && email != null) {
            setCookie("email", email, 30);
        }
        if (phone != "" && phone != null) {
            setCookie("phone", phone, 30);
        }
    }

}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function background(color) {
    document.body.style.backgroundColor = color;
    createCookie("backgroundColor", color, 365);
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function deleteall() {
    document.cookie = "username=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    document.cookie = "email=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    document.cookie = "phone=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    document.cookie = "backgroundColor=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
}