function dep(input){
    let depSum=Number(input[0]);
    let srok=Number(input[1]);
    let procent=Number(input[2]);
    let totalProcent=procent/100;
    let sum=depSum+srok*((depSum*totalProcent)/12);
    console.log(sum);
}
dep(["200 ","3 ","5.7 "]);