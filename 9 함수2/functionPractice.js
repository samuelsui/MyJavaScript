function supplementClass (korean, english, mathematics) {
    if (korean < 50, english < 50, mathematics < 50) {
        return '종합 보충';
    } else if (korean < 50 || english < 50 || mathematics < 50) {
        return '단과 보충';
    } else {
        return'보충 수업 없음';
    }
}
