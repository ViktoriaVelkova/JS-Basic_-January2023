function min(input){
    //03. Time + 15 Minutes
    let hours=Number(input[0]);
    let min=Number(input[1]);
    let totalMin=hours*60+min+15;

   let finalhours=Math.floor(totalMin/60);
    let finalmin=totalMin%60;
    
    if(finalhours===24){
        finalhours=0;
    }

    if(finalmin<10){
        console.log(`${finalhours}:0${finalmin}`);
    }
    else{
        console.log(`${finalhours}:${finalmin}`);
    }
 
    
}
min (["23", "59"]);