function poolDay(input){
    let numPeople=Number(input[0]);
    let taks=Number(input[1]);
    let SunLounger=Number(input[2]);
    let Umbrella=Number(input[3]);

    let priceTaks=numPeople*taks;
    let umbrelaCount=Math.ceil(numPeople/2);
    let sunLoungerCout=Math.ceil(numPeople*0.75);

    let totalUmbrella=umbrelaCount*Umbrella;
    let totalsunLounger=sunLoungerCout*SunLounger;
    
    let totalPrice=priceTaks+totalUmbrella+totalsunLounger;
    console.log(`${totalPrice.toFixed(2)} lv.`);

}
poolDay (["21","5.50","4.40","6.20"]);
