function shop(input){
    let budget=Number(input[0]);
    let numOfVideoCard=Number(input[1]);
    let numOfProccesing=Number(input[2]);
    let numOfRam=Number(input[3]);

    let priceOfVideoCard=numOfVideoCard*250;
    let priceOfProccesing=((priceOfVideoCard*35)/100)*numOfProccesing;
    let priceRam=((priceOfVideoCard*10)/100)*numOfRam;
    let total=priceOfVideoCard+priceOfProccesing+priceRam;
    if(numOfProccesing<numOfVideoCard){
        total=total-((total*15)/100);
        //total*=0.85;
    }
    if(total<=budget){
        let maneleft=budget-total;
        console.log(`You have ${ maneleft.toFixed(2)} leva left!`);
    }else{
        let Need=total-budget;
        console.log(`Not enough money! You need ${Need.toFixed(2)} leva more!`);
    }
}
shop (["900","2","1","3"]);
