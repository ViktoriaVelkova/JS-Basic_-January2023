function computerFirm(input) { 
    let countPc = Number(input[0]);
   
    let sales = 0;
    let rating = 0;
    let sumRating = 0;
 
    for (let i = 1; i <= countPc; i++)
    {
        let possibleSalesrating = Number(input[i]);
        let curNumToString = possibleSalesrating.toString();
        let possibleSalesString100 = curNumToString[0]; //stotici
        let possibleSalesString10 = curNumToString[1]; //desetici
        let possibleSalesString = possibleSalesString100 + possibleSalesString10;
        let possibleSales = Number(possibleSalesString);
        let ratingString = curNumToString[2];
        rating = Number(ratingString);
 
        sumRating += rating;
 
        if (rating === 2)
        {sales += possibleSales * 0}
    else if ( rating === 3)
        {sales += possibleSales * 0.5}
    else if (rating === 4)
        {sales += possibleSales * 0.7}
    else if (rating === 5)
        {sales += possibleSales * 0.85}
    else if (rating === 6)
        {sales += possibleSales * 1}
    }
    let avgRate = sumRating / countPc;
  console.log (`${sales.toFixed(2)}`)
  console.log (`${avgRate.toFixed(2)}`)
    
}
computerFirm (["3","103","103","103"]);
