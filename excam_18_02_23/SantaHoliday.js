function SantaHoliday(input){ // ne raboti
    let daysToStay=Number(input[0]); //дни за престой 
    let typeOfRoom=input[1];//вид помещение 
    let evaluation=input[2];//оценка

    let priceRoomForOnePerson=18; //за нощувка
    let priceApartment=25;
    let pricePresidentApartment=35;
    let totalPrice=0; // обща цена 
    let priceDiscounted=0;// Цена за престоя с отстъпка
    let priceEvaluation=0; // Крайна цена на престоя с оценката

    switch (typeOfRoom) {
        case "room for one person":
            if (10<daysToStay && daysToStay<15) {
                //не ползва намаление
                totalPrice=(daysToStay-1)*priceRoomForOnePerson;
                //console.log(totalPrice);
                priceEvaluation=totalPrice+((totalPrice*25)/100);
               // console.log(priceEvaluation.toFixed(2));
            } break;

            case "apartment":
            if (10>daysToStay) {
                
                totalPrice=(daysToStay-1)*priceApartment;
                //console.log(totalPrice);
                 // ползва намаление 30%
                priceDiscounted=totalPrice-((totalPrice*30)/100);
                //console.log(priceDiscounted.toFixed(2));
    // ползва намаление => Ако оценката му е позитивна, към цената с вече приспаднатото намаление Дядо Коледа добавя 25%  към нея.
               // priceEvaluation=priceDiscounted+((priceDiscounted*25)/100);
                //console.log(priceEvaluation.toFixed(2));
            } 
            else if(10<=daysToStay && daysToStay<=15){
                totalPrice=(daysToStay-1)*priceApartment;
                //console.log(totalPrice);
                 // ползва намаление 35%
                priceDiscounted=totalPrice-((totalPrice*35)/100);
                //console.log(priceDiscounted.toFixed(2));
    // ползва намаление => Ако оценката му е позитивна, към цената с вече приспаднатото намаление Дядо Коледа добавя 25%  към нея.
                //priceEvaluation=priceDiscounted+((priceDiscounted*25)/100);
                //console.log(priceEvaluation.toFixed(2));  

            }else if(15>daysToStay ) {
                totalPrice=(daysToStay-1)*priceApartment;
                //console.log(totalPrice);
                 // ползва намаление 50%
                priceDiscounted=totalPrice-((totalPrice*50)/100);
                console.log(priceDiscounted.toFixed(2));
    // ползва намаление => Ако оценката му е позитивна, към цената с вече приспаднатото намаление Дядо Коледа добавя 25%  към нея.
                priceEvaluation=priceDiscounted+((priceDiscounted*25)/100);
                //console.log(priceEvaluation.toFixed(2));  

            }break;
            case "president apartment":
                if (10>daysToStay) {
                    totalPrice=(daysToStay-1)*pricePresidentApartment;
                    priceDiscounted=totalPrice-((totalPrice*10)/100);
                    //priceEvaluation=totalPrice+((totalPrice*25)/100);
                }else if (10<=daysToStay && daysToStay<=15) {
                    totalPrice=(daysToStay-1)*pricePresidentApartment;
                    priceDiscounted=totalPrice -((totalPrice*15)/100);
                    

                }else if (15>daysToStay ) {
                    totalPrice=(daysToStay-1)*pricePresidentApartment;
                    priceDiscounted=totalPrice -((totalPrice*20)/100);
                  
                }
                break;

            }
            if (evaluation=="negative") {
                priceEvaluation=totalPrice -((totalPrice*10)/100);
                
            }
            if (evaluation=="positive") {
                priceEvaluation=totalPrice +((totalPrice*25)/100);
            }
    console.log(priceEvaluation.toFixed(2));

}

//SantaHoliday (["14","apartment","positive"]);
SantaHoliday (["30","president apartment","negative"]);
//SantaHoliday (["12","room for one person","positive"]);
//SantaHoliday (["2","apartment","positive"]);


