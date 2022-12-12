//컴퓨터 가위 바위 보 값 구하는 함수
function getComputerValue(){
  var randomNumber = Math.floor(Math.random()*3); // 0, 1, 2 중 하나의 값을 랜덤으로 생성
  if(randomNumber == 0){
    return "가위";
  }
  else if(randomNumber == 1){
    return "바위";
  }
  else {
    return "보";
  }
}

//가위 바위 보 값 출력하는 함수
function printValues(yourName, yourValue, computerName, computerValue){
  console.log(yourName + ": " + yourValue + ", " + computerName + ": " + computerValue);
}

// 승자를 출력하는 함수
function printWinner(name){
  console.log(name+"의 승리입니다.");
}

// 비겼음을 출력하는 함수
function printDraw(){
  console.log("비겼습니다.");
}

//메인 게임 함수
function rockScissorPaper(yourValue){
  if(yourValue != "가위" && yourValue != "바위" && yourValue != "보"){
    console.log("잘못 입력하셨습니다.");
    return;
  }

  var computerName = "컴퓨터";
  var yourName = "당신";

  var computerValue =  getComputerValue();

  printValues(yourName, yourValue, computerName, computerValue);

  if(computerValue=="가위" && yourValue=="보" || computerValue=="바위" && yourValue=="가위" || computerValue=="보" && yourValue=="바위"){
    printWinner(computerName);
  }
  else if(computerValue=="가위" && yourValue=="바위" || computerValue=="바위" && yourValue=="보" || computerValue=="보" && yourValue=="가위"){
    printWinner(yourName);
  }
  else {
    printDraw();
  }
}
