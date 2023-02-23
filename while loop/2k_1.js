function sum(input) {
  let n=Number(input[0]);//полуцхаваме число
    let num=1; // брояч с начална ст-т=1
    while(num<=n){
        console.log(num);
        num=2*num+1;
        /**
         * num=2* num+1;    8 вход  2*1+1=3
									2*3+1=7

         */
    }
}
sum (["8"]);