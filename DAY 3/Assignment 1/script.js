var Name="Subham",
email,
password;
function Signupform(){
    Name=document.getElementById("Name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    console.log("Name:"+Name);
    console.log("Email:"+email);
    console.log("Password:"+password);
    alert("You have succesfully signed up");
    window.location.href="loginForm.html";
}
function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username == "subham"){
        if(password == "hello"){
            alert("login succesful");
            window.location.href="welcome.html";
        }
}else{
    alert("login not succesful");
}
}