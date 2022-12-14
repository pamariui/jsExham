/* ------------------------------ TASK 9 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
3. Isrykiuoti pagal varda mazejimo tvarka

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */


// =============== Fetc data =============== 

const ENDPOINT = 'https://api.github.com/users';

async function getData() {
    try {
        let response = await fetch(ENDPOINT);
        if (response.status === 200){
            return await response.json();
        }
    }   catch(error){
            console.error(error);
    }
};

// =============== variables =============== 

let users = null;
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// =============== function's =============== 

// ===== function to put data to array =====

async function renderData() {
    users = [];
    const data = await getData();

    for(let i = 0; i < data.length; i++ ){   
        users.push(data[i]);
    };

    const sorted = users.sort((a,b) => {
        if (a.login.toUpperCase() > b.login.toUpperCase()) {
            return -1;
        }});

    createCard(sorted);
};

// ===== function to create DOM card element for array ====

function createCard(array) {
    array.forEach(el => {

        const login = document.createElement('h3');
        login.innerText = el.login;

        const img = document.createElement('img');
        img.src = el.avatar_url;
        img.setAttribute('alt', 'UserPicture');

        const card = document.createElement('div');
        card.classList.add('card');
        card.append(login,img);
        output.append(card);
    });
       
};

// ===== create button event listener =====

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    users = [];

    if(btn.classList.contains('active')){
        output.innerHTML = "";
        renderData();
    } else {
        output.innerHTML = `Press "Show Users" button to see users`;
    }
});
