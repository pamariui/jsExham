/* ------------------------------ TASK 2 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */


// ============== konstruktoriaus funkcija ==============

function Movie (title,director,budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;

// ============== funkcijos metodas ==============

    this.wasExpensive = () => {
       return this.budget > 100000000 ?  true :  false;
        }
    }

// ============== konstruktoriaus panaudojimas ==============

const newMovie = new Movie('Matrica', 'The Wachowskis', 63000000);
const newMovie2 = new Movie('Titanic', 'James Cameron', 200000000);

// ============== atvaizdavimas konsoleje ==============

console.log(`${newMovie.title} was directed by ${newMovie.director} his budget was ${newMovie.budget} $ and it was expensive movie: ${(newMovie.wasExpensive())}.`);
console.log(`${newMovie2.title} was directed by ${newMovie2.director} his budget was ${newMovie2.budget} $ and it was expensive movie: ${(newMovie2.wasExpensive())}.`);

// ============== atvaizdavimas html ==============

const matrix = `${newMovie.title} was directed by ${newMovie.director} his budget was ${newMovie.budget} $ and it was expensive movie: ${(newMovie.wasExpensive())}.`;
const p = document.createElement('p');
p.innerText = matrix;

const titanic = `${newMovie2.title} was directed by ${newMovie2.director} his budget was ${newMovie2.budget} $ and it was expensive movie: ${(newMovie2.wasExpensive())}.`;
const p2 = document.createElement('p');
p2.innerText = titanic;

document.body.append(p,p2);
