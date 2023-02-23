function PC_shop(input) { //ne raboti
    let CPU=Number(input[0]);  //procesor $
    let VGA=Number(input[1]);//видео карта 
    let RAM=Number(input[2]);//raw
  let  quantityRAM=Number(input[3]); //ред брой RAM памети 

  let priceCPU=CPU*1.57;
  let priceVGA=VGA*1.57;
  let priceRAM=RAM*1.57;

  let percentageDiscount=0;

let  totalRAM=priceRAM*quantityRAM;
console.log(totalRAM.toFixed(2));
let totalCPUDiscount=(priceCPU-(priceCPU*percentageDiscount)/100);
console.log(totalCPUDiscount.toFixed(2));
let totalRAMDiscont=(totalRAM-(totalRAM*percentageDiscount)/100);
console.log(totalRAMDiscont.toFixed(2));
let total=totalCPUDiscount+totalRAMDiscont+totalRAM;
console.log(`Money needed - ${total.toFixed(2)} leva.`);

}
PC_shop(["500","200","80","2","0.05"]);
