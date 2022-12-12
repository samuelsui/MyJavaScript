function randomComputerHand(){
    var ran_pc_num = Math.floor(Math.random() * 3);
    if(ran_pc_num == 0) {
        return '가위';
    } else if (ran_pc_num == 1) {
        return '바위';
    } else {
        return '보';
    }
}

function startScript(myName, myHand, computerName, computer_hand) {
    console.log(myName + ': '+ myHand + ': '+ computerName + ': '+ computer_hand);
}

function printWinner(name) {
    console.log(name +'의 승리입니다.');
}

function printDraw() {
    console.log('비겼습니다.');
}

function rsp(myHand) {
    if (myHand != '가위' && myHand != '바위' && myHand != '보') {
        console.log('잘못 입력하셨습니다.');
        return;
    }

    var computerName = "컴퓨터";
    var myName = '당신';

    var computer_hand = randomComputerHand();

    startScript(myName, myHand, computerName, computer_hand);
    
    if(computer_hand == '가위' && myHand == '보' || computer_hand == '바위' && myHand== '가위' || computer_hand == '보' && myHand == '바위') {
        printWinner(computerName);
    } else if (computer_hand == '가위' && myHand == '바위' || computer_hand == '바위' && myHand == '보' || computer_hand == '보' && myHand == '가위') {
        printWinner(myName);
    } else {
        printDraw();
    }
}

