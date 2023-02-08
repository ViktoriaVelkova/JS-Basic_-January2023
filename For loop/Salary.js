function Salary(input) {   // не работи правилно 

    let nameWebSite=input[0];
    let salary=Number(input[1]);
    let numOpenWeb=Number(input[2]);
    let total=0;
    let monySalaryLeft=0;

    for(let i=500; i<=numOpenWeb;i++){
        switch (nameWebSite) {
            case "Facebook" : monySalaryLeft=salary-(numOpenWeb*150); break;
            case "Instagram" : monySalaryLeft=salary-(numOpenWeb*100); break;
            case "Reddit" : monySalaryLeft=salary-(numOpenWeb*50); break;
            case "Facebook" : monySalaryLeft=salary-(numOpenWeb*150); break;
            
        
           
        }
        
    }
    if (monySalaryLeft<=0) {
        
        console.log(`You have lost your salary.`);
        
       

    }
    if(monySalaryLeft>0){
        //let moneLeft=total-total;
        console.log(`${monySalaryLeft.toFixed(0)}`);
    }
    
    
}
//Salary (["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]); //outPut You have lost your salary.
//Salary (["3","500","Github.com","Stackoverflow.com","softuni.bg"]); // 500
Salary (["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]); // 350


