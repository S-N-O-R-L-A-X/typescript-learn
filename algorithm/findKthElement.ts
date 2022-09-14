function partition(nums: number[], left: number, right: number) {
    let pivot = left, l = left + 1, r = right;
    while (l <= r) {
        while (l <= r && nums[l] >= nums[pivot])
            l++; // find the first number < nums[pivot] from left
        while (l <= r && nums[r] <= nums[pivot])
            r--; // find the first number > nums[pivot] from right
        if (l <= r && nums[l] < nums[pivot] && nums[r] > nums[pivot]) {
            swap(nums, l++, r--);
        }
    }
    swap(nums, pivot, r); //swap pivot to its place
    return r; //return the position of pivot
}

function swap(nums: number[], l: number, r: number) {
    let tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
}

function findKthLargest(nums: number[], k: number): number {
    if (nums.length == 0 || nums == null)
        return 0;
    let left = 0, right = nums.length - 1;
    while (true) {
        let position = partition(nums, left, right);
        if (position == k - 1)
            return nums[position];
        else if (position > k - 1)
            right = position - 1;
        else
            left = position + 1;
    }
};