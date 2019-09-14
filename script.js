var username=document.getElementById('username');
var password=document.getElementById('password');


console.log(username);
  console.log(password);

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

