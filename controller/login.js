
isLogado();


function isLogado(){
   var token = localStorage.getItem('token');

   buttonEntrar = document.getElementById('entrarButton');

   if(token === "QpwL5tke4Pnpja7X4"){
      console.log("Você já está logado!")
      document.getElementById("entrarButton").style.display = "none";     
      document.getElementById("sairButton").style.display = "display";
      buttonEntrar.style.display = "none";
      return true;
   
   }
   else{
      console.log("Você não está logado!");
      document.getElementById("entrarButton").style.display = "block";      
      document.getElementById("sairButton").style.display = "none";
      document.getElementById("postButton").style.display = "none";
      buttonEntrar.style.display = "block";
      return false;
   }
}




function logar(){
   var email = document.getElementById("email_login").value;
   var pass = document.getElementById("senha_login").value;

   loginApi(email, pass);

}

function deslogar(){
   localStorage.removeItem('token');

   buttonEntrar = document.getElementById('entrarButton');
   buttonSair = document.getElementById('sairButton');

   buttonEntrar.style.display = "block";
   buttonSair.style.display = "none";

}
 
function loginApi(email, pass){
   
/****************** LOGIN API ******************************************/
   axios.post('https://reqres.in/api/login', {
      email: email,
      password: pass
   })

   .then(function (response) {
       
      store(response.data.token)

// recarregar pagina 
      document.location.reload(true);
     
   })
   .catch(function (error) {
      // document.getElementById("erro1").style.display = "block"
      // if(email.lenght <= 3) document.getElementById("erro2").style.display = "block"

    
   });

}





/*função para LocalStorage*/

function store(token) {
   localStorage.setItem('token', token);

}
 



/*função para validação*/

function check() {

   /* storage cadastro */
   var storedEmail = localStorage.getItem('email');
   var storedPw = localStorage.getItem('senha');

   /* storage login */
   var userEmail = document.getElementById('email').value;
   var userPw = document.getElementById('senha').value;

   if(userEmail.value == storedEmail && userPw.value == storedPw) {
      console.log('Você já está logado.');
   }else {
      console.log('ERROR.');
   }
}
