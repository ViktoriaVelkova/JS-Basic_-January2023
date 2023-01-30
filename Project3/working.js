function work(input) {
    let hours=Number(input[0]);
    let day=input[1];

        if (hours>=10 && hours<=18 && day!=='Sunday' ) {
            console.log(`open`);
        }else{
            console.log(`closed`);
        }

    }
work (["11","Sunday"]);
