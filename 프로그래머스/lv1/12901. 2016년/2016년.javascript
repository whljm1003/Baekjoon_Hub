function solution(a, b) {
    var answer = '';
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const today = new Date(`2016-${a}-${b}`).getDay();
    answer = WEEKDAY[today];
    return answer;
}
