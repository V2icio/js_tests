var meuBotao = document.getElementById("checkAgeButton");
meuBotao.onclick = delayBotao

var ageField = document.getElementById('ageField');


function checaIdade(idade) {
// Retornar uma promise
    return new Promise(function(resolve,reject){
        if(idade != null && idade >= 18){
            resolve();
        } else{
            reject();
        }
    });
}

function checaIdadeBotao(){
    var ageText = ageField.value;
    checaIdade(ageText)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });  
}

function delayBotao(){
    setTimeout(checaIdadeBotao, 2000);

}
    


/*
return new Promise(function(resolve,reject){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/V2icio');
            xhr.send(null);
    
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        var response = JSON.parse(xhr.responseText)
                        response.data.
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject("erro na requisição");
                    }
                }
    
            }
        });*/