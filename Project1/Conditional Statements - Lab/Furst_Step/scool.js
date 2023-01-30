function scool(input){
    let NumberOfPacketsChemicals=Number(input[0]);
    let NumberOfPacketsMarkers=Number(input[1]);
    let LitersOfChalkboardCleaner=Number(input[2]);
    let PercentageReduction=Number(input[3]);

    let PriceChemical=NumberOfPacketsChemicals*5.80;
    let PriceMarkers=NumberOfPacketsMarkers*7.20;
    let PriceCleaner=LitersOfChalkboardCleaner*1.20;

    let PriceTotal=PriceChemical+PriceMarkers+PriceCleaner;
    let total=PriceTotal-((PriceTotal*PercentageReduction)/100);
    console.log(total);

}
scool(["4 ",
"2 ",
"5 ",
"13 "]
);