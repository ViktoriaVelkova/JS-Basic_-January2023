function luly(input) {
    let age=Number(input[0]);
    let priceWashMashine=Number(input[1]);//цена пералня
    let priceToy=Number(input[2]);//единична цена играчка
    let totalMone=0;// събрани пари
    let evenMoneyBirtday=10;
    for(let i=1; i<=age;i++){

    if (i%2===0) {
        totalMone+=evenMoneyBirtday;
        totalMone-=1; //дава на брат си 1лв
        evenMoneyBirtday+=10;

        
    }else{
            totalMone+=priceToy; //     първата играчка е 6лв.
        }
    }
    if (totalMone>=priceWashMashine) {
        let monyLeft=totalMone-priceWashMashine;// общи пари-цена пералня= останали пари
        console.log(`Yes! ${monyLeft.toFixed(2)}`);
    }else{
        let monyNeed=priceWashMashine-totalMone  // цена пералня- общи пари= ней достигат
            console.log(`No! ${monyNeed.toFixed(2)}`);
    }
}
//luly (["10","170.00","6"]);
luly (["21","1570.98","3"]);

