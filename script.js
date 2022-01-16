const imagem1 = document.querySelector('#rick');
const imagem2 = document.querySelector('#and');
const botao = document.querySelector('button');
const botao2 = document.querySelector('button');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie1 = document.querySelector('#especie1');
const especie2 = document.querySelector('#especie2');
const condicao1 = document.querySelector('#vivoOuMorto1');
const condicao2 = document.querySelector('#vivoOuMorto2');

traduzirCondicao1 = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

traduzirCondicao2 = (data) => {
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

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = traduzirCondicao1(data);
        
    });
}

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = traduzirCondicao2(data);
        
    });
}

botao.onclick = pegarPersonagem2;
botao2.onclick = pegarPersonagem;

