let chave = ""


function colocarNaTela(dados){
    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " +  dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.umidade').innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
    document.querySelector(".body").src= "https://source.unsplash.com/1600x900/?landscape"
}


function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + 
            cidade + 
            '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric',
    ).then((resposta) => resposta.json())

    // awai-> espere
    // fetch-> ferramenta do java script para acessar servidores
    // json=> o formato que java script entende
    // then-> então
    colocarNaTela(dados)
    console.log(dados)
}