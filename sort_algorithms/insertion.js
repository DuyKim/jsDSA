function Insertion(arr) {
    let length = arr.length;

    for (let i = 1; i < length; i++) {
        let key = arr[i],
            step = i;

        for (let j = i; j > 0; j--) {
            if (key < arr[j - 1]) {
                arr[j] = arr[j - 1];
                step = j - 1;
            } else break;
        }

        if (step != i) arr[step] = key;
    }
}

function InsertionWhileLoop(arr) {
    let length = arr.length;

    for(let step = 1; step < length; step++) {
        let key = arr[step],
            j = step - 1;

        while( j >= 0 && key < arr[j]){
            arr[j + 1] = arr[j]
            j--;
        }

        arr[j + 1] = key;
    }
}

let arr = Array(20)
    .fill(0)
    .map(e => e = Math.floor(Math.random() * 30))
console.log(arr);
Insertion(arr);
console.log(arr);