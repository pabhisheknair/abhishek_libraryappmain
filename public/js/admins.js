var users = [
    {name: "admin", email: "admin@gmail.com", password: "Fsd12345"}
];

function checklogin(){

        var id = document.getElementById('email');
        var pass = document.getElementById('pwd');
        console.log(id.value + " " + pass.value);
        for(i=0; i<users.length; i++)
        {
            if(id.value == users[i].email && pass.value == users[i].password){
                $("#form1").attr("action","/admin/admindash");
                return;
            }
        }
        alert("Invalid Username and Password");

}


