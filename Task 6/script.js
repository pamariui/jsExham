/* ------------------------------ TASK 5 --------------------------------------------
Sukurkite duomenu masyva, kuriame butu talpinami duomenys apie studentus:
1. Vardas
2. Pavarde
3. Amzius
4. Studijavimo datos pradzia

Turint siuos duomenis atlikti filtravima pagal studijavimo datos pradzia. Pavyzdziui,
norime matyti studentus kurie pradejo studijuoti nuo 2022-03-10. Si pasirinkima vartotojas atlieka
paprastu inputu. Filtravimas ivyksta tik tada kai vartotojas paspaudzia mygtuka Submit

P.S Reikalingus HTML elementus prisideti, kaip input, output ir tt
------------------------------------------------------------------------------------ */
//========================= masyvas =========================

const students = [
    {
        'vardas' : 'Mykolas',
        'pavarde' : 'Mykolovic',
        'amzius' : 46,
        'istojo' : '2019-09-01'
    },
    {
        'vardas' : 'Agniete',
        'pavarde' : 'Martynaite',
        'amzius' : 22,
        'istojo' : '2018-09-01'
    },
    {
        'vardas' : 'Levs',
        'pavarde' : 'Nartijs',
        'amzius' : 19,
        'istojo' : '2022-09-01'
    },
    {
        'vardas' : 'Matas',
        'pavarde' : 'Laurinkus',
        'amzius' : 32,
        'istojo' : '2016-09-01'
    },
    {
        'vardas' : 'Luka',
        'pavarde' : 'Jakimov',
        'amzius' : 18,
        'istojo' : '2020-09-01'
    }
];

//========================= Variables =========================

const form = document.querySelector('form');
const inputDate = document.getElementById('inputDate');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

//========================= fukcijos =========================
// ===== Funkcija atspausdina turini =====

const printData = (array) => {

    array.forEach(el => {
        const card = document.createElement('div');
        card.classList.add('card');

        const vardas = document.createElement('h3');
        vardas.innerText = `${el.vardas} ${el.pavarde}`;
        
        const amzius = document.createElement('h4');
        amzius.innerText = `Amžius: ${el.amzius}`;

        const istojo = document.createElement('h4');
        istojo.innerText = `Pradėjo mokytis nuo: ${el.istojo}`;
        
        card.append(vardas,amzius,istojo);
        output.append(card);
    });
};

// ===== Funkcija patikrina ar datos inputas nera tuscias =====

const checkForinput = () => {

    const alert = document.getElementById('alert')
    if(inputDate.value){
        alert.innerText = "";
        output.innerText = ""
        console.log('Success');
    } else if(output.innerText) {
        output.innerText = "";
        alert.innerText = `Please choose date`;
        printData(students);
    }   else {
        alert.innerText = `Please choose date`;
        printData(students);
    }
};

// ===== funkcija kuri atrenka duomenis ir juos atspausidna =====

const init = () => {
    const startDate = new Date(inputDate.value);
    const newStudents =  students.filter(el => {
        var date = new Date(el.istojo);
        return (date >= startDate );
      });
      printData(newStudents.sort((a,b) => {
        if (a.vardas < b.vardas) {
            return -1;
      }}));
};

// ========================= initialize =========================

//===== pirmas duomenu atspausdinimas =====
printData(students.sort((a,b) => {
    if (a.vardas < b.vardas) {
        return -1;
  }}));

// ===== panaudojus mygtuka isfiltruojami bei atspausdinami duomenys =====

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkForinput();
    init();
});
