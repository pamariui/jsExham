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
}

// =============== Fetc data =============== 

let users = null;
async function init() {
    
    users = [];
    const data = await getData();
    for(let i = 0; i < data.length; i++ ){   
        users.push(data[i])
    } 
    console.log(users);
}
init()