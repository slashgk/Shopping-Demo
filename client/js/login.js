
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    var url = `localhost:3000/users?username=${username}&password=${password}`;

    alert('done');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert('done');
    }
    };
    xhttp.open("POST", url, true);
    xhttp.send();
}


