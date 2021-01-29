var username = document.getElementById('email');
var pwd = document.getElementById('pwd');
var button = document.getElementById('login-button');
var form = document.getElementById('form1');
var flag_e = 0;
var flag_p = 0;

// var email = /^([A-Za-z0-9\.\-\_]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
var email = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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

pwd.addEventListener('input', function validate_pwd()
{
    if(password.test(pwd.value))
        {
            pwd.style.color = "green";
            flag_p = 1;
            enable();
        }
        else
        {
            pwd.style.color = "red";
            flag_p = 0;
            disable();
        }
});    

function enable(){
    if(flag_e == 1 && flag_p == 1)
            {
                button.disabled = false;
                form.setAttribute('action','/login/check');
            }        
}


function disable(){
    if(flag_e == 0 || flag_e == 0)
            {
                button.disabled = true;
            }        
}
