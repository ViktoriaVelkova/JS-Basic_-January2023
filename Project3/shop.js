function shop(input) { // не работи 
    let city=input[0];
    let product=input[1];
    let price=0;
    let numOfProduct=Number(input[2]);
    switch (city) {
        
            
            case 'Plovdiv':
            if (product==='coffee') {
                price=numOfProduct*0.40;

            }else if (product==='water') {
                price=numOfProduct*0.70;
            }else if (product==='beer') {
                price=numOfProduct*1.15;
            }
            else if (product==='sweets') {
                price=numOfProduct*1.30;
            }else if (product==='peanuts') {
             
                price=numOfProduct*1.50;
            }break;

            case 'Varna':
                if (product==='coffee') {
                    price=numOfProduct*0.45;
    
                }else if (product==='water') {
                    price=numOfProduct*0.70;
                }else if (product==='beer') {
                    price=numOfProduct*1.10;
                }
                else if (product==='sweets') {
                    price=numOfProduct*1.35;
                }else if (product==='peanuts') {
                 
                    price=numOfProduct*1.55;
                }break;
    
        
    }
    if (city=="Sofia") {
        
            if (product=="coffee") {
                price=numOfProduct*0.50;

            }else if (product=="water") {
                price=numOfProduct*0.80;
            }else if (product=="beer") {
                price=numOfProduct*1.20;
            }
            else if (product=="sweets") {
                price=numOfProduct*1.45;
            }else if (product=="peanuts") {
             
                price=numOfProduct*1.60;
            }
    }
    console.log(price.toFixed(2));
}
shop (["peanuts","Sofia","2"]);
