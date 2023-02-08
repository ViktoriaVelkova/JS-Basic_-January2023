function step(input) {
    let n=Number(input[0]);
    let num=1; // начална стойност
    for(let i=0; i<=n;i+=2){
        console.log(num);
        num=num*2*2;
    }
}
step (["7"]);