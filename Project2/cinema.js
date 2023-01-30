function cinema(input) {
    let projection=input[0];
    let r=Number(input[1]);
    let c=Number(input[2]);
    if (projection==="Premiere") {
       let price=r*c*12.00;
       console.log(price.toFixed(2)); 
    }else if (projection==="Normal") {
        let price1=r*c*7.50;
       console.log(price1.toFixed(2)); 
    }else if (projection==="Discount") {
        let price2=r*c*5.00;
       console.log(price2.toFixed(2)); 
    }
}
cinema (["Discount","12","30"]);
