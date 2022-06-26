
isLogado();


function isLogado(){
   var token = localStorage.getItem('token');

   buttonEntrar = document.getElementById('entrarButton');

   if(token === "QpwL5tke4Pnpja7X4"){
      console.log("Você já está logado!")
      document.getElementById("loginButton").style.display = "none";     
      document.getElementById("sairButton").style.display = "display";
      buttonEntrar.style.display = "none";
      return true;
   
   }
   else{
      console.log("Você não está logado!");
      document.getElementById("loginButton").style.display = "block";      
      document.getElementById("sairButton").style.display = "none";
      document.getElementById("buscarButton").style.display = "none";
      buttonEntrar.style.display = "block";
      return false;
   }
}


/*Modal-Entrar*/

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);    
     modal.classList.add('mostrar');
     modal.addEventListener('click', function (e) {
        if (e.target.id == modalID || e.target.className == 'fechar' )
        modal.classList.remove('mostrar');            

});

}

 buttonEntrar = document.getElementById('entrarButton');
 buttonEntrar.addEventListener('click', function () {
     iniciaModal('modal-entrar');
 })


 buttonSair = document.getElementById('sairButton');
 buttonSair.addEventListener('click', function () {
     deslogar();

     // recarregar pagina 
     document.location.reload(true);
 })




document.getElementById("loginButton2").addEventListener('click', function(){
   logar()
});




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
 
 /*console.log(button2);/*
 /*Modal-login
 

 function iniciaModal3(modal3ID){
    const modal3 = document.getElementById(modal3ID);
    /*console.log(modal3);
    modal3.classList.add('mostrar3');    

    modal3.addEventListener('click', function (e) {
       if (e.target.id == modal3ID || e.target.className == 'fechar' )
       modal3.classList.remove('mostrar3');   
})}

const login = document.getElementById('loginButton');

login.addEventListener('click', function check(){
   
   iniciaModal3('modal-login');
   
} )*/



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
