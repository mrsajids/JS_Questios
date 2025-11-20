
var thirdMax = function(nums) {
    let large1=nums[0]
    let large2=nums[0]
    let large3=nums[0]
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element>large1) {
            large1=element
        }else if (element>large2) {
            large2 = element;
        }else if (element>large3&&element!=large2) {
            large3 = element;
        }
        
    }
    return [large1,large2,large3]
};
console.log(thirdMax([2,2,3,1]))