function carePuppy(input) {  // ne raboti
    let index=0;
    let command = input[index];
    index++;
    let allFoodHave = Number(input[index]);
    index++;

    let allGramFood = allFoodHave * 1000;

    

    let eatenFood = 0;

    let totalFood= 0;

    

 

    while(command !== "Adopted"){

        eatenFood = input[index];
       /// index++;

        eatenFood++;

        totalFood += eatenFood;

    }

    if (totalFood > allGramFood){

        console.log(`Food is not enough. You need ${totalFood -  allGramFood} grams more.`);

    }else if ( totalFood < allGramFood){

        console.log(`Food is enough! Leftovers: ${allGramFood - totalFood} grams.`);

    }
}
carePuppy(["4","130","345","400","180","230","120","Adopted"]);
