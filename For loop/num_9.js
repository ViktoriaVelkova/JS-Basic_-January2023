function num(input) {
    
    let startNum=Number(input[0]);
    let endtNum=Number(input[1]);
    let sum=0;
    let buff=" ";
    for(let i=startNum; i<=endtNum;i++){
        if(i%9===0){
            sum+=i;
            buff+=i+"\n ";
           // console.log(i);
        }
    } console.log(`The sum: ${sum}`);
    
     console.log(buff);
    

 }
//num (["100", "200"]);