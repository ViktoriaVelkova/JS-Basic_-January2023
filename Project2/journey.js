function journey(input) {
    let many=Number(input[0]);
    let season=input[1];
    let destinasion='';
    let placeType='';
    let price=0;
    if (many<=100) {
        destinasion='Bulgaria';
        if (season==='summer') {
            placeType='Camp'
            price=0.30*many;
            
        }else{
            placeType='Hotel';
            price=0.70*many;
        }
    }else if (many<=1000) {
        destinasion='Balkans';
        if (season==='summer') {
            placeType='Camp'
            price=0.40*many;
            
        }else{
            price=0.80*many;
            placeType='Hotel';
        }
    }else if(season!=='summer' || season!=='winter' ){
        destinasion='Europe';
        price=0.90*many;
        placeType='Hotel';
    }

   
    console.log(`Somewhere in ${destinasion}`);

    console.log(`${placeType} - ${price.toFixed(2)}`);


}
//journey (["1500", "summer"]);
journey (["312", "summer"]);