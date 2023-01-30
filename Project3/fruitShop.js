function fry(input) {
    let fruit=input[0];
    let day=input[1];
    let num=Number(input[2]);
   let price;
    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana"){
                    price = num * 2.50;
                }
                else if (fruit == "apple"){
                    price = num * 1.20;
                }
                else if (fruit == "orange"){
                    price = num * 0.85;
                }
                else if (fruit == "grapefruit"){
                    price = num * 1.45;
                }
                else if (fruit == "kiwi"){
                    price = num * 2.70;
                }
                else if (fruit == "pineapple"){
                    price = num * 5.50;
                }
                else if (fruit == "grapes")
                {
                    price = num * 3.85;
                }
    }
    if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana"){
            price = num * 2.70;
        }
        else if (fruit == "apple"){
            price = num * 1.25;
        }
        else if (fruit == "orange"){
            price = num * 0.90;
        }
        else if (fruit == "grapefruit"){
            price = num * 1.60;
        }
        else if (fruit == "kiwi"){
            price = num * 3.00;
        }
        else if (fruit == "pineapple"){
            price = num * 5.60;
        }
        else if (fruit == "grapes")
        {
            price = num * 4.20;
        } 
    }
    console.log(price.toFixed(2));

}
fry(["orange","Sunday","3"]);   //76 points
