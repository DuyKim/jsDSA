function SelectionLoop(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let minimum = arr[i];
        let index = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < minimum) {
                minimum = arr[j]
                index = j;
            };
        }

        if(index != i) [arr[index], arr[i]] = [arr[i], arr[index]];
    }
}

let rArr = Array(20)
            .fill(0)
            .map(e => e = Math.floor(Math.random() * 20))

SelectionLoop(rArr)
console.log(rArr);