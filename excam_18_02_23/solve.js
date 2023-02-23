function solve(input) {
    //Задача 1. Екскурзия
    let numPeopleGroup=Number(input[0]); //1.	Броят на хората в групата 
    let numOvernightStays=Number(input[1]);      //2.	Броят на нощувките 
    let cardTransport=Number(input[2]);  //3.	Броят на картите за транспорт      
    let numTickets=Number(input[3]);    //4.	Броят на билетите за музеи 

    let priceOvernightStay=20*numOvernightStays;
    console.log(priceOvernightStay.toFixed(2));
    let priceCardTransport=1.60*cardTransport;
    console.log(priceCardTransport.toFixed(2));
    let priceTickets=6*numTickets;
    console.log(priceTickets.toFixed(2));
    let totalPriceOfOnePerson=priceOvernightStay+priceCardTransport+priceTickets;
    console.log(totalPriceOfOnePerson.toFixed(2));
  let totalPriceGroup=totalPriceOfOnePerson*20;
  console.log(totalPriceGroup.toFixed(2));
  let unexpectedCosts=totalPriceGroup+((totalPriceGroup*25)/100);
  console.log(unexpectedCosts.toFixed(2));


}
solve (["20","14","30","6"]);
