function PinCode(input) {
    let first=Number(input[0]);
    let second=Number(input[1]);
    let third=Number(input[2]);
    for ( i = 2; i <= first; i += 2)
    {
        for ( j = 2; j <= second; j++)
        {
            for ( k = 2; k <= third; k += 2)
            {
                if (j == 2 || j== 3|| j == 5 || j == 7)
                {
                    console.log(i + " " + j + " " + k);
                }
            }
    }    }
}
PinCode(["3","5","5"]);

