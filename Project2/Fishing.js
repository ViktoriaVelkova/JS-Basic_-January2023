function fish(input) {
    let many=Number(input[0]);
    let season=input[1];
    let numFishermen=Number(input[2]);
    let lenPrice=0;
    switch (season) {
        case 'Spring':
            lenPrice=3000;
            break;
            
        case 'Summer':
        case 'Autumn':
                lenPrice=4200;
                break;

        case 'Winter':
        lenPrice=2600;
                    break;
    
       
    }
    if (numFishermen<=6) {
        lenPrice=(lenPrice-((lenPrice*10)/100));
        
    }else if (numFishermen>=7 && numFishermen<=11) {
        lenPrice=(lenPrice-((lenPrice*15)/100));
    }else {
        lenPrice=(lenPrice-((lenPrice*25)/100));
    }

    if (season !=='Autumn' && numFishermen%2===0) {
        //lenPrice=(lenPrice-((lenPrice*5)/100))
        lenPrice*=0.95;
    }
    if (many>=lenPrice) {
        let manyLeft=many-lenPrice;
        console.log(`Yes! You have ${manyLeft.toFixed(2)} leva left.`);
    }else{
        let manyNeed=lenPrice-many;
        console.log(`Not enough money! You need ${manyNeed.toFixed(2)} leva.`);
    }

}
fish (["3000","Summer","11"]);
//fish (["3600","Autumn","6"]);
//fish (["2000","Winter","13"])



