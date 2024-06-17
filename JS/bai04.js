function demSoNguyenTo(n) 
    {
    let count = 0;
    for (let i = 2; i <= n; i++) 
        {
        if (kiemTraNguyenTo(i)) 
          {
            count++;
        }
    }
    return count;
}
