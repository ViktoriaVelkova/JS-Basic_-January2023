function shop(input){
    /**•	Пъзел - 2.60 лв.
•	Говореща кукла - 3 лв.
•	Плюшено мече - 4.10 лв.
•	Миньон - 8.20 лв.
•	Камионче - 2 лв.
 */
    let priceholiday=Number(input[0]);
    let pizzels=Number(input[1]);
    let dolls=Number(input[2]);
    let beers=Number(input[3]);
    let minions=Number(input[4]);
    let trucks=Number(input[5]);

    let toysPrice=(pizzels*2.60)+(dolls*3)+(beers*4.10)+(minions*8.20)+(trucks*2);
    //console.log(`toysPrice: ${toysPrice.toFixed(2)}`);

    let toysCount=pizzels+dolls+beers+minions+trucks;
    //console.log(`toysCount: ${toysCount}`);
    if (toysCount>=50){
        // otstupka = 100%- 25%= 75% da se plati ot klienta
        toysPrice=(toysPrice*75)/100;
        //console.log(`toysPrice: ${toysPrice.toFixed(2)}`);

    }
    let moneWont=toysPrice; // спечелена сума
    moneWont=moneWont-(moneWont*10)/100; // пари за наема 
    //console.log(`moneWont: ${moneWont.toFixed(2)}`);
    if(moneWont>=priceholiday){
        let manyLeft=moneWont-priceholiday;
        //console.log(`manyLeft: ${manyLeft.toFixed(2)}`);
        console.log(`Yes! ${manyLeft.toFixed(2)} lv left.`);//закръгля до 2 знак след запетаята
    }else{
        let maneneed=priceholiday-moneWont;
       // console.log(`maneneed: ${maneneed.toFixed(2)}`);
        console.log(`Not enough money! ${maneneed.toFixed(2)} lv needed.`);
    }


}

shop(["320","8","2","5","5","1"]);

