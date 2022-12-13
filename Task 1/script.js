
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// ================== funkcijos konstruktorius ==================

function Calc (a,b){

        this.a = a;
        this.b = b;

// ================== funkcijos metodai ==================

    this.sum = function () {
        return  this.a + this.b;
    };

    this.substraction = function () {
        return this.a - this.b;
    };
    this.multiplication = function () {
        return this.a * this.b;
    };
    this.division = function  () {
        return this.a / this.b;
    };
}

// ================== konstruktoriau panaudojimas ==================

const digits = new Calc(8,2);

// ================== atvaizdavimas panaudotu metodu ==================

console.log(digits.sum());
console.log(digits.substraction());
console.log(digits.multiplication());
console.log(digits.division());