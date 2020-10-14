var meuBotao = document.getElementById("findUserButton");
meuBotao.onclick = findUser;

var ageField = document.getElementById('user');


function promisseFindUserReposUrl(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        console.log(ageField.value);
        xhr.open('GET', 'https://api.github.com/users/'+ageField.value+'/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    var response = JSON.parse(xhr.responseText)
                    console.log(response);
                    resolve(response);
                } else {
                    reject("erro na requisição");
                }
            }

        }
    });
}
var resultado;
function findUser(){
    promisseFindUserReposUrl().then(function(response){
        resultado = response;
        var divLista = document.getElementById("lista");

        var lista = document.createElement('ul');

        var cont = 0;

        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            console.log(element);

            var listElement = document.createElement('li');
            listElement.textContent = element.name;

            lista.appendChild(listElement);
        }
        divLista.appendChild(lista);
    }).catch(function(reject){
        alert("Usuario inexistente")
    })  
}

