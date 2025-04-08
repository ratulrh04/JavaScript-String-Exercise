// Example 1 

// let str = 'geeksforgeeks'
// let test = str.replace('g', 'j')
// console.log(test)


// Example 2

// let str = 'geeksforgeeks'
// let test = str.replace(/g/k, 'j')
// console.log(test)


// Example 3 

// let str = 'geeksforgeeks'
// let test = str.split('g').join('')
// console.log(test)


// Example 4 

// let s = "GeeksForGeeks";
// let c = 'G';
// let res = Array.from(s)
//     .filter(char => char !== c)
//     .join('');
// console.log(res);


// Example 5

let s = "GeeksForGeeks";
let c = 'G';
let res = "";

for (let i = 0; i < s.length; i++) {
    if (s[i] !== c) {
        res += s[i];
    }
}

console.log(res);




