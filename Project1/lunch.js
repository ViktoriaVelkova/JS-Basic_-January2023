function lunch(input){    // ne raboti prawilno
  let nameofSerial=Number(input[0]);
  let timefSerial=Number(input[1]);
  let timeOfBreak=Number(input[2]);

  let timeEating=timeOfBreak*1/8;
  //console.log(timeEating);
  let timeResting=timeOfBreak*1/4;
 // console.log(timeResting);

  let timeLeft=timeOfBreak-(timeEating+timeResting);
 // console.log(timeLeft);

  if(timeLeft>=timefSerial){
 let time=Math.ceil(timeLeft-timefSerial);
 //console.log(time);
    console.log(`You have enough time to watch ${nameofSerial} and left with ${time} minutes free time.`);
 
}else{
    let need=Math.ceil(timefSerial-timeLeft);
    console.log(`You don't have enough time to watch ${nameofSerial}, you need ${need} more minutes.`);
  }

}
lunch (["Game of Thrones","60","96"]);
//lunch (["Teen Wolf","48","60"]);

