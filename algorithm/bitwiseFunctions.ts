/**
 * 
 * @param num 
 * @returns 1s in num
 */
function bitCount(num: number): number {
	num = num - ((num >>> 1) & 0x55555555);
	num = (num & 0x33333333) + ((num >>> 2) & 0x33333333);
	num = (num + (num >>> 4)) & 0x0f0f0f0f;
	num = num + (num >>> 8);
	num = num + (num >>> 16);
	return num & 0x3f;
}