/*
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/


interface Iemployee {
code: number;
name: string;
};


let employee: Iemployee ={
    code: 10,
    name: "John"
}

