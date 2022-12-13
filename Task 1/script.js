
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calc (a,b){
    this.x = a;
        this.y = b;
    this.suma = function () {
        let sum = this.x + this.y
        return sum
    };

    this.substraction = function  () {
        return this.a - this.b;
    };
    this.multiplication = function () {
        return this.a * this.b
    }
    this.division = function  () {
        return this.a / this.b
    }
}

const digits = new Calc(8,2);

console.log(digits.suma);
console.log(digits.substraction);
console.log(digits.multiplication);
console.log(digits.division);