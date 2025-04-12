function solution(s) {
    let arr = s.split(' ')
  
    const result = arr.map(word => {
      if (word.length === 0) return ''; 
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    
    return result
}