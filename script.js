function endereco(){
    let end = document.querySelector('#cep').value;
    let resultado = document.querySelector('#resultado')
    
    if (end.length !== 8) {
        resultado.innerHTML ='CEP INVÁLIDO'
        return
    }
    
    let cep = `https://viacep.com.br/ws/${end}/json/`
    
    fetch(cep).then(function(response){
        response.json().then(function(data) {
            console.log(data)
            mostrarres(data)
        })
    })
    }
    
    function mostrarres(dados){
    
        if (dados.erro){
            resultado.innerHTML = 'O endereço digitado não foi encontrado'
        } else {
            resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>\n
                               <p>Bairro: ${dados.bairro}</p>\n
                               <p>Cidade: ${dados.localidade}</p>
                               <p>UF: ${dados.uf}</p>\n
                               `
        }
    }