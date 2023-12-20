var merge = function(nums1, m, nums2, n) {
    // 两个指针
    let i = 0,j = 0;
    while(i <= m) {
        if (nums1[i] < nums2[j] && nums1[i] !== 0) {
            i++;
        } else {
            nums1.splice(i, 0, nums2[j]);
            nums1.length--;
            j++;
            i++;
            
        }
    }
    console.log(nums1);
};

merge([1,2,3,0,0,0], 3, [2,4,5], 3);

console.log(123);