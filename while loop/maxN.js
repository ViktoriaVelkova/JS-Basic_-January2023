function maxN(input) {
    let inputElement=input[0];
    let index=1;
    let max=Number.MIN_SAFE_INTEGER;
    
    while (inputElement!=="Stop") {
        let num=Number(inputElement);
        if (num>max) {
        max=num;
            
        }


        inputElement=input[index];// презаписваме стойноста, която прочитаме от входа
         index++;
        
    }
    console.log(max);

}
maxN (["100","99","80","70","Stop"]);

