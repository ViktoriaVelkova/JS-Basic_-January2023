function safari(input) { 100/100
    //сафари варянт 2
    let Budget=Number(input[0]);
    let litersOfFuel=Number(input[1]);
    let dayOfWeek=input[2];
    
    
   

    let fuelTotalPrice = litersOfFuel * 2.1;
    let totalPrice = fuelTotalPrice + 100;
    totalPrice *= dayOfWeek == "Saturday" ? 0.9 : 0.8;
    
    let result = Math.abs(totalPrice - Budget);
    if (totalPrice > Budget) {
        console.log(`Not enough money! Money needed: ${result.toFixed(2)} lv.`);
    } else {
        console.log(`Safari time! Money left: ${result.toFixed(2)} lv.`);
    }
}
//safari(["1000","10","Sunday"]);
//safari(["105.20","15","Sunday"]);
safari(["120","30","Saturday"]);
