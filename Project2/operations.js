function oper(input) { // има грешка някъде 
    let num1=Number(input[0]);
    let num2=Number(input[1]);
    let sumbol=input[2];
    let EvenOrOdd='';
    let res=0;
    switch (sumbol) {
        case '+':
            res=num1+num2;
            if (res%2===0) {
                EvenOrOdd='even';
            }else{
                EvenOrOdd='odd';
            }
            console.log(`${num1} ${sumbol} ${num2} = ${res} - ${EvenOrOdd}`);
                
                break;
            case'-':
            res=num1-num2;
            if (res%2===0) {
                EvenOrOdd='even';
            }else{
                EvenOrOdd='odd';
            }
            console.log(`${num1} ${sumbol} ${num2} = ${res} - ${EvenOrOdd}`);
                
                break;
            case'*':
        res=num1*num2;
        if (res%2===0) {
            EvenOrOdd='even';
        }else{
            EvenOrOdd='odd';
        }
        console.log(`${num1} ${sumbol} ${num2} = ${res} - ${EvenOrOdd}`);
            
            break;

            case '/' :
                if (num2===0) {
                    console.log(`Cannot divide ${num1} by zero`);
                     //break; 
                            }
                res=num1/num2;
                console.log(`${num1} ${sumbol} ${num2} = ${res.toFixed(2)}`);
                break;
        case '%' :
            
                    res=num1 % num2;
                    console.log(`${num1} ${sumbol} ${num2} = ${res}`);
                    break;
                    
       
    
    }
}
//oper (["10","12","+"]);
//oper (["10","3","%"]);
oper (["112","0","%"]);
