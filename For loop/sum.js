function sum(input) {
    let num=input[0];//получава числото като низ
    let sum=0;
    for(let i=0;i<num.length;i++){
       let curN=Number(num[i]);//парства числото от низ към число
       sum+=curN;
        //console.log(num[i]);

    }
    console.log(sum);
}
sum (["1234"]);