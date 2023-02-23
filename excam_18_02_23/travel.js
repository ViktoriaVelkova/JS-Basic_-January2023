function  travel(input ) {  // 75/100
    //Задача 3. Туристическа агенция 6/7 july 2019
    let city=input[0];
    let packet=input[1];
    let Vip=input[2];
    let days=Number(input[3]);
    

    if (days<1) {

        console.log(`Days must be positive number!`);
        return;
        
    }
    
    if (days>7) {
        days-=1; //1 e bezplaten
        
    }
    let totalPrice=0;
    switch (city) {
        case 'Bansko':
        case 'Borovets':
            if (packet==='withEquipment') {
                totalPrice=days*100;
                if (Vip='yes') {
                    totalPrice*=0.90;
                    
                }
            }else if (packet==='noEquipment') {
                totalPrice=days*80;
                if(Vip==='yes'){
                    totalPrice*=0.95;
                }
                
            }else{
                console.log('Invalid input!');return;
            }
            
            break;
            
            case 'Varna':
            case 'Burgas':
                if (packet==='withBreakfast') {
                    totalPrice=days*130;
                    if (Vip==='yes') {
                        totalPrice*=0.88;  // остъпка 100%-12%=88/100%=0.88
                    }
                }else if(packet==='noBreakfast'){
                    if (Vip==='no') {
                        totalPrice*=0.93;
                        
                    }
                    totalPrice=days*100;

                }else{
                    console.log('Invalid input!');return;
                }
            
            break;
            default:console.log('Invalid input!'); return;
    
        
    }
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
    


    
}
travel(["Borovets","noEquipment","yes","6"]);
//travel (["Gabrovo","noBreakfast","no","3"]);

