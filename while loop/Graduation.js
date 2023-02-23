function Graduation(input) {
    let index=0;
    let name=input[index];
    index++;
    let grade=Number(input[index]);
    let i=1;
    let badGradeCounter=0;
    let sumGrade=0;
    let hasBeenExulet=false;
    while (i<=12) {
        if (grade<4.00) {
            badGradeCounter++;
            if (badGradeCounter===2) {
                hasBeenExulet=true;
                break;
            }
             grade=Number(input[index]);//promenq se ocenkata
            index++;//ученика остава в същия клас и преминавам към следващия
            continue;
            }
        i++;
        sumGrade+=grade;
        grade=Number(input[index]);
        index++;
        
    }
    if (hasBeenExulet) {
        console.log(`${name} has been excluded at ${i} grade`);
    }else{
    console.log(`${name} graduated. Average grade: ${(sumGrade/12).toFixed(2)}`);}
    
}
//Graduation(["Mimi", "5","6","5","6","5","6","6","2","3"]);
Graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);

