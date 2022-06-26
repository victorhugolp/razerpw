

function check() {
    form = document.getElementById("login");
    let login = document.querySelector('#email').value;
    let password = document.querySelector('#senha').value;
    
    if(login.length > 3 && password.length > 3) {

        axios.post('https://reqres.in/api/login',{"email": login, "password": password})
        .then(function (response){
            let token = response.data.token;
            localStorage.setItem('token', token); 
            document.querySelector('#login-erro').innerHTML = 'Login realizado';  
            document.querySelector('#buscar-api').style.display = 'flex';
            document.querySelector('#input-api').style.display = 'flex';
            document.querySelector('.fund').style.display = 'flex';
        })
        .catch(function erro (){
            document.querySelector('#login-erro').innerHTML = 'Login invalido';
        });

    } else {
        document.querySelector('#login-erro').innerHTML = 'Login e senha precisam ter mais de 3 caracteres';
    }
}

if(localStorage.getItem('token')){
    document.querySelector('#buscar-api').style.display = 'flex';
    document.querySelector('#input-api').style.display = 'flex';
    document.querySelector('.fund').style.display = 'flex';
    document.querySelector('#login-erro').innerHTML = 'Você esta logado';   
}
  