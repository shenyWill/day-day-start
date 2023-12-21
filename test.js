var removeElement = function (nums, val) {
    let distance = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            distance++;
        } else {
            i++;
        }
    }
    console.log(nums);
    return distance;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));