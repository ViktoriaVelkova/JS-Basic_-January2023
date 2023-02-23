function balans(input) {
    let accont=0;//сметката в която ще внасям
    let index=0; //брояч съхранява получената стойност
    let command=input[index]; //условие за край
    index++;
    //let total=0;
    while (command!=="NoMoreMoney") {
        let money=Number(command);//парите за внасяне
       if (money<0) {
            console.log(`Invalid operation!`);//прекъсва въвеждането 
            break;
        }
        accont+=money;
        console.log(`Increase: ${money.toFixed(2)}`);

        command=input[index];// презаписваме стойноста, която прочитаме от входа
         index++;
    }
    console.log(`Total: ${accont.toFixed(2)}`);
}
balans(["5.51", "69.42","100","NoMoreMoney"]);
console.log(`---------------------`);
balans(["120", "45.55","-150"]);

