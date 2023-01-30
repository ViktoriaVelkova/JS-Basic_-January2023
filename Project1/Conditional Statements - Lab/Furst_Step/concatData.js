function concat(input){
    let firstName=input[0];
    let lastname=input[1];
    let age=Number(input[2]);
    let twon=input[3];
    console.log(`You are ${firstName} ${lastname}, a ${age}-years old person from ${twon}.`);
}
//concat(['Mariq','Ivanowa','20','Sofiq']);
concat(["Mariq", "Ivanowa","20","Sofiq"]);