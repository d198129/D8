let arr = [12, 9, 1, 5, 2, 7, 4, 6, 8, 3, 2];
// 冒泡排序
function bubbling(param) {
    let arr = param
    let temp
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbling(arr));

// 快速排序
function quick(param) {
    let arr = param;
    if (arr.length <= 1) return arr;
    let left = [];
    let right = [];
    let mid = arr.splice(0, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= mid) {
            right.push(arr[i]);
        } else {
            left.push(arr[i])
        }
    }
    return quick(left).concat(mid, quick(right));
}
console.log(quick(arr));