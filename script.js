const imagem1 = document.querySelector('#rick');
const imagem2 = document.querySelector('#and');
const imagem3 = document.querySelector('#morty');
const botao = document.querySelector('button');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie1 = document.querySelector('#especie1');
const especie2 = document.querySelector('#especie2');
const especie3 = document.querySelector('#especie3');
const condicao1 = document.querySelector('#vivoOuMorto1');
const condicao2 = document.querySelector('#vivoOuMorto2');
const condicao3 = document.querySelector('#vivoOuMorto3');

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarOsPersonagens = () => {
    pegarPersonagem(imagem1,nomeDoPersonagem1, especie1, condicao1);
    pegarPersonagem(imagem2,nomeDoPersonagem2, especie2, condicao2);
    pegarPersonagem(imagem3,nomeDoPersonagem3, especie3, condicao3);

}

pegarPersonagem = (imagem, nomeDoPersonagem, especie, condicao) => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
}


botao.onclick = pegarOsPersonagens;