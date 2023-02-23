function min(input) {
    let inputElement=input[0];
    let index=1;
    let min=Number.MAX_SAFE_INTEGER;
    
    while (inputElement!=="Stop") {
        let num=Number(inputElement);
        if (num<min) {
        min=num;
            
        }


        inputElement=input[index];// презаписваме стойноста, която прочитаме от входа
         index++;
        
    }
    console.log(min);

}
min (["45","-20","7","99","Stop"]);


