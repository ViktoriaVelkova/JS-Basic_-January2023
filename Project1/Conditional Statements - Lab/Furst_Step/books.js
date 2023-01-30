function book(input){
    //04. Vacation Books List
    let brStr=Number(input[0]);
    let strForOneHours=Number(input[1]);
    let day=Number(input[2]);
    let totalTime=brStr/strForOneHours;
    let totalHour=totalTime/day;
    console.log(totalHour);
}
book(["212 ",
"20 ",
"2 "]
);