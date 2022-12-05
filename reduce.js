// Function #1
const extractValue = (arr, key) => {
    return arr.reduce((accumulator, nextValue) => {
        accumulator.push(nextValue[key]);
        return accumulator;
    }, [])
};

// Function #2 Had a bit of trouble with this one, so I consulted the solution help after about half an hour
const vowelCount = (str) => {
    let lowerCase = str.toLowerCase();
    let vowels = 'aeiou';
    return lowerCase.split('').reduce((acc, next) => {
        if (vowels.indexOf(next) !== -1) {
            if (acc[next]) {
                acc[next]++
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {})
};

// Function #3
const addKeyAndValue = (arr, key, value) => {
    return arr.reduce((acc, next, index) => {
        acc[index][key] = value;
        return acc;
    }, arr)
};

// Function #4
const partition = (arr, callback) => {
    return arr.reduce((acc, next) => {
        if (callback(next) === true) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[], []])
};