function Counting(arr) {
    let length = arr.length,
        max = arr[0];
    
    for(let i = 0; i < length; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
            max = arr[i + 1]
        }
    }

    let countingArr = Array(max + 1).fill(0);

    for(let i = 0; i < length; i++) {
        countingArr[arr[i]]++;
    }

    for(let i = 0; i < countingArr.length - 1; i++) {
        countingArr[i + 1] = countingArr[i] + countingArr[i + 1]
    }

    let sortedArr = [];

    for(let i = 0; i < countingArr.length; i++) {
        sortedArr[countingArr[arr[i]] - 1] = arr[i];
        countingArr[arr[i]]--; 
    }
    return sortedArr;

}

let arr = Array(20)
            .fill(0)
            .map(e => e = Math.floor(Math.random() * 20))
console.log(arr)
console.log(Counting(arr));