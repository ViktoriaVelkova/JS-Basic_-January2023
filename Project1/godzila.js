function godzila(input){

    let budgetOfMove=Number(input[0]); // бюджет
    let numOfextras=Number(input[1]); // бр статитсти
    let priceOfClothingOfExtras=Number(input[2]);  // цена облекло за 1 статист
        
    let priceOfDecor=(budgetOfMove*10)/100;  // цена декор
        //console.log(priceOfDecor);

        let priceClothing=numOfextras*priceOfClothingOfExtras; 
       // console.log(priceClothing); // цена за облекло за статист

    if(numOfextras>150){
       
         priceClothing=priceClothing*0.9; //отстъпка от облеклото на статист
       // console.log(priceClothing);

    }
    let priceTotal=priceOfDecor+priceClothing;// цена за дрехи и декор

    if(priceTotal>budgetOfMove){
        console.log(`Not enough money!`);
        let maneNeed=priceTotal-budgetOfMove;
        //console.log(maneNeed);
        console.log(`Wingard needs ${maneNeed.toFixed(2)} leva more.`);

    }else {
        console.log(`Action!`);
        let moneLeft=budgetOfMove-priceTotal;
        console.log(`Wingard starts filming with ${moneLeft.toFixed(2)} leva left.`);
    }

}

godzila(["20000","120","55.5"]);

