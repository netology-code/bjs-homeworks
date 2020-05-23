function sleep(milliseconds)
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => arr2[index] === item);
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
    let memory = [];

    return (...args) => {
       //console.log(memory);
        const arr = Array.from(args);
        const item = memory.find((item) => compareArrays(item.args, arr));
        if (item !== undefined) {
            //console.log('Return from memory');
            return item.result;
        } else {
            //console.log('Count!');
            if (memory.length >= limit) {
                memory.shift();
            }
            const result = fn(...args);
            memory.push({
                args: arr,
                result: result
            });
            return result;
        }

    }
}

console.log(mSum(3, 4)); // 7
console.log(mSum(8, 9, 5, 4)); // 26
console.log(mSum(9, 2, 4)); // 15
console.log(mSum(1, 2, 3)); // 6
console.log(mSum(1, 2, 3)); // 6
console.log(mSum(3)); // 3
console.log(mSum(3)); // 5
console.log(mSum(5)); // 5