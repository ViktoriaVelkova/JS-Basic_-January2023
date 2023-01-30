function house(input) {
    let nameOfFowers=input[0];
    let numOffFowers=Number(input[1]);
    let many=Number(input[2]);
    let price=0;

    switch (nameOfFowers) {
        case 'Roses':
            price=numOffFowers*5.00;
            if (nameOfFowers==='Roses' && numOffFowers>80) {
               // price *=90;
                price=(price-((price*10)/100));
            }
            break;
        case 'Dahlias':
            price=numOffFowers*3.80;
             if (nameOfFowers==='Dahlias'&& numOffFowers>90) {
            
                    price=(price-((price*15)/100));
                   // price *=85;
                }
            break;
            case 'Tulips':
                price=numOffFowers*2.80;
                 if (nameOfFowers==='Tulips'&& numOffFowers>80) {
                    //price *=85;
                        price=(price-((price*15)/100));
                    }
                
                break; 
                
                case 'Narcissus':
                    price=numOffFowers*3.00;
                    if (nameOfFowers==='Narcissus'&&numOffFowers<120) {
                       
                        
                            //price=(price+((price*15)/100)); //трябва да се повиши цената 15%
                            price*=1.15;
                        }
                            break;
                case 'Gladiolus':
                    price=numOffFowers*2.50;
                 if (nameOfFowers==='Gladiolus' && numOffFowers<80) {
                       
                       
                           // price=(price+((price*20)/100)); //трябва да се повиши цената 20%
                           price*=1.20;
                        }
                           break;            
        
    } 
    //console.log(price.toFixed(2));
    if (many>=price) {
        let cost=many-price;
        console.log(`Hey, you have a great garden with ${numOffFowers} ${nameOfFowers} and ${cost.toFixed(2)} leva left.`);
      
    }else{
       
       let  cost=price-many;
        console.log(`Not enough money, you need ${cost.toFixed(2)} leva more.`);
    }

}
//house (["Roses","55","250"]);
//house (["Tulips","88","260"]);
//house (["Dahlias","112","460"]);   //Hey, you have a great garden with 112 Dahlias and 98.24 leva left.
house (["Narcissus","119","360"]);   //Not enough money, you need 50.55 leva more.



