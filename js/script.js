const form = document.getElementById('formulario');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pswd = document.getElementById('pswd');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var pswdValue = pswd.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstName === '') {
        errorFunc(fname, 'First Name cannot be empty');
    }
    else {
        successFunc(fname);
    }

    if(lastName === '') {
        errorFunc(lname, 'Last Name cannot be empty');
    }
    else {
        successFunc(lname);
    }

    if(emailValue === '') {
        errorFunc(email, 'Email cannot be empty');
    } else if (!emailValue.match(pattern)) {
        errorFunc(email, 'looks like not an email');
    }
    else {
        successFunc(email);
    }

    if(pswdValue === '') {
        errorFunc(pswd, 'Password cannot be empty');
    }
    else {
        successFunc(pswd);
    }
})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    if (req !== email) {
        req.value = ' ';
    } else {
        req.style.color = "hls(0, 100%, 74%)";
    }
}

function successFunc (req) {
    req.className += 'success';
}