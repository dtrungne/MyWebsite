function fibonacci(n) {
    if (n <= 1) return n;
    let fibPrev = 0;
    let fibCurr = 1;
    for (let i = 2; i <= n; i++) 
       {
        let temp = fibCurr;
        fibCurr += fibPrev;
        fibPrev = temp;
    }
    return fibCurr;
}
