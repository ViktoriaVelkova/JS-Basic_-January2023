function fug(input) {
    let tupe=input[0]; //string 
    if (tupe==="square") {
        
        let side=Number(input[1]);
        let res=side*side;
        console.log(res.toFixed(3));
    }else if(tupe==="rectangle"){
        let a=Number(input[1]);   
        let b=Number(input[2]); 
        let result=a*b; 
        console.log(result.toFixed(3));
    }else if (tupe==="circle") {
        let r=Number(input[1]);
        let res1=r*r*Math.PI;
        console.log(res1.toFixed(3)); 
    } else if (tupe==="triangle") {
        let c=Number(input[1]);
        let hc=Number(input[2]);
        let res2=(c*hc)/2;
        console.log(res2.toFixed(3)); 
    }
        

       
}
fug (["rectangle","7","2.5"]);
