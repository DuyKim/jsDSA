function Bubble(arr, length) {
    if(length < 2) return;
    let swapped = false; 

    for(let i = 0; i < length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            swapped = true;
        }
    }
    
    if(!swapped) return;
    Bubble(arr, length - 1);
}

let arr = Array(20)
                .fill(0)
                .map(e => e = Math.floor(Math.random() * 100))
// Bubble(arr, arr.length);

console.log(arr);

function BubbleLoop(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }

        if(!swapped) {
            break;
        }
    }
}

BubbleLoop(arr);
console.log(arr);
