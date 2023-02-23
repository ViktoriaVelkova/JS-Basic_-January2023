function sumNum(input) {
    let index=0;// начален индекс
    let number=Number(input[index]);
    index++;  //индекса се увеличава с 1
    let sum=0;
    while (sum<number) {
        let currNumber=Number(input[index]);
        sum+=currNumber;
        index++;
        
    }
    console.log(sum);
}
sumNum (["100","10","20","30","40"]);
