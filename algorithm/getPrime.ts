function getPrime(n: number) {
    const isPrime = new Array(n).fill(true);
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            console.log(i + ',')
        }
    }
}

getPrime(50000);