function fish(input){
    let length=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let percent=Number(input[3]);

    let lengthDM = length / 10.0;
    let widthDM = width / 10.0;
    let heightDM = height / 10.0;

    let totalLiters = lengthDM * widthDM * heightDM;
    let filledLiters = totalLiters * (percent / 100.0);
    let emptyLiters = totalLiters - filledLiters;
    console.log(emptyLiters);
}
fish(["85 ",
"75 ",
"47 ",
"17 "]
);