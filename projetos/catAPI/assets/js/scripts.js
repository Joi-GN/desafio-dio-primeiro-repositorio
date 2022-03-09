const BASE_URL = "https://thatcopy.pw/catapi/rest/"; //armazenando o endereço da API
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat-photo');

const getCats = async () => { //arrow function assíncrona
    try {
        const data = await fetch(BASE_URL); //pegar dados da API
        const json = await data.json(); //converte para json

        return json.webpurl;
    }
    catch(e) {
        console.log(e.message); //se der problema, loga a msg de erro
    }
}

/*OUTRA FORMA de formar a arrow function assíncrona acima
const getCats = async () => {
    const data = await fetch(BASE_URL)
    .then((res) => res.json()) 
    .catch((e) => console.log(e));

    return data.webpurl;
}*/

const loadImg = async () => { //a source da catImg vai esperar o resultado da função getCats
    catImg.src = await getCats();
}

catBtn.addEventListener('click',loadImg);

loadImg(); //sempre que iniciar a página vai já iniciar com uma img