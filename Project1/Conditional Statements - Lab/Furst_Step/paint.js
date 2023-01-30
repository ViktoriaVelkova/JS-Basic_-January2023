function pain(input){

   /*let paint=Number(input[0]);
   let nailon=Number(input[1]);
   let thinner=Number(input[2]);
   let workT=Number(input[3]);

    let PricePaint=paint*14.50;
    let addpaint=(PricePaint*10)/100;// dop paint
    let totalPaint=PricePaint+addpaint;  // totAl paint

    let PriceNailon=nailon*1.50;
    let dopNailon=PriceNailon+2; 

    let PriceThinner=thinner*5.00;

    let totalMaterial=totalPaint+dopNailon+PriceThinner+0.40;

    let workPriceforOneHours=(totalMaterial*30)/100;
    let totalWork=workT*workPriceforOneHours;

    let sum=totalMaterial+totalWork;
console.log(sum);*/
function repainting(arr) {
    // Error with brackets (Number(arr[0]) + 2)
    let naylon = (Number(arr[0]) + 2) * 1.5;
    // Error with brackets Number(arr[1])
    let paint = Number(arr[1]) * 1.1 * 14.50;
    let thinner = Number(arr[2]) * 5;
    let bag = 0.4;
    let workingTime = Number(arr[3])
    let totalMaterials = naylon + paint + thinner + bag;
    let workman = totalMaterials * 0.30 * workingTime;
    let total = totalMaterials + workman;

    console.log(total);
}
}
pain(["5 ",
"10 ",
"10 ",
"1 "]
);