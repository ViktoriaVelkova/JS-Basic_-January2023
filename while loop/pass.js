function pass(input) {
    let index=0;
    let userName=input[index];
    index++;
    let pass=input[index];
    index++;
    let date=input[index];
    index++;
    
    while (true) {
        let demPa=input[index];
        index++;
        if (demPa===pass) {
            break;
        }
        
    }
    console.log(`Welcome ${userName}!`);

}
pass(["Nakov","1234","Pass","1324","1234"]);
