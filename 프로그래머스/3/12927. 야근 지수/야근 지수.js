function solution(n, works) {
    works.sort((a, b) => b - a);

    while (n > 0) {
        const max = works.shift();
        if (max === 0) break;

        let inserted = false;
        for (let i = 0; i < works.length; i++) {
            if (works[i] <= max - 1) {
                works.splice(i, 0, max - 1);
                inserted = true;
                break;
            }
        }
        if (!inserted) works.push(max - 1); 
        n--;
    }

    return works.reduce((sum, w) => sum + w * w, 0);
}