function solution(new_id) {
    let result = new_id
        .toLowerCase()
        .replace(/[^\w-\_\.]/g, '')
        .replace(/[\.]{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
    if (!result){
        result = 'a'
    }
    if (result.length >= 16){
        result = result.slice(0,15).replace(/\.$/, '');
    }
    if (result.length <= 2){
        while(result.length <= 2){
            result = result + result[result.length -1];
        }
    }
    return result;
}