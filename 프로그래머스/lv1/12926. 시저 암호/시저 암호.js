function solution(s, n) {
    let arr = s.split('').map(e => {
        
        let num = e.charCodeAt()+n;
        
        if(e === " ") return String.fromCharCode(32);
        
        if( e.toUpperCase() === e && num > 90 ) {
            return String.fromCharCode(num-26);
        } else if ( e.toLowerCase() === e && num > 122 ) {
            return String.fromCharCode(num-26);
        } else {
             return String.fromCharCode(num);
        };
    });
     return arr.join('');
};

// 공백 32
// 대문자 65~90 >> 90보다 크면 -26
// 소문자 97~122 >> 122보다 크면 -26