/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */



// ==================== Fetch json ====================

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
           const cars = data
            createCard(cars.sort((a,b) => a.brand - b.brand))
            console.log(data[1].brand)
        })

// ==================== Function's ====================

function createCard (array) {
    
    const output = document.getElementById('output');
    
    array.forEach(el => {
        
        const div = document.createElement('div');
        div.setAttribute('class','card');

        const brandHeader = document.createElement('h2');
        brandHeader.setAttribute('class','car_brand');
        brandHeader.innerText = el.brand;

        const carList = document.createElement('ul');
        carList.setAttribute('class','car_list');

        div.append(brandHeader, carList);
        output.append(div);

        for(let i = 0; i < el.models.length; i++ ){

            const carListItem = document.createElement('li');
            carListItem.setAttribute('class', 'list_item');
            carListItem.innerText = el.models[i];

            carList.append(carListItem);
        }
    });
}