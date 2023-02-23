function DeerOfSanta(input) {
    let numDaysSantaIsAway=Number(input[0]);//брой дни, в които Дядо Коледа отсъства 
    let foodLeft=Number(input[1]);   //оставена храна в килограми 
    let foodFirstDeer=Number(input[2]);//храна на ден за първия елен в килограми 
    let foodSecondDeer=Number(input[3]);//храна на ден за 2 елен в килограми 
    let foodThirdDeer=Number(input[4]); //храна на ден за 3 елен в килограми 

    let foodEatDeer1=numDaysSantaIsAway*foodFirstDeer;
    let foodEatDeer2=numDaysSantaIsAway*foodSecondDeer;
    let foodEatDeer3=numDaysSantaIsAway*foodThirdDeer;
    
    let totalFood=foodEatDeer1+foodEatDeer2+foodEatDeer3;

    if (totalFood<foodLeft) {
        let food=foodLeft-totalFood;
        console.log(`${Math.floor(food)} kilos of food left.`); //е закръглен към ПО-МАЛКОТО цяло число
        }
        if (totalFood>foodLeft) {
            let foodNeet=totalFood-foodLeft;
            console.log(`${Math.ceil(foodNeet)} more kilos of food are needed.`);//закръглен към ПО-ГОЛЯМОТО цяло число
        }

    
}
DeerOfSanta(["2","10","1","1","2"]);
//DeerOfSanta(["5","10","2.1","0.8","2"]);

