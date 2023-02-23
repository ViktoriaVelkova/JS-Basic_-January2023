function readText(input) {
  let index=input[0] ;
  while (true) {
    let str=input[index];
    index++;
    if(str==='Stop') {
        break;
    }
  } 
  console.log(str);
}

readText(["Sofia","Berlin","Moscow","Athens","Madrid","London","Paris","Stop","AfterStop"]);
