function bask(input){

    let yearlyFee=Number(input[0]);

    let sneakers = yearlyFee - ((yearlyFee * 40)/100);
    let outfit = sneakers - ((sneakers * 20)/100);
    let ball = outfit * 1/4;
    let accessories = ball * 1/5;
    let total = yearlyFee + sneakers + outfit + ball + accessories;
    console.log(total);
}
bask(["365"]);