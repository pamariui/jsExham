/* ------------------------------ TASK 7 --------------------------------------------
Kreipiantis i zemiau pateikta resursa gauti siuos duomenis is serverio ir atvaizduoti juos htmle.
T.y. turi buti atvaizduota zinute ir nuotrauka <img>.
Taip pat tinklapyje turi buti atvaizduotas mygtukas, kuri paspaudus butu gaunami nauji duomenys
ir pakeiciami seni.
Taip pat isijungus si tinklapi is naujo turiu matyti ta pati irasa, kuri pries tai buvome gave ir tik paspaudus mygtuka "Refresh"
Turime gauti naujus duomenis.

Hint: naudojamas localstorage, saugoti informacijai;
------------------------------------------------------------------------------------ */

// =============== api fetch ===============

const URL = "https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random";

async function getData() {
    try {
        let response = await fetch(URL);
        if (response.status === 200){
            return await response.json();
        }
    }   catch(error){
            console.error(error);
    }
};


// =============== variables ===============

const output = document.getElementById('output');
const btn = document.getElementById('btn');
let duck = {};

// =============== functions ===============

// ===== Funckcija generuoja naujas antis bei iraso jas i local =====

async function renderData() {

    const data = await getData();
    localStorage.setItem('url', data.url)
    localStorage.setItem('message', data.message)
    quackGenerator(data);
};

// ===== atspausdina gautus duomenis =====
const quackGenerator = (data) => {
    const img = document.createElement('img');
    img.src = data.url;

    const message = document.createElement('h3');
    message.innerText = data.message;
    output.append(img,message);
}


//  ===== paleidus puslapi patikrina ar kas nors yra local storage jei ne generuoja nauja antuka =====
const init = () => {

    if(localStorage.getItem('url')){

        const img = document.createElement('img');
        img.src = localStorage.getItem('url');

        const message = document.createElement('h3');
        message.innerText = localStorage.getItem('message')
        output.append(img,message);
        console.log(localStorage.getItem('url'));
    } else {
        renderData();
    }
}


// =============== initialize ===============

init ()

// ===== paspaudus mygtuka uzkrauna nauja antuka =====
btn.addEventListener('click', () => {
    output.innerText = ""
    renderData()
} )
