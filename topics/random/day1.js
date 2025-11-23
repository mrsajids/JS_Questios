var thirdMax = function (nums) {
  let large1 = -Infinity;
  let large2 = -Infinity;
  let large3 = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // if i get same element i will not proceed
    if (large1 == element || large2 == element || large3 == element) {
      continue;
    }

    if (element > large1) {
      large3 = large2;
      large2 = large1;
      large1 = element;
    } else if (element > large2) {
      large3 = large2;
      large2 = element;
    } else if (element > large3) {
      large3 = element;
    }
  }
  return [large1, large2, large3];
};
// console.log(thirdMax([2, 4, 3, 1]));

var isAnagram = function (s, t) {
  if (s.length === t.length) {
    // const str2 = t.split("");
    // for (let i = 0; i < t.length; i++) {
    //     const element = s[i];
    //     if (!str2.includes(element)) return false;
    // }
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) + 1);
      } else {
        map.set(s[i], 1);
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (map.has(t[i])) {
        map.set(t[i], map.get(t[i]) - 1);
        if (map.get(t[i]) == 0) map.delete(t[i]);
      } else {
        return map;
      }
    }
    return map;
  } else {
    return map;
  }
};
console.log(isAnagram("aabb", "abab"));
