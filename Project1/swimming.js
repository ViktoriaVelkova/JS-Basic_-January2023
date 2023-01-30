function swim(input){
    let recordSec=Number(input[0]);
    let distans=Number(input[1]);
    let timeForOneMetur=Number(input[2]);

    let time=distans*timeForOneMetur;
    let timeLost=Math.floor(distans/15)*12.5;

    let finalTime=time+timeLost;
    if(finalTime<recordSec){
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    }else{
        let timeNeed=finalTime-recordSec;
        console.log(`No, he failed! He was ${timeNeed.toFixed(2)} seconds slower.`);
    }

}
//swim(["10464","1500","20"]);
