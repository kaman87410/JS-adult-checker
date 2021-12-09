  function age(){
    let userAge = document.getElementById("userAge").value;
    let message


if (userAge >= 18)
{
    message = "You are adult"
} 
else 
{
    message = "You are not adult"
}

document.getElementById("message").innerHTML = message;
 
};