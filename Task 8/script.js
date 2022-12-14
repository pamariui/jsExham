/* ------------------------------ TASK 8 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// =============== kintamieji  =============== 

const state = document.getElementById('btn__state');
const btn = document.getElementById('btn__element');
let counter = 0;

//  ============== event listner for button click ==============

btn.addEventListener('click', () => {
    counter++;
    state.innerText = counter;
});
