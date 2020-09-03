function CountPrimes(n)
{
    let count = 0;
    let prime = [];
    if (n > 2) prime.push(2);
    for (let i = 2; i < n; i++)
    {
        for (let j = 0; j < prime.length; j++)
        {
            if (i % prime[j] == 0)
            {
                count = 1;
                break;
            }
            else count = 0;
        }
        if (count == 0)
        {
            prime.push(i);
        }
    }
    return prime.length;
}
console.log(CountPrimes(10000));