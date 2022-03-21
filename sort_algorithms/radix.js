/** 
function CountDigits(number) {
    return Math.floor(Math.log10(number) + 1);
}

function GetDigit(number, index, maxCountDigit) {
    let convert = String(number).padStart(maxCountDigit, '0');
    let digit = Number(convert.charAt(maxCountDigit - index))
    return digit;
}

function GetMaxNumber(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }

    return arr[arr.length - 1];
}

function RadixSort(arr) {
    let maxN = GetMaxNumber(arr);
    let maxtDigit = CountDigits(maxN);
    
    
    for(let i = 1; i <= maxtDigit; i++) {
        let stored = Array(10).fill(0).map(e => e = []);
        for(let j = 0; j < arr.length; j++) {
            stored[GetDigit(arr[j], i, maxtDigit)].push(arr[j])
        }
        arr = stored.flat();
    }

    return arr;
};
*/

function GetMaxNumber(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }

    return arr[arr.length - 1];
}

function CountingSort(arr, place) {
    let size = arr.length,
        countArr = Array(10).fill(0),
        output = [...arr];

    for(let i = 0; i < size; i++) {
        let index = Math.floor(arr[i] / place);
        countArr[index % 10] ++;
    }

    for(let i = 0; i < 10; i++) {
        countArr[i + 1] += countArr[i]
    }

    let i = size - 1;
    while(i >= 0) {
        let index = Math.floor(arr[i] / place) % 10;
        output[countArr[index] - 1] = arr[i];
        countArr[index]--;
        i--;
    }

    for(let index = 0; index < size; index++) {
        arr[index] = output[index];
    }

}

function RadixSort(arr) {
    let maxN = GetMaxNumber(arr),
        place = 1;
    
    while(Math.floor(maxN / place) > 0) {
        CountingSort(arr, place)
        place *= 10;
    }

    return arr;
}


let arr = Array(20)
            .fill(0)
            .map(e => e = Math.floor(Math.random() * 1000))

console.log(arr);
arr = RadixSort(arr)
console.log(arr);