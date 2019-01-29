
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    var url = `localhost:3000/users?username=${username}&password=${password}`;
    
    fetch(url).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
}


