function FamilyTrip(input) {
    //Сафари   66/100
    let Budget=Number(input[0]);
    let litersOfFuel=Number(input[1]);
    let dayOfWeek=input[2];
    
    let priceFuel=litersOfFuel*2.10;
    let priceGuide=priceFuel+100;

    if (dayOfWeek==='Saturday') {
       // priceGuide=priceGuide-((priceGuide*20)/100);
       priceGuide*=0.90;
        
        
    }else if (dayOfWeek==='Sunday') {
        priceGuide=priceGuide*0.80;
        
    }
    if(Budget=>priceGuide){
        let moneyLeft=Budget-priceGuide;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    }else{
        let moneyNeed=priceGuide-Budget;  //излиза -
        console.log(`Not enough money! Money needed: ${moneyNeed.toFixed(2)} lv.`);
    }
}
//FamilyTrip(["1000","10","Sunday"]);
//FamilyTrip(["105.20","15","Sunday"]);
FamilyTrip(["120","30","Saturday"]);


