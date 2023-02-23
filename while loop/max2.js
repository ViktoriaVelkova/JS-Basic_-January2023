function max2(arr) {//ne raboti

    let outputString = "";
 
   for (let i = 0; i < arr.length; i++) {
 
     let current = arr[i];
 
     let j = i;
 
     if (current > arr[++j] && i < arr.length && current > arr[arr.length - 1]) {
 
       outputString += current + " ";
 
     }
 
     if (i == arr.length - 1) {
 
       outputString += arr[i];
 
     }
 
   }
 
   console.log(outputString);
 
 }
 max2(["45","-20","7","99","Stop"]);
 