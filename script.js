const email_crct="harini@gmail.com"
const pass_crct="harini123"

function login()
{
    console.log("hi");
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    if(email==="" || pass==="")
        document.getElementById("result").textContent="EMPTY";
    else if(email===email_crct && pass===pass_crct)
        document.getElementById("result").innerHTML=`<img src="tick.jpg">`;
    else
        document.getElementById("result").innerHTML=`<img src="wrong.jpg">`


}