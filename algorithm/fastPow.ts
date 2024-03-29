function fastpow(x: bigint, n: bigint, mod: bigint = 1n): bigint {
  let res: bigint = BigInt(1);
  while (n > BigInt(0)) {
    if (n & BigInt(1)) {
      res = (res * x) % mod;
    }
    x = (x * x) % mod;
    n >>= BigInt(1);
  }
  return res;
};
