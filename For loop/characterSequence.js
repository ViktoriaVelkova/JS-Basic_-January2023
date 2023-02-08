function characterSequence(input) {
    //извеждане на обърнат низ
    let text=input[0];
    for(let i=text.length-1;i>=0;i--){
        console.log(text.charAt(i));
    }
    
}
characterSequence (["softuni"]);
