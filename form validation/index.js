function validate(){
var username = document.getElementById('username').value
var email = document.getElementById('email').value
var password = document.getElementById('password').value
var cpassword = document.getElementById('cpassword').value

checkusername(username)
checkemail(email)
checkpassword(password)
checkcpasswordmatch(password,cpassword)

}
function checkusername(username){
    
    if(username.length > 7)
    {

        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerHTML=''  
         
    }
    else
    {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='Username must be of 8 letters long'
    }
}
function checkemail(email)
{
    if(email.length >10 && email.includes('@gmail.com') && email[email.length-1]=='m')
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')    
        document.getElementById('email_error').innerHTML=''
    }
    else
    {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Email must contain @gmail.com and min 11 characters'
    }
}
function checkpassword(password)
{

    if(password.length >7 )
    {
        console.log(password.length)
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')    
        document.getElementById('password_error').innerHTML=''
    }
    else
    {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='Password must be of min 8 characters long'
    } 
   
}
function checkcpasswordmatch(password,cpassword)
{
    if(cpassword == password && cpassword!='')
    {
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')    
        document.getElementById('cpassword_error').innerHTML=''
    }
    else
    {
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='Password does not match'
    }
}