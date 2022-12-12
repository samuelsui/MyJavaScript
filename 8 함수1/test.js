function ranGrade(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function stuGrade (name){
    var kor = ranGrade(1, 100);
    var eng = ranGrade(1, 100);
    var math = ranGrade(1, 100);

    alert(name+'\nkorean :'+ kor +'\nenglish :'+ eng +'\nmathematics :'+ math);

    var average = (kor + eng + math)/3;
    
    if (average <= 50){
        console.log('보충수업 대상자 입니다.');
    } else if (average > 50) {
        console.log('보충수업 대상자가 아닙니다.');
    }
}

// var a = 2;
// var b = 3;
// var c = 4;
// console.log(a*b*c/3);
stuGrade("samuel");
