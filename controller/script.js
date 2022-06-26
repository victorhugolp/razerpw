
function buscaApi() {
    let recebe = document.querySelector('[name = "pesquisa"]').value;
    var http = new XMLHttpRequest();
    http.open("get", `https://pokeapi.co/api/v2/pokemon/${recebe}`, true);
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            result = JSON.parse(http.responseText);
            document.querySelector("#pokename").value = 'Nome: ' + result.name;
            document.querySelector("#pokealtura").value =  'Altura: ' + result.height;
            document.querySelector("#pokepeso").value = 'Peso: ' + result.weight;
            document.querySelector("#poketip").value = 'Tipo: ' + result.types[0].type.name;
            document.querySelector("#pokeability").value = 'Habilidade: ' + result.abilities[0].ability.name;
        }
    }
    http.send();
}

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
  