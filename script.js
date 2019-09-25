var username=document.getElementById('username');
var password=document.getElementById('password');

console.log(window.location.href);
console.log(username);
  console.log(password);
var str=window.location.href;
console.log(str.lastIndexOf("/"))
document.getElementById('button').addEventListener('click',
function(){
 

  if(username.value == "" || password.value == ""){
    console.log(username);
    console.log(password);
    document.querySelector('.bg-modal').style.display = 'block';
    document.getElementById('alert').innerText="Please enter your username and password";
    
  }
  else{
    
      console.log(username);
      console.log(password);
      document.querySelector('.bg-modal').style.display = 'block';
      document.getElementById('alert').innerText=username.value;
    }
});

document.querySelector('.close').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display = 'none';
    });

  function check(form)
    {
      
     if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd")
      {
        window.location.href = str.substring(0,str.lastIndexOf("/"))+"/target.html";
        
      }
     else
     {
      document.querySelector('.bg-modal').style.display = 'block';
      }
    }

