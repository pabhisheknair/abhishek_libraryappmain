var username = document.getElementById('email');
var uname = document.getElementById('uname');
var pwd1 = document.getElementById('pwd1');
var pwd2 = document.getElementById('pwd2');
var phone = document.getElementById('phone');
var match = document.getElementById('match');  //Passwords match or not text
var text = document.getElementsByClassName('tooltiptext');  //Tooltip to show strength of text
var button = document.getElementById('signup');
var mydob = document.getElementById('dob');
var form = document.getElementById('form1');

var namex = /^([A-Z]{1})([A-Za-z ]+)$/;
var email = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var tel = /^([0-9]{10})$/;
var tel1 = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;
var tel2 = /^([0-9]{3})[.]([0-9]{3})[.]([0-9]{4})$/;
var tel3 = /^([0-9]{3})[ ]([0-9]{3})[ ]([0-9]{4})$/;

var flag_dob = 0, flag_n = 0, flag_e = 0, flag_p1 = 0, flag_p2 = 0, flag_ph = 0; // flags to check whether input is right or wrong

username.addEventListener('input', function validate_email()
{
        if(email.test(username.value))
        {
            username.style.color = "green";
            flag_e = 1;
            enable();
        }
        else
        {
            username.style.color = "red";
            flag_e = 0;
            disable();
        }
});

uname.addEventListener('input', function()
{
        if(namex.test(uname.value))
        {
            uname.style.color = "green";
            flag_n = 1;
            enable();
        }
        else
        {
            uname.style.color = "red";
            flag_n = 0;
            disable();
        }
});

phone.addEventListener('input', function validate_phone()
{
        if(tel.test(phone.value) || tel1.test(phone.value) || tel2.test(phone.value) || tel3.test(phone.value))
        {
            phone.style.color = "green";
            flag_ph = 1;
            enable();
        }
        else
        {
            phone.style.color = "red";
            flag_ph = 0;
            disable();
        }
});

var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }

  pwd1.addEventListener('input', function() {
    var val = pwd1.value;
    var result = zxcvbn(val);

    console.log(result.score);
    text[0].style.visibility = "visible";
    if (val !== "") 
    {
      text[0].innerHTML = "Strength: " + strength[result.score]; 
    } 
    else 
    {
        text[0].innerHTML = "Require at least 1 capital letter, 1 small letter and one number.";
    }

    if(result.score == 0)
    {
        text[0].style.color = "red";
    }
    else if(result.score == 1)
    {
        text[0].style.color = "orange";
    }
    else if(result.score == 2)
    {
        text[0].style.color = "yellow";
    }
    else if(result.score == 3)
    {
        text[0].style.color = "rgb(25, 170, 5)";
    }
    else
    {
        text[0].style.color = "#00ff40";
    }
  });

var typingTimer;                //timer identifier
var doneTypingInterval = 4000;  //time in ms, 5 second for example
var $input = $(pwd1);

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
  text[0].style.visibility = 'hidden';
}

pwd1.addEventListener('input', function validate_pwd1()
{
    if(password.test(pwd1.value))
        {
            pwd1.style.color = "green";
            flag_p1 = 1;
            enable();
        }
        else
        {
            pwd1.style.color = "red";
            flag_p1 = 0;
            disable();
        }
});    

pwd2.addEventListener('input', function validate_pwd2()
{
    if(pwd1.value === pwd2.value)
        {
            pwd2.style.color = "green";
            flag_p2 = 1;
            match.style.color = "green";
            match.innerText = "Passwords match!";
            enable();
        }
        else
        {
            pwd2.style.color = "red";
            flag_p2 = 0;
            match.style.color = "red";
            match.innerText = "Passwords donot match!";
            disable();
        }
}); 

// mydob.addEventListener('change', function(){
//     var dob = new Date(mydob.value);
//     if (dob.getFullYear() > 2007 || dob.getFullYear() < 1920)
//     {
//         console.log("wrong date");
//         flag_dob = 0;
//         alert("Please enter a valid date of birth!");
//     }
//     else{
//         flag_dob = 1;
//     }
// });

function enable(){ // enable the signup button
    if (flag_e == 1 && flag_p1 == 1 && flag_p2 ==1 && flag_ph == 1 && flag_n == 1 ){
        signup.disabled = false;
        form.setAttribute('action', '/signup/add');
    }
}

function disable(){  // disable the signup button
    if (flag_e == 0 || flag_p1 == 0 || flag_p2 == 0 || flag_ph == 0 || flag_n == 0 ){
        signup.disabled = true;
    }
}
