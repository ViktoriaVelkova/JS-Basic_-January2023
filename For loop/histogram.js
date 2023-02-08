function his(input) {
    let n=Number(input[0]);
    let p1Cout=0;// брояч на диапазони 
    let p2Cout=0;
    let p3Cout=0;
    let p4Cout=0;
    let p5Cout=0;
    for(let i=1; i<=n;i++){
        let curN=Number(input[i]);// текуща итерация (завъртане на цикъла)
        if (curN<200) {
            p1Cout++; //записваме числото в диапазона
            
        }else if (curN>=200 && curN<=399) {
            p2Cout++;
        }else if (curN>=400 && curN<=599) {
            p3Cout++;
        }else if (curN>=600 && curN<=799) {
            p4Cout++;
        }else if (curN>=800) {
            p5Cout++;
        }

    }
    /*console.log(p1Cout);
    console.log(p2Cout);
    console.log(p3Cout);
    console.log(p4Cout);
    console.log(p5Cout);*/
    let p1Percent=(p1Cout/n)*100; // (броя на текущата група/общ брой числа)*100%
    let p2Percent=(p2Cout/n)*100;
    let p3Percent=(p3Cout/n)*100;
    let p4Percent=(p4Cout/n)*100;
    let p5Percent=(p5Cout/n)*100;
    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
   
}
his (["3","1","2","999"]);
//his (["20","53","7","56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);

